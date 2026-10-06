const progress=document.getElementById("progress"), menu=document.getElementById("menu"), nav=document.getElementById("navLinks"), theme=document.getElementById("theme");
window.addEventListener("scroll",()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+"%"});
menu.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
theme.addEventListener("click",()=>{document.body.classList.toggle("light-off");theme.textContent=document.body.classList.contains("light-off")?"☀":"◐";localStorage.setItem("theme",document.body.classList.contains("light-off")?"dark":"light")});
if(localStorage.getItem("theme")==="dark"){document.body.classList.add("light-off");theme.textContent="☀"}
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
