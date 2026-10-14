(function(){'use strict';
 const $=id=>document.getElementById(id),API='https://inside-gimnasio-piloto.andreszuluaga007.chatgpt.site/api/visits',KEY='inside-visit-at-v1',WINDOW=30*60*1000;
 if(!$('visit-total'))return;
 let loading=false,countedInMemory=false;
 function recentlyCounted(){try{const at=Number(sessionStorage.getItem(KEY));return at>0&&Date.now()-at>=0&&Date.now()-at<WINDOW;}catch(_){return countedInMemory;}}
 function markCounted(){countedInMemory=true;try{sessionStorage.setItem(KEY,String(Date.now()));}catch(_){}}
 function show(data){if(!Number.isSafeInteger(data.total)||!Number.isSafeInteger(data.today)||data.total<0||data.today<0)throw new Error('Conteo no válido');$('visit-total').textContent=data.total.toLocaleString('es-CO');$('visit-today').textContent=data.today.toLocaleString('es-CO');let note='Día de Colombia · Visitas, incluidos los regresos.';if(data.since){const parts=data.since.split('-');note+=' Conteo desde '+parts[2]+'/'+parts[1]+'/'+parts[0]+'.';}$('visit-note').textContent=note;}
 async function load(allowCount){if(loading)return;loading=true;$('visit-refresh').disabled=true;const register=allowCount&&location.hostname==='inside-ecosistema.pages.dev'&&!recentlyCounted();const options={method:register?'POST':'GET',mode:'cors',credentials:'omit',referrerPolicy:'no-referrer',signal:AbortSignal.timeout(8000)};if(register){options.headers={'Content-Type':'application/json'};options.body='{}';}try{const response=await fetch(API,options);if(!response.ok)throw new Error('Contador no disponible');const data=await response.json();show(data);if(register)markCounted();}catch(_){$('visit-total').textContent='—';$('visit-today').textContent='—';$('visit-note').textContent='El contador no está disponible en este momento.';}finally{loading=false;$('visit-refresh').disabled=false;}}
 $('visit-refresh').addEventListener('click',()=>load(false));
 if(document.visibilityState==='hidden')document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')load(true);},{once:true});else load(true);
})();
