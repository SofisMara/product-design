(function(){try{
var d=document,h=d.documentElement;h.classList.add('js');
var reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
var nav=d.querySelector('.nav');
function sc(){if(nav)nav.classList.toggle('scr',scrollY>20);var b=d.querySelector('.bar');if(b){var m=d.body.scrollHeight-innerHeight;b.style.width=(m>0?scrollY/m*100:0)+'%'}}
addEventListener('scroll',sc,{passive:true});sc();
var els=[].slice.call(d.querySelectorAll('[data-rv]'));
els.forEach(function(e){e.classList.add('rv');var i=[].indexOf.call(e.parentNode.children,e);e.style.setProperty('--d',Math.min(i,5)*.14+'s')});
if(reduce||!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')})}
else{var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var t=x.target;t.classList.add('in');io.unobserve(t);setTimeout(function(){t.classList.remove('rv','in');t.style.removeProperty('--d')},2800)}})},{threshold:.12,rootMargin:'0px 0px -40px 0px'});els.forEach(function(e){io.observe(e)})}
[].slice.call(d.querySelectorAll('.pills')).forEach(function(u){[].forEach.call(u.children,function(li,i){li.style.setProperty('--i',i)})});
var pls=[].slice.call(d.querySelectorAll('.pills'));
if(reduce||!('IntersectionObserver' in window)){pls.forEach(function(u){u.classList.add('show')})}else{var io2=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('show');io2.unobserve(x.target)}})},{threshold:.2});pls.forEach(function(u){io2.observe(u)})}
var ph=d.querySelector('.ph');if(ph&&!reduce&&matchMedia('(hover:hover)').matches){ph.addEventListener('pointermove',function(e){var r=ph.getBoundingClientRect();ph.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*26+'deg');ph.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5))*26+'deg')});ph.addEventListener('pointerleave',function(){ph.style.setProperty('--rx','0deg');ph.style.setProperty('--ry','0deg')})}

var home=d.getElementById('home'),views=[].slice.call(d.querySelectorAll('.view')),baseTitle=d.title;
try{history.scrollRestoration='manual'}catch(e){}
function track(n){try{if(window.clarity){clarity('set','tela',n);clarity('event','tela_'+n)}}catch(e){}}
function route(){var m=location.hash.match(/^#\/([\w-]+)/),v=m&&d.getElementById('v-'+m[1]);
 views.forEach(function(x){x.hidden=true});
 if(v){home.hidden=true;v.hidden=false;d.body.classList.add('case');var b=d.body.style;b.setProperty('--ac',v.dataset.ac);b.setProperty('--on',v.dataset.on);b.setProperty('--tint',v.dataset.tint);d.title=v.dataset.title;h.style.scrollBehavior='auto';scrollTo(0,0);setTimeout(function(){h.style.scrollBehavior=''},50);sc();track(m[1])}
 else{var was=home.hidden;home.hidden=false;d.body.classList.remove('case');d.title=baseTitle;var id=location.hash.slice(1),el=id&&d.getElementById(id);
  if(el){if(was)h.style.scrollBehavior='auto';el.scrollIntoView();setTimeout(function(){h.style.scrollBehavior=''},50)}else if(was){h.style.scrollBehavior='auto';scrollTo(0,0);setTimeout(function(){h.style.scrollBehavior=''},50)}sc();track(id||'home')}}
addEventListener('hashchange',route);route();

(function(){var tbs=[].slice.call(d.querySelectorAll('.tb')),pns=[].slice.call(d.querySelectorAll('.panels .sc'));
function sel(i,f){tbs.forEach(function(t,k){var on=k===i;t.classList.toggle('on',on);t.setAttribute('aria-selected',on);t.tabIndex=on?0:-1});pns.forEach(function(p,k){p.classList.toggle('on',k===i)});if(f)tbs[i].focus()}
tbs.forEach(function(t,i){t.addEventListener('click',function(){sel(i)});t.addEventListener('keydown',function(e){if(e.key==='ArrowRight')sel((i+1)%tbs.length,1);if(e.key==='ArrowLeft')sel((i+tbs.length-1)%tbs.length,1)})});
})();
var cp=d.getElementById('copy');if(cp)cp.addEventListener('click',function(){var t='sofiamara09@gmail.com';(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){cp.textContent='E-mail copiado ✓'},function(){cp.textContent=t});setTimeout(function(){cp.textContent='Copiar e-mail'},2600)});
}catch(e){document.documentElement.classList.remove('js')}})();
if(!/claude|localhost|127\.0\.0\.1/.test(location.hostname)){(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script","z1yjkkk715");}
(function(){document.querySelectorAll('.tools2').forEach(function(w){var b=w.querySelectorAll('.seg button'),p=w.querySelectorAll('.sp');b.forEach(function(x,i){x.addEventListener('click',function(){b.forEach(function(y){y.classList.remove('on')});p.forEach(function(y){y.classList.remove('on')});x.classList.add('on');p[i].classList.add('on')})})})})();
(function(){document.querySelectorAll('.car').forEach(function(w){var t=w.querySelector('.trk'),it=t.children,dots=w.querySelector('.dots'),pv=w.querySelector('.pv'),nx=w.querySelector('.nx2');
for(var i=0;i<it.length;i++){(function(i){var s=document.createElement('span');s.addEventListener('click',function(){t.scrollTo({left:it[i].offsetLeft-t.offsetLeft,behavior:'smooth'})});dots.appendChild(s)})(i)}
function cur(){if(!t.clientWidth)return 0;var x=t.scrollLeft+4,k=0;for(var i=0;i<it.length;i++){if(it[i].offsetLeft-t.offsetLeft<=x)k=i}if(t.scrollLeft+t.clientWidth>=t.scrollWidth-4)k=it.length-1;return k}
function up(){var k=cur();[].forEach.call(dots.children,function(d,i){d.classList.toggle('on',i===k)});pv.disabled=k===0;nx.disabled=k===it.length-1}
function go(d){var k=Math.max(0,Math.min(it.length-1,cur()+d));t.scrollTo({left:it[k].offsetLeft-t.offsetLeft,behavior:'smooth'})}
pv.addEventListener('click',function(){go(-1)});nx.addEventListener('click',function(){go(1)});t.addEventListener('scroll',up,{passive:true});window.addEventListener('resize',up);up();
if(window.ResizeObserver){var ro=new ResizeObserver(up);ro.observe(t);[].forEach.call(it,function(x){ro.observe(x)})}[].forEach.call(t.querySelectorAll('img'),function(m){m.addEventListener('load',up)});window.addEventListener('hashchange',function(){t.scrollLeft=0;setTimeout(up,60);setTimeout(up,400)})})})();
