import{a as f,S as g,i as a}from"./assets/vendor-Bz4lgVUE.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="https://pixabay.com/api/",p="50824035-87dfb0469b0d9be7736d790bf";function h(o){const r={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return f.get(y,{params:r}).then(s=>s.data)}const n=document.querySelector(".gallery"),c=document.querySelector(".loader");let b=new g(".gallery a",{captionsData:"alt",animationDelay:250,captionPosition:"bottom"});function L(o){const r=o.map(({webformatURL:s,largeImageURL:l,tags:e,likes:t,views:i,comments:m,downloads:d})=>`
        <li class="gallery-item">
        <a class="gallery-link" href="${l}">
        <img class="gallery-img" src="${s}" alt="${e}" width="300"/>
        <ul class="gallery-desc">
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Likes</h2>
        <p class="gallery-text">${t}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Views</h2>
        <p class="gallery-text">${i}</p>
        </li>
         <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Comments</h2>
        <p class="gallery-text">${m}</p>
        </li>
        <li class="gallery-desc-item">
        <h2 class="gallery-subtitle">Downloads</h2>
        <p class="gallery-text">${d}</p>
        </li>
        </ul>
        </a>
        </li>
        `).join("");n.innerHTML=r,b.refresh()}function S(){n.innerHTML=""}function x(){c.classList.remove("hidden")}function P(){c.classList.add("hidden")}const u=document.querySelector(".form"),q=document.querySelector(".form-input");u.addEventListener("submit",w);function w(o){o.preventDefault();const r=q.value.trim();if(r==="")return a.warning({message:"Please, fill in the field",position:"topRight",timeout:3e3});S(),x(),h(r).then(s=>{const l=s.hits;if(l.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3,color:"red"});return}L(l)}).catch(s=>a.error({message:"Error",position:"topRight",timeout:5e3,color:"red"})).finally(()=>{P(),u.reset()})}
//# sourceMappingURL=index.js.map
