(function(){'use strict';
 const C=window.InsideCore,$=id=>document.getElementById(id),KEY='inside-pauses-v2',LEGACY_KEY='inside-gimnasio-piloto-v1';
 let state=C.freshState(),screen='home-screen',territory='all',practice=null,lastPractice=null,toastTimer=null,resumeAfterSound=false,messageReturnTo='home-message';
 const sound=new window.InsideAudio(),labels={off:'Sonido',ambient:'Bosque',music:'Música'};
 const hints={all:'Puedes empezar por cualquiera. No hay un orden obligatorio.',Contacto:'Tres actividades para volver a lo que haces, pausar o revisar una preocupación.',Perspectiva:'Tres actividades para decidir con dudas, hablarte con respeto o atender una necesidad.',Dirección:'Tres actividades para elegir una prioridad, pedir algo o empezar una tarea.'};
 const phaseScreens={example:['example-screen','example-title'],step:['step-screen','practice-title'],check:['check-screen','check-title'],feedback:['feedback-screen','feedback-title']};
 try{const saved=JSON.parse(localStorage.getItem(KEY)||localStorage.getItem(LEGACY_KEY)||'null');if(saved?.remember===true)state=C.sanitizeState(saved);}catch(_){}
 function notify(message){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4200);}
 function renderStorage(){$('remember-practices').checked=state.remember;$('storage-note').textContent=state.remember?'Este navegador recuerda qué actividades abriste. No guarda tus respuestas.':'Sin esta opción, la lista de actividades abiertas se borra al cerrar la página.';}
 function persist(){try{if(state.remember)localStorage.setItem(KEY,JSON.stringify(state));else localStorage.removeItem(KEY);localStorage.removeItem(LEGACY_KEY);}catch(_){state.remember=false;notify('Puedes seguir. Este navegador no pudo recordar las actividades.');}renderStorage();}
 function syncSound(){sound.setBlocked(document.hidden||!practice?.running||['sound-dialog','about-dialog','contact-dialog','direct-message-dialog'].some(id=>$(id).open));}
 function showScreen(next,focusId){screen=next;document.querySelectorAll('[data-screen]').forEach(node=>node.hidden=node.id!==next);$('site-footer').hidden=['example-screen','step-screen','check-screen','feedback-screen','pause-screen'].includes(next);syncSound();window.scrollTo(0,0);requestAnimationFrame(()=>$(focusId||'main').focus({preventScroll:true}));}
 function home(){practice=null;resumeAfterSound=false;showScreen('home-screen','home-title');}
 function openExplore(next='all'){territory=Object.hasOwn(hints,next)?next:'all';practice=null;resumeAfterSound=false;renderExplore();showScreen('explore-screen','explore-title');}
 function renderExplore(){
  document.querySelectorAll('[data-territory]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.territory===territory)));
  $('territory-hint').textContent=hints[territory];$('practice-list').replaceChildren();
  C.practices.filter(p=>territory==='all'||p.territory===territory).forEach(p=>{
   const button=document.createElement('button');button.type='button';button.className='practice-choice';
   for(const [className,copy] of [['practice-card-title',p.title],['practice-card-summary',p.summary],['practice-card-status',state.completed.includes(p.id)?'Ya la abriste. Puedes volver.':'Un ejemplo y tres pasos.']]){
    const span=document.createElement('span');span.className=className;span.textContent=copy;button.appendChild(span);
   }
   button.addEventListener('click',()=>startPractice(p.id));$('practice-list').appendChild(button);
  });
 }
 function startPractice(id){
  const p=C.byId(id);if(!p)throw new Error('Actividad desconocida');
  state=C.finish(state,id);persist();practice={id,step:0,running:true,phase:'example'};
  $('example-title').textContent=p.title;$('activity-meaning').textContent=p.meaning;
  $('example-situation').textContent=p.example.situation;$('example-response').textContent=p.example.response;
  showScreen('example-screen','example-title');
 }
 function renderStep(){
  const p=C.byId(practice.id),step=C.questionAt(p,practice.step);
  $('practice-name').textContent=p.title;$('step-count').textContent='Paso '+(practice.step+1)+' de '+p.steps.length;
  $('practice-progress').max=p.steps.length;$('practice-progress').value=practice.step+1;
  $('practice-title').textContent=step.prompt;$('practice-hint').textContent=step.hint;$('step-example').textContent=step.answerExample;
  $('step-previous').disabled=practice.step===0;$('step-next').textContent=practice.step===p.steps.length-1?'Ver una idea para mi día':'Siguiente paso';
 }
 function advance(direction){
  if(!practice?.running||practice.phase!=='step')return;
  if(direction<0&&practice.step===0)return;
  if(direction>0&&practice.step===C.byId(practice.id).steps.length-1){finishPractice();return;}
  practice.step+=direction;renderStep();showScreen('step-screen','practice-title');
 }
 function finishPractice(){if(!practice?.running)return;lastPractice=practice.id;practice=null;renderFinish();}
 function renderFinish(){
  if(!lastPractice)return;const p=C.byId(lastPractice);
  $('finish-meaning').textContent=p.takeaway;$('finish-transfer').textContent=p.tryLater;$('finish-more').open=false;
  showScreen('finish-screen','finish-title');
 }
 function openCase(){
  if(!lastPractice)return;practice={id:lastPractice,step:0,running:true,phase:'check'};
  renderCase();showScreen('check-screen','check-title');
 }
 function renderCase(){const p=C.byId(practice.id);$('check-title').textContent=p.check.question;['a','b','c'].forEach((letter,index)=>$('check-'+letter).textContent=p.check.options[index]);}
 function pausePractice(){if(!practice)return;practice.running=false;resumeAfterSound=false;showScreen('pause-screen','pause-title');}
 $('brand').addEventListener('click',event=>{event.preventDefault();home();});
 $('nav-activities').addEventListener('click',()=>openExplore());
 ['explore-home','finish-home','pause-home'].forEach(id=>$(id).addEventListener('click',home));
 ['explore-trigger','finish-explore','example-explore'].forEach(id=>$(id).addEventListener('click',()=>openExplore()));
 document.querySelectorAll('[data-home-territory]').forEach(button=>button.addEventListener('click',()=>openExplore(button.dataset.homeTerritory)));
 document.querySelectorAll('[data-territory]').forEach(button=>button.addEventListener('click',()=>{territory=button.dataset.territory;renderExplore();}));
 $('example-start').addEventListener('click',()=>{if(!practice?.running||practice.phase!=='example')return;practice.phase='step';renderStep();showScreen('step-screen','practice-title');});
 ['step-next','step-skip'].forEach(id=>$(id).addEventListener('click',()=>advance(1)));
 $('step-previous').addEventListener('click',()=>advance(-1));
 $('finish-repeat').addEventListener('click',()=>{if(lastPractice)startPractice(lastPractice);});
 $('finish-case').addEventListener('click',openCase);
 ['a','b','c'].forEach(letter=>$('check-'+letter).addEventListener('click',()=>{
  if(!practice?.running||practice.phase!=='check')return;
  const p=C.byId(practice.id);practice.phase='feedback';
  $('check-answer').textContent=p.check.options[p.check.answer];$('check-explanation').textContent=p.check.explanation;
  showScreen('feedback-screen','feedback-title');
 }));
 ['skip-check','check-finish'].forEach(id=>$(id).addEventListener('click',()=>{if(practice?.running&&['check','feedback'].includes(practice.phase))finishPractice();}));
 $('check-again').addEventListener('click',()=>{if(!practice?.running||practice.phase!=='feedback')return;practice.phase='check';renderCase();showScreen('check-screen','check-title');});
 ['pause-practice','check-pause'].forEach(id=>$(id).addEventListener('click',pausePractice));
 $('resume-practice').addEventListener('click',()=>{if(!practice||!phaseScreens[practice.phase])return;practice.running=true;showScreen(...phaseScreens[practice.phase]);});
 function renderSound(){document.querySelectorAll('input[name="ambience"]').forEach(input=>input.checked=input.value===sound.ambience);$('ambient-volume-row').hidden=sound.ambience==='off';$('sound-label').textContent=labels[sound.ambience];}
 $('sound-trigger').addEventListener('click',()=>{
  resumeAfterSound=!!practice?.running;if(practice)practice.running=false;syncSound();renderSound();
  $('sound-status').textContent=practice?'La actividad está en pausa mientras eliges.':'El sonido empieza cuando abres una actividad.';$('sound-dialog').showModal();
 });
 sound.callbacks={onError(message){$('sound-status').textContent=message;notify(message);renderSound();}};
 document.querySelectorAll('input[name="ambience"]').forEach(input=>input.addEventListener('change',async()=>{
  if(!input.checked)return;$('sound-status').textContent=input.value==='off'?'Silencio seleccionado.':'Preparando el sonido…';
  await sound.setAmbience(input.value);renderSound();
  if(sound.ambience===input.value)$('sound-status').textContent=input.value==='off'?'Silencio seleccionado.':'Sonido listo. Se escuchará durante la actividad.';
 }));
 $('ambient-volume').addEventListener('input',()=>{sound.setVolume(Number($('ambient-volume').value)/100);$('ambient-volume-value').textContent=$('ambient-volume').value+' %';});
 $('sound-dialog').addEventListener('close',()=>{if(resumeAfterSound&&practice&&!document.hidden&&screen!=='pause-screen')practice.running=true;resumeAfterSound=false;syncSound();renderSound();});
 document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>$(button.dataset.close).close()));
 function renderAbout(tab){document.querySelectorAll('[data-about]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.about===tab)));['use','privacy','basis'].forEach(id=>$('about-'+id).hidden=id!==tab);}
 $('about-trigger').addEventListener('click',()=>{if(practice)pausePractice();renderAbout('use');$('about-dialog').showModal();syncSound();});
 document.querySelectorAll('[data-about]').forEach(button=>button.addEventListener('click',()=>renderAbout(button.dataset.about)));
 $('about-dialog').addEventListener('close',()=>{syncSound();$('about-trigger').focus({preventScroll:true});});
 $('remember-practices').addEventListener('change',()=>{state.remember=$('remember-practices').checked;persist();});
 document.querySelectorAll('[data-open-contact]').forEach(button=>button.addEventListener('click',()=>{
  if(practice)pausePractice();if($('about-dialog').open)$('about-dialog').close();$('contact-dialog').showModal();syncSound();$('contact-title').focus({preventScroll:true});
 }));
 $('contact-dialog').addEventListener('close',()=>{syncSound();$('about-trigger').focus({preventScroll:true});});
 function updateDirectMessage(){
  const text=$('direct-message-text').value.trim(),ready=text.length>0&&text.length<=1000,subject=encodeURIComponent('Un mensaje para Andrés Zuluaga · INSIDE'),body=encodeURIComponent(text);
  $('direct-message-mail').href=ready?'mailto:inside.ecosistema@gmail.com?subject='+subject+'&body='+body:'#direct-message-text';
  $('direct-message-gmail').href=ready?'https://mail.google.com/mail/?view=cm&fs=1&to=inside.ecosistema%40gmail.com&su='+subject+'&body='+body:'#direct-message-text';
  ['direct-message-mail','direct-message-gmail'].forEach(id=>$(id).setAttribute('aria-disabled',String(!ready)));$('direct-message-error').hidden=true;return ready;
 }
 function clearDirectMessage(){$('direct-message-text').value='';updateDirectMessage();}
 document.querySelectorAll('[data-open-message]').forEach(button=>button.addEventListener('click',()=>{
  messageReturnTo=button.id;if(practice)pausePractice();clearDirectMessage();$('direct-message-dialog').showModal();syncSound();$('direct-message-title').focus({preventScroll:true});
 }));
 $('direct-message-text').addEventListener('input',updateDirectMessage);
 ['direct-message-mail','direct-message-gmail'].forEach(id=>$(id).addEventListener('click',event=>{
  if(updateDirectMessage())return;event.preventDefault();$('direct-message-error').textContent='Escribe un mensaje de hasta 1000 caracteres antes de abrir tu correo.';$('direct-message-error').hidden=false;$('direct-message-text').focus();
 }));
 $('direct-message-clear').addEventListener('click',()=>{clearDirectMessage();$('direct-message-text').focus();});
 $('direct-message-dialog').addEventListener('close',()=>{clearDirectMessage();syncSound();$(messageReturnTo).focus({preventScroll:true});});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){resumeAfterSound=false;if(practice)pausePractice();}syncSound();});
 window.addEventListener('pagehide',()=>{resumeAfterSound=false;if(practice)practice.running=false;clearDirectMessage();sound.setBlocked(true);persist();});
 window.addEventListener('pageshow',()=>{if(practice&&!practice.running)showScreen('pause-screen','pause-title');syncSound();});
 function publicState(){const phases={example:'ejemplo',step:'paso',check:'caso',feedback:'explicacion'};return {casilla:state.current,practicasAbiertas:[...state.completed],practicaEnCurso:practice?{casilla:practice.id,fase:phases[practice.phase],pasoActual:practice.phase==='step'?practice.step+1:0,totalPasos:C.byId(practice.id).steps.length,enPausa:!practice.running}:null};}
 if(document.modelContext?.registerTool){
  const lifecycle=new AbortController(),definitions=[
   {name:'read_labyrinth_state',title:'Consultar mi actividad',description:'Muestra la actividad abierta y el paso actual. No contiene respuestas ni evaluaciones.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('No se admiten parámetros');return publicState();}},
   {name:'navigate_to_practice_room',title:'Elegir una actividad',description:'Selecciona una actividad disponible. No la comienza ni registra respuestas.',inputSchema:{type:'object',properties:{roomId:{type:'string',enum:C.practices.map(p=>p.id)}},required:['roomId'],additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input.roomId!=='string'||Object.keys(input).some(k=>k!=='roomId')||!C.byId(input.roomId))throw new Error('Se necesita una actividad válida');if(practice)throw new Error('Sal de la actividad actual antes de cambiar');state.current=input.roomId;persist();openExplore(C.byId(input.roomId).territory);return publicState();}},
   {name:'start_current_guided_practice',title:'Abrir mi actividad',description:'Abre el ejemplo de la actividad elegida. La persona decide si quiere probar los pasos. No recoge respuestas.',inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:false,untrustedContentHint:false},execute(input){if(!input||typeof input!=='object'||Object.keys(input).length)throw new Error('No se admiten parámetros');if(practice)throw new Error('Ya hay una actividad en curso');startPractice(state.current);return publicState();}}
  ];
  for(const definition of definitions){try{Promise.resolve(document.modelContext.registerTool(definition,{signal:lifecycle.signal})).catch(()=>{});}catch(_){}}
  window.addEventListener('pagehide',()=>lifecycle.abort(),{once:true});
 }
 persist();renderSound();clearDirectMessage();syncSound();
})();
