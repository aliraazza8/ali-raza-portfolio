document.addEventListener('DOMContentLoaded',()=>{
  const menu=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav');
  if(menu&&nav){menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
  const reveal=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
  setTimeout(()=>document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible')),1200);
  const lightbox=document.querySelector('.lightbox');
  const lightboxTitle=lightbox?.querySelector('h2');
  document.querySelectorAll('[data-lightbox]').forEach(card=>card.addEventListener('click',()=>{if(!lightbox)return;lightboxTitle.textContent=card.dataset.lightbox;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
  const close=()=>{if(!lightbox)return;lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true')};
  document.querySelector('.lightbox-close')?.addEventListener('click',close);
  lightbox?.addEventListener('click',e=>{if(e.target===lightbox)close()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});
});
