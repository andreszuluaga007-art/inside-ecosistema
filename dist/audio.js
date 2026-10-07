(function(root){'use strict';
  // These are same-origin audio assets. No choices or reflections are sent.
  const tracks=Object.freeze({ambient:'assets/audio/forest.mp3',music:'assets/audio/luminous.mp3'});
  class InsideAudio {
    constructor(callbacks={}){
      this.callbacks=callbacks;this.context=null;this.master=null;this.nodes=[];
      this.ambience='off';this.volume=.22;this.blocked=true;this.generation=0;
      this.loadedMode=null;this.loadedBuffer=null;this.pending=new Map();
    }
    ensureContext(){
      if(this.context&&this.context.state!=='closed')return;
      const AudioContext=root.AudioContext||root.webkitAudioContext;
      if(!AudioContext)throw new Error('Este navegador no ofrece sonido de fondo. Puedes seguir en silencio.');
      this.context=new AudioContext();this.master=this.context.createGain();
      this.master.gain.value=0;this.master.connect(this.context.destination);
    }
    setTarget(){
      if(!this.master)return;
      const target=this.blocked||this.ambience==='off'?0:this.volume*.8;
      const p=this.master.gain,now=this.context.currentTime;
      p.cancelScheduledValues(now);p.setTargetAtTime(target,now,.22);
    }
    clearNodes(){for(const n of this.nodes){try{n.stop?.();}catch(_){}try{n.disconnect();}catch(_){}}this.nodes=[];}
    async loadBuffer(mode){
      if(this.loadedMode===mode&&this.loadedBuffer)return this.loadedBuffer;
      if(this.pending.has(mode))return this.pending.get(mode);
      const request=(async()=>{
        const response=await root.fetch(tracks[mode],{cache:'force-cache',credentials:'same-origin'});
        if(!response.ok)throw new Error('No se pudo cargar el fondo. Puedes seguir en silencio.');
        const buffer=await this.context.decodeAudioData(await response.arrayBuffer());
        if(this.ambience===mode){this.loadedMode=mode;this.loadedBuffer=buffer;}
        return buffer;
      })();
      this.pending.set(mode,request);
      try{return await request;}finally{this.pending.delete(mode);}
    }
    buildBackground(buffer){
      this.clearNodes();
      const source=this.context.createBufferSource();source.buffer=buffer;source.loop=true;
      source.connect(this.master);this.nodes.push(source);source.start();
    }
    async setAmbience(mode){
      if(!['off','ambient','music'].includes(mode))return;
      const generation=++this.generation;this.ambience=mode;
      try{
        this.clearNodes();
        if(this.master)this.master.gain.value=0;
        if(mode==='off'){this.setTarget();await this.context?.suspend();return;}
        this.ensureContext();
        if(this.blocked)await this.context.suspend();
        const buffer=await this.loadBuffer(mode);
        if(generation!==this.generation)return;
        this.buildBackground(buffer);
        if(this.blocked)await this.context.suspend();
        else{
          await this.context.resume();
          if(this.blocked||this.ambience==='off')await this.context.suspend();
          if(generation!==this.generation)return;
          this.setTarget();
        }
      }catch(error){
        if(generation!==this.generation)return;
        this.ambience='off';this.clearNodes();this.setTarget();
        await this.context?.suspend().catch(()=>{});
        this.callbacks.onError?.(error.message||'No se pudo activar el fondo. Puedes seguir en silencio.');
      }
    }
    setVolume(value){this.volume=Math.max(0,Math.min(1,Number(value)||0));this.setTarget();}
    setBlocked(blocked){
      this.blocked=!!blocked;this.setTarget();
      if(this.blocked)this.context?.suspend().catch(()=>{});
      else if(this.context&&this.ambience!=='off'){
        this.context.resume().then(()=>{
          if(this.blocked||this.ambience==='off')return this.context.suspend();
          this.setTarget();
        }).catch(()=>this.callbacks.onError?.('Para retomar el fondo, vuelve a elegirlo en «Sonido».'));
      }
    }
    destroy(){this.generation++;this.clearNodes();this.loadedBuffer=null;this.pending.clear();this.context?.close().catch(()=>{});}
  }
  root.InsideAudio=InsideAudio;
})(typeof window!=='undefined'?window:globalThis);
