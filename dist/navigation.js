(function(root){'use strict';
 function wrap(index,length){return length>0?((index%length)+length)%length:0;}
 function tapDirection({x,left,width,moved=0,selected=false,interactive=false,cancelled=false,detail=1}){
  if(!Number.isFinite(x)||!Number.isFinite(left)||!(width>0)||moved>12||selected||interactive||cancelled||detail!==1)return 0;
  if(x<left||x>left+width)return 0;return x<left+width/2?-1:1;
 }
 const api={wrap,tapDirection};if(typeof module!=='undefined')module.exports=api;else root.InsideNavigation=api;
})(typeof window!=='undefined'?window:globalThis);
