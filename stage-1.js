(()=>{
 'use strict';
 document.getElementById('stage-print').addEventListener('click',()=>window.print());
 const progress=document.querySelector('.progress');
 const update=()=>{const distance=document.documentElement.scrollHeight-innerHeight;progress.style.width=(distance>0?scrollY/distance*100:0)+'%';};
 addEventListener('scroll',update,{passive:true});addEventListener('resize',update);update();
})();
