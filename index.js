import{a as y,S as g,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const h="50824035-87dfb0469b0d9be7736d790bf",n=new URLSearchParams({key:h,q:"",image_type:"photo",orientation:"horizontal",safesearch:"true"});function p(s){return n.set("q",s),y(`https://pixabay.com/api?${n}`).then(r=>{r.data.hits})}const u=document.querySelector(".gallery"),d=document.querySelector("#loader");let b=new g(".gallery a",{captionsData:"alt",animationDelay:250});function L(s){const r=s.map(({webformatURL:l,largeImageURL:i,tags:e,likes:t,views:o,comments:m,downloads:f})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${i}">
        <img class="gallery-img" src="${l}" alt="${e}" width="300"/>
        <ul class="gallery-desc">
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Likes</h2>
        <p class="gallery-text">${t}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Views</h2>
        <p class="gallery-text">${o}</p>
        </li>
         <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Comments</h2>
        <p class="gallery-text">${m}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Downloads</h2>
        <p class="gallery-text">${f}</p>
        </li>
        </ul>
        </a>
        </li>
        `).join("");u.innerHTML=r,b.refresh()}function S(){u.innerHTML=""}function q(){d.classList.remove("hidden")}function c(){d.classList.add("hidden")}const x=document.querySelector(".form"),P=document.querySelector(".form-input");document.querySelector(".form-btn");x.addEventListener("submit",$);function $(s){s.preventDefault();const r=P.value.trim();if(r==="")return alert("Please, fill in the field");S(),q(),p(r).then(l=>{if(!l.hits.length)return a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,color:"red"});L(l.hits),c()}).catch(l=>{a.error({message:"Error",position:"topRight",timeout:5e3,color:"red"})}).finally(()=>{c()})}
//# sourceMappingURL=index.js.map
