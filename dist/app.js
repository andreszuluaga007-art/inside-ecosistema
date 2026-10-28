(function(){'use strict';
 const C=window.InsideCore,N=window.InsideNavigation,$=id=>document.getElementById(id),KEY='inside-pauses-v2',LEGACY_KEY='inside-gimnasio-piloto-v1';
 const routeNames={Contacto:'Hacer una pausa',Perspectiva:'Tratarme mejor',Dirección:'Resolver algo'};
 const phaseScreens={step:['step-screen','practice-title'],check:['check-screen','check-title'],feedback:['feedback-screen','feedback-title']};
 let state=C.freshState(),selectedId='notar',territory='all',screen='home-screen',practice=null,lastPractice=null;
 let infoPage=0,helpPage=0,modalResume=false,switchingModal=false,modalReturn='menu-trigger',toastTimer=null,toolLifecycle=null;
 let gesture={moved:0,cancelled:false},lastTap=-1000;
 const handledCloses=new WeakMap();
 const sound=new window.InsideAudio(),modals=[...document.querySelectorAll('[data-modal]')],infoPages=[...document.querySelectorAll('[data-info-page]')];
 try{const saved=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(LEGACY_KEY)||'null');if(saved?.remember===true)state=C.sanitizeState(saved);}catch(_){}
 selectedId=state.current;
 function notify(copy){$('toast').textContent=copy;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4000);}
 function renderStorage(){$('remember-practices').checked=state.remember;$('storage-note').textContent=state.remember?'Este navegador recuerda qué actividades abriste. No guarda tus respuestas.':'Sin esta opción, la lista de actividades abiertas termina al cerrar la página.';}
 function persist(){try{if(state.remember)localStorage.setItem(KEY,JSON.stringify(state));else localStorage.removeItem(KEY);localStorage.removeItem(LEGACY_KEY);}catch(_){state.remember=false;notify('Puedes seguir. El navegador no pudo recordar las actividades.');}renderStorage();}
 const hasModal=()=>modals.some(node=>node.open);
 function syncSound(){sound.setBlocked(document.hidden||!practice?.running||hasModal());}
 function focus(id){requestAnimationFrame(()=>$(id).focus({preventScroll:true}));}
 function renderNav(){
  const home=screen==='home-screen',paused=screen==='pause-screen';
  $('back-label').textContent=home?'Anterior':screen==='step-screen'&&practice?.step===0?'Volver':'Anterior';
  $('next-label').textContent=home?'Otra':paused?'Continuar':screen==='finish-screen'?'Probar después':screen==='transfer-screen'?'Otra':screen==='check-screen'?'Pasar':screen==='feedback-screen'?'Terminar':practice?.step===2?'Terminar':'Siguiente';
  $('turn-back').setAttribute('aria-label',home?'Ver la actividad anterior':'Volver a la pantalla anterior');
  $('turn-next').setAttribute('aria-label',home?'Ver otra actividad':paused?'Continuar la actividad':screen==='check-screen'?'Pasar el ejemplo opcional':'Ir a la pantalla siguiente');
  $('progress-strip').hidden=!['step-screen','finish-screen','transfer-screen','check-screen','feedback-screen'].includes(screen);
  $('practice-progress').max=3;$('practice-progress').value=practice?.phase==='step'?practice.step+1:3;
  $('practice-progress').setAttribute('aria-label',practice?.phase==='step'?'Paso '+(practice.step+1)+' de 3':'Fin de los tres pasos');
  $('step-count').textContent=practice?.phase==='step'?'Paso '+(practice.step+1)+' de 3':'';
  $('menu-pause').hidden=!practice;
 }
 function show(next,title){screen=next;document.querySelectorAll('[data-screen]').forEach(node=>node.hidden=node.id!==next);renderNav();syncSound();window.scrollTo(0,0);focus(title);}
 function available(){return C.practices.filter(p=>territory==='all'||p.territory===territory);}
 function renderHome(){
  const bank=available();let index=bank.findIndex(p=>p.id===selectedId);if(index<0){index=0;selectedId=bank[0].id;}
  const p=bank[index];state.current=p.id;
  $('card-position').textContent='Actividad '+(index+1)+' de '+bank.length;
  $('card-route').textContent=routeNames[p.territory];$('home-title').textContent=p.title;$('card-summary').textContent=p.summary;$('card-meaning').textContent=p.meaning;
 }
 function closeOne(modal,silent=false){
  if(!modal.open)return;
  if(modal.id==='direct-message-dialog')clearDirectMessage();
  handledCloses.set(modal,(handledCloses.get(modal)||0)+1);modal.close();
  if(!silent&&!hasModal())afterModalClose();
 }
 function closeForNavigation(){modalResume=false;switchingModal=true;for(const modal of modals)closeOne(modal,true);switchingModal=false;syncSound();}
 function home(filter=territory){if(filter==='all'||Object.hasOwn(routeNames,filter))territory=filter;practice=null;closeForNavigation();renderHome();persist();show('home-screen','home-title');}
 function turnCard(direction){const bank=available(),index=Math.max(0,bank.findIndex(p=>p.id===selectedId));selectedId=bank[N.wrap(index+direction,bank.length)].id;renderHome();persist();show('home-screen','home-title');}
 function startPractice(id=selectedId){
  const p=C.byId(id);if(!p)throw new Error('Actividad desconocida');
  selectedId=id;if(territory!=='all'&&p.territory!==territory)territory='all';
  state=C.finish(state,id);persist();practice={id,step:0,phase:'step',running:true};renderStep();show('step-screen','practice-title');
 }
 function renderStep(){const p=C.byId(practice.id),step=C.questionAt(p,practice.step);$('practice-name').textContent=p.title;$('practice-title').textContent=step.prompt;renderNav();}
 function renderFinish(transfer=false){if(!lastPractice)return;const p=C.byId(lastPractice);$('finish-meaning').textContent=p.takeaway;$('finish-transfer').textContent=p.tryLater;show(transfer?'transfer-screen':'finish-screen',transfer?'transfer-title':'finish-title');}
 function finishPractice(){if(!practice?.running)return;const fromCase=practice.phase!=='step';lastPractice=practice.id;selectedId=practice.id;practice=null;renderFinish(fromCase);}
 function openCase(){
  if(!lastPractice)return;practice={id:lastPractice,step:0,phase:'check',running:true};renderCase();show('check-screen','check-title');
 }
 function renderCase(){const p=C.byId(practice.id);$('check-title').textContent=p.check.question;['a','b','c'].forEach((letter,i)=>$('check-'+letter).textContent=p.check.options[i]);}
 function pausePractice(){if(!practice)return;modalResume=false;practice.running=false;show('pause-screen','pause-title');}
 function resumePractice(){if(!practice||!phaseScreens[practice.phase])return;practice.running=true;show(...phaseScreens[practice.phase]);}
 function turn(direction){
  if(hasModal())return;
  if(screen==='home-screen'){turnCard(direction);return;}
  if(screen==='pause-screen'){direction>0?resumePractice():home();return;}
  if(screen==='finish-screen'){
   if(direction>0)renderFinish(true);else if(lastPractice){practice={id:lastPractice,step:2,phase:'step',running:true};renderStep();show('step-screen','practice-title');}return;
  }
  if(screen==='transfer-screen'){if(direction>0){home();turnCard(1);}else renderFinish();return;}
  if(!practice?.running)return;
  if(practice.phase==='step'){
   if(direction<0&&practice.step===0){home();return;}
   if(direction>0&&practice.step===2){finishPractice();return;}
   practice.step+=direction;renderStep();show('step-screen','practice-title');return;
  }
  if(practice.phase==='check'){finishPractice();return;}
  if(practice.phase==='feedback'){
   if(direction<0){practice.phase='check';renderCase();show('check-screen','check-title');}else finishPractice();
  }
 }
 $('turn-back').addEventListener('click',()=>turn(-1));$('turn-next').addEventListener('click',()=>turn(1));
 $('nav-home').addEventListener('click',()=>home('all'));$('brand').addEventListener('click',event=>{event.preventDefault();home('all');});
 $('start-activity').addEventListener('click',()=>startPractice());
 $('resume-practice').addEventListener('click',resumePractice);
 $('finish-repeat').addEventListener('click',()=>{if(lastPractice)startPractice(lastPractice);});
 $('finish-case').addEventListener('click',openCase);
 ['a','b','c'].forEach(letter=>$('check-'+letter).addEventListener('click',()=>{
  if(!practice?.running||practice.phase!=='check')return;
  const p=C.byId(practice.id);practice.phase='feedback';$('check-answer').textContent=p.check.options[p.check.answer];$('check-explanation').textContent=p.check.explanation;show('feedback-screen','feedback-title');
 }));
 const interactive='button,a,input,textarea,select,label,summary,[role="button"],[contenteditable="true"],[data-no-turn]';
 $('main').addEventListener('pointerdown',event=>{gesture={x:event.clientX,y:event.clientY,moved:0,cancelled:!event.isPrimary&&event.isPrimary!==undefined};});
 $('main').addEventListener('pointermove',event=>{if(Number.isFinite(gesture.x))gesture.moved=Math.max(gesture.moved,Math.hypot(event.clientX-gesture.x,event.clientY-gesture.y));});
 $('main').addEventListener('pointercancel',()=>{gesture.cancelled=true;});
 $('main').addEventListener('click',event=>{
  if(hasModal()||event.button>0)return;
  const rect=$('main').getBoundingClientRect();
  const direction=N.tapDirection({x:event.clientX,left:rect.left,width:rect.width,moved:gesture.moved,selected:!!window.getSelection?.().toString(),interactive:!!event.target.closest?.(interactive),cancelled:gesture.cancelled,detail:event.detail});
  gesture={moved:0,cancelled:false};
  if(!direction)return;const now=performance.now();if(now-lastTap<300)return;lastTap=now;turn(direction);
 });
 document.addEventListener('keydown',event=>{
  if(event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||event.target.closest?.('input,textarea,select,[contenteditable="true"]'))return;
  const direction=event.key==='ArrowRight'?1:event.key==='ArrowLeft'?-1:0;if(!direction)return;
  if(hasModal()){
   if($('help-dialog').open){event.preventDefault();renderHelp(Math.max(0,Math.min(1,helpPage+direction)));}
   else if($('about-dialog').open){event.preventDefault();renderInfo(infoPage+direction);}
   return;
  }
  event.preventDefault();turn(direction);
 });
 function afterModalClose(){
  if(modalResume&&practice&&!document.hidden&&screen!=='pause-screen')practice.running=true;
  modalResume=false;syncSound();focus(modalReturn);
 }
 function openModal(id,returnId='menu-trigger'){
  if(!hasModal())modalResume=!!practice?.running;
  if(practice)practice.running=false;
  switchingModal=true;for(const modal of modals)closeOne(modal,true);switchingModal=false;
  modalReturn=returnId;$(id).showModal();syncSound();
  const titles={'menu-dialog':'menu-title','route-dialog':'route-title','help-dialog':'help-title','sound-dialog':'sound-title','visits-dialog':'visits-title','about-dialog':'about-title','contact-dialog':'contact-title','direct-message-dialog':'direct-message-title'};focus(titles[id]);
 }
 modals.forEach(modal=>{
  modal.addEventListener('cancel',()=>{if(modal.id==='direct-message-dialog')clearDirectMessage();});
  modal.addEventListener('close',()=>{
   const handled=handledCloses.get(modal)||0;if(handled){handledCloses.set(modal,handled-1);return;}
   if(modal.open)return;
   if(modal.id==='direct-message-dialog')clearDirectMessage();
   if(!switchingModal&&!hasModal())afterModalClose();
  });
 });
 document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>closeOne($(button.dataset.close))));
 $('menu-trigger').addEventListener('click',()=>{renderNav();openModal('menu-dialog');});
 $('nav-activities').addEventListener('click',()=>home('all'));
 $('route-trigger').addEventListener('click',()=>openModal('route-dialog'));
 document.querySelectorAll('[data-territory]').forEach(button=>button.addEventListener('click',()=>home(button.dataset.territory)));
 $('menu-pause').addEventListener('click',()=>{closeForNavigation();pausePractice();});
 $('visits-trigger').addEventListener('click',()=>openModal('visits-dialog'));
 function renderHelp(index=0){
  helpPage=index;$('help-short').hidden=index!==0;$('help-full').hidden=index!==1;
  $('help-title').textContent=index===0?'Ayuda y ejemplo':'Un ejemplo completo';$('help-back').hidden=index===0;$('help-next').hidden=index===1;
 }
 $('step-help').addEventListener('click',()=>{
  if(!practice||practice.phase!=='step')return;
  const p=C.byId(practice.id),step=C.questionAt(p,practice.step);$('practice-hint').textContent=step.hint;$('step-example').textContent=step.answerExample;
  $('activity-meaning').textContent=p.meaning;$('example-situation').textContent=p.example.situation;$('example-response').textContent=p.example.response;
  renderHelp();openModal('help-dialog','step-help');
 });
 $('help-next').addEventListener('click',()=>{renderHelp(1);focus('help-title');});$('help-back').addEventListener('click',()=>{renderHelp(0);focus('help-title');});
 function renderInfo(index){
  infoPage=Math.max(0,Math.min(infoPages.length-1,index));infoPages.forEach((page,i)=>page.hidden=i!==infoPage);
  const group=infoPages[infoPage].dataset.infoGroup;document.querySelectorAll('[data-about]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.about===group)));
  $('info-back').disabled=infoPage===0;$('info-next').disabled=infoPage===infoPages.length-1;$('info-count').textContent=(infoPage+1)+' / '+infoPages.length;
 }
 $('about-trigger').addEventListener('click',()=>{renderInfo(0);openModal('about-dialog');});
 document.querySelectorAll('[data-about]').forEach(button=>button.addEventListener('click',()=>renderInfo(infoPages.findIndex(p=>p.dataset.infoGroup===button.dataset.about))));
 $('info-back').addEventListener('click',()=>renderInfo(infoPage-1));$('info-next').addEventListener('click',()=>renderInfo(infoPage+1));
 $('remember-practices').addEventListener('change',()=>{state.remember=$('remember-practices').checked;persist();});
 document.querySelectorAll('[data-open-contact]').forEach(button=>button.addEventListener('click',()=>openModal('contact-dialog')));
 function renderSound(){
  const labels={off:'Sonido',ambient:'Sonido: bosque',music:'Sonido: música'};
  document.querySelectorAll('input[name="ambience"]').forEach(input=>input.checked=input.value===sound.ambience);
  $('ambient-volume-row').hidden=sound.ambience==='off';$('sound-label').textContent=labels[sound.ambience];
 }
 $('sound-trigger').addEventListener('click',()=>{renderSound();$('sound-status').textContent=practice?'La actividad está en pausa mientras eliges.':'Se escuchará cuando abras una actividad.';openModal('sound-dialog');});
 sound.callbacks={onError(message){$('sound-status').textContent=message;notify(message);renderSound();}};
 document.querySelectorAll('input[name="ambience"]').forEach(input=>input.addEventListener('change',async()=>{
  if(!input.checked)return;$('sound-status').textContent=input.value==='off'?'Silencio seleccionado.':'Preparando el sonido…';await sound.setAmbience(input.value);renderSound();
  if(sound.ambience===input.value)$('sound-status').textContent=input.value==='off'?'Silencio seleccionado.':'Sonido listo para la actividad.';
 }));
 $('ambient-volume').addEventListener('input',()=>{sound.setVolume(Number($('ambient-volume').value)/100);$('ambient-volume-value').textContent=$('ambient-volume').value+' %';});
 function updateDirectMessage(){
  const text=$('direct-message-text').value.trim(),ready=text.length>0&&text.length<=1000,subject=encodeURIComponent('Un mensaje para Andrés Zuluaga · INSIDE'),body=encodeURIComponent(text);
  $('direct-message-mail').href=ready?'mailto:inside.ecosistema@gmail.com?subject='+subject+'&body='+body:'#direct-message-text';
  $('direct-message-gmail').href=ready?'https://mail.google.com/mail/?view=cm&fs=1&to=inside.ecosistema%40gmail.com&su='+subject+'&body='+body:'#direct-message-text';
  ['direct-message-mail','direct-message-gmail'].forEach(id=>$(id).setAttribute('aria-disabled',String(!ready)));$('direct-message-error').hidden=true;return ready;
 }
 function clearDirectMessage(){$('direct-message-text').value='';updateDirectMessage();$('message-write').hidden=false;$('message-send').hidden=true;}
 function messageError(){ $('direct-message-error').textContent='Escribe un mensaje de hasta 1000 caracteres.';$('direct-message-error').hidden=false;focus('direct-message-text');}
 document.querySelectorAll('[data-open-message]').forEach(button=>button.addEventListener('click',()=>{clearDirectMessage();openModal('direct-message-dialog');}));
 $('direct-message-text').addEventListener('input',updateDirectMessage);
 $('message-next').addEventListener('click',()=>{if(!updateDirectMessage()){messageError();return;}$('message-write').hidden=true;$('message-send').hidden=false;focus('direct-message-title');});
 $('message-back').addEventListener('click',()=>{$('message-write').hidden=false;$('message-send').hidden=true;focus('direct-message-text');});
 ['direct-message-mail','direct-message-gmail'].forEach(id=>$(id).addEventListener('click',event=>{if(updateDirectMessage())return;event.preventDefault();$('message-write').hidden=false;$('message-send').hidden=true;messageError();}));
 $('direct-message-clear').addEventListener('click',()=>{clearDirectMessage();focus('direct-message-text');});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){modalResume=false;if(practice)pausePractice();}syncSound();});
 window.addEventListener('pagehide',()=>{modalResume=false;if(practice)practice.running=false;clearDirectMessage();sound.setBlocked(true);persist();toolLifecycle?.abort();});
 window.addEventListener('pageshow',()=>{if(practice&&!practice.running)show('pause-screen','pause-title');syncSound();registerTools();});
 function publicState(){const phases={step:'paso',check:'caso',feedback:'explicacion'};return {casilla:state.current,actividadVisible:selectedId,vista:screen,practicasAbiertas:[...state.completed],practicaEnCurso:practice?{casilla:practice.id,fase:phases[practice.phase],pasoActual:practice.phase==='step'?practice.step+1:0,totalPasos:3,enPausa:!practice.running}:null};}
 function registerTools(){
  if(!document.modelContext?.registerTool||(toolLifecycle&&!toolLifecycle.signal.aborted))return;
  toolLifecycle=new AbortController();const definitions=[
   {name:'read_labyrinth_state',title:'Consultar mi actividad',description:'Muestra la tarjeta y el paso abierto. No contiene respuestas ni evaluaciones.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('No se admiten parámetros');return publicState();}},
   {name:'navigate_to_practice_room',title:'Elegir una actividad',description:'Muestra la tarjeta de una actividad sin empezar sus pasos ni registrar respuestas.',inputSchema:{type:'object',properties:{roomId:{type:'string',enum:C.practices.map(p=>p.id)}},required:['roomId'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input.roomId!=='string'||Object.keys(input).some(k=>k!=='roomId')||!C.byId(input.roomId))throw new Error('Se necesita una actividad válida');if(practice||hasModal())throw new Error('Sal de la actividad o cierra la ventana antes de cambiar');selectedId=input.roomId;home('all');return publicState();}},
   {name:'start_current_guided_practice',title:'Abrir mi actividad',description:'Abre la primera instrucción de la tarjeta elegida. Ayuda y ejemplo se abren con su botón. No recoge respuestas.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('No se admiten parámetros');if(practice||hasModal())throw new Error('Ya hay una actividad o ventana abierta');startPractice(selectedId);return publicState();}}
  ];for(const definition of definitions){try{Promise.resolve(document.modelContext.registerTool(definition,{signal:toolLifecycle.signal})).catch(()=>{});}catch(_){}}
 }
 persist();renderHome();renderNav();renderSound();clearDirectMessage();syncSound();registerTools();
})();
