(function(root){'use strict';
 const bank=typeof INSIDE_PRACTICES!=='undefined'?INSIDE_PRACTICES:require('./practices.js').INSIDE_PRACTICES;
 const lessons=typeof INSIDE_LESSONS!=='undefined'?INSIDE_LESSONS:require('./learning.js').INSIDE_LESSONS;
 const practices=bank.map(p=>({...p,...lessons[p.id],steps:p.steps.map((s,i)=>({...s,...lessons[p.id].steps[i]}))}));
 const byId=id=>practices.find(p=>p.id===id),freshState=()=>({version:2,current:'notar',completed:[],remember:false});
 function sanitizeState(raw){if(!raw||typeof raw!=='object'||![1,2].includes(raw.version))return freshState();return {version:2,current:byId(raw.current)?raw.current:'notar',completed:Array.isArray(raw.completed)?[...new Set(raw.completed.filter(id=>byId(id)))]:[],remember:raw.remember===true};}
 function finish(state,id){if(!byId(id))throw new Error('Práctica desconocida');const next=sanitizeState(state);next.current=id;if(!next.completed.includes(id))next.completed.push(id);return next;}
 function questionAt(p,index){return p.steps[Math.max(0,Math.min(p.steps.length-1,Math.trunc(Number(index)||0)))];}
 const api={practices,byId,freshState,sanitizeState,finish,questionAt};if(typeof module!=='undefined')module.exports=api;else root.InsideCore=api;
})(typeof window!=='undefined'?window:globalThis);
