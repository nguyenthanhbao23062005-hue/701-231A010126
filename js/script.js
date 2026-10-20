(()=>{const b=document.querySelector('.toggle'),n=document.getElementById('menu');
if(b&&n){const s=o=>{n.classList.toggle('open',o);b.setAttribute('aria-expanded',o)};
b.addEventListener('click',()=>s(!n.classList.contains('open')));
document.addEventListener('keydown',e=>{if(e.key==='Escape')s(false)});}
const u=document.getElementById('deploy-url');
if(u&&/^https?:$/.test(location.protocol)){const h=new URL('./',location.href).href;
u.replaceChildren(Object.assign(document.createElement('a'),{href:h,textContent:h}));}
document.querySelectorAll('img[data-fb]').forEach(i=>{const f=()=>{i.hidden=true};
i.addEventListener('error',f);if(i.complete&&!i.naturalWidth)f();});})();
