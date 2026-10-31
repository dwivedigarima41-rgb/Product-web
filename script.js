const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('nav-open');menuButton.setAttribute('aria-expanded','false');menuButton.textContent='☰';}));}
const bagButton=document.querySelector('.add-bag');
const toast=document.querySelector('.toast');
if(bagButton&&toast){bagButton.addEventListener('click',()=>{toast.classList.add('show');bagButton.innerHTML='Added <span>✓</span>';bagButton.classList.add('added');window.setTimeout(()=>toast.classList.remove('show'),2600);});}
