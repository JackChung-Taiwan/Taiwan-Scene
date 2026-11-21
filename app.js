(() => {
 const grid=document.querySelector('#grid'), search=document.querySelector('#search'), region=document.querySelector('#region'), count=document.querySelector('#count');
 const unique=[...new Set(ATTRACTIONS.map(a=>a.region))];
 unique.forEach(x=>{const o=document.createElement('option');o.value=x;o.textContent=x;region.appendChild(o)});
 const popup=document.querySelector('#dialog');
 function show(a){document.querySelector('#largeImage').src=a.file;document.querySelector('#largeImage').alt=a.name+'的AI景點主題示意圖';document.querySelector('#dialogTitle').textContent=a.name;document.querySelector('#dialogDesc').textContent=a.region+' · '+a.category+' · AI示意圖，非實景攝影';popup.hidden=false;document.body.style.overflow='hidden'}
 function hide(){popup.hidden=true;document.body.style.overflow=''}
 document.querySelector('#closeDialog').addEventListener('click',hide);document.querySelector('#dialogBg').addEventListener('click',hide);window.addEventListener('keydown',e=>{if(e.key==='Escape')hide()});
 function render(){const q=search.value.trim().toLocaleLowerCase(),r=region.value;const filtered=ATTRACTIONS.filter(a=>(!r||a.region===r)&&(!q||(a.name+' '+a.region+' '+a.category).toLocaleLowerCase().includes(q)));count.textContent=filtered.length;document.querySelector('#none').hidden=filtered.length>0;grid.replaceChildren();
 filtered.forEach(a=>{const b=document.createElement('button');b.className='tile';b.type='button';b.setAttribute('aria-label','放大查看 '+a.name);const img=document.createElement('img');img.src=a.file;img.alt=a.name+'的AI示意圖';img.loading='lazy';const box=document.createElement('div');box.className='body';const meta=document.createElement('div');meta.className='meta';const left=document.createElement('span');left.textContent=a.region;const right=document.createElement('span');right.textContent='#'+String(a.id).padStart(3,'0');meta.append(left,right);const title=document.createElement('h3');title.textContent=a.name;const sub=document.createElement('p');sub.textContent=a.category;box.append(meta,title,sub);b.append(img,box);b.addEventListener('click',()=>show(a));grid.appendChild(b)});
 }
 search.addEventListener('input',render);region.addEventListener('change',render);document.querySelector('#reset').addEventListener('click',()=>{search.value='';region.value='';render()});render();
})();