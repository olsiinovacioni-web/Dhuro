<!DOCTYPE html>
<html lang="sq">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dhuro - Jep falas, merr falas</title>
<style>
  *{box-sizing:border-box;font-family:system-ui,-apple-system,sans-serif}
  body{margin:0;background:#F8F7F4;color:#1A1A1A;padding-bottom:90px}
  header{background:#0F8A5F;color:white;padding:18px 16px;position:sticky;top:0;z-index:10}
  header h1{margin:0;font-size:24px} header p{margin:4px 0 0;opacity:.9;font-size:14px}
  .container{max-width:520px;margin:0 auto;padding:14px}
  .filters{display:flex;gap:8px;overflow-x:auto;padding:4px 0 12px;scrollbar-width:none}
  .filters button{white-space:nowrap;border:1.5px solid #E5E0D8;background:white;padding:8px 14px;border-radius:999px;font-weight:600;cursor:pointer}
  .filters button.active{background:#0F8A5F;color:white;border-color:#0F8A5F}
  select,input,textarea{width:100%;padding:12px;border:1.5px solid #E5E0D8;border-radius:12px;margin-bottom:10px;font-size:15px;background:white}
  .card{background:white;border-radius:16px;overflow:hidden;margin-bottom:14px;box-shadow:0 2px 12px rgba(0,0,0,.06)}
  .card img{width:100%;height:220px;object-fit:cover;background:#eee;display:block}
  .card-body{padding:14px}
  .badge{display:inline-block;background:#E6F7EF;color:#0F8A5F;padding:4px 10px;border-radius:999px;font-size:12px;font-weight:700}
  .badge.lagjia{background:#FFF3D6;color:#8A6D00;margin-left:6px}
  .card h3{margin:10px 0 4px;font-size:18px}
  .card p{margin:0;color:#666;font-size:14px}
  .actions{display:flex;gap:8px;margin-top:12px}
  .actions button{flex:1;padding:12px;border-radius:12px;border:0;font-weight:700;cursor:pointer;font-size:15px}
  .btn-dua{background:#0F8A5F;color:white}
  .btn-mor{background:#F0F0F0;color:#333}
  .btn-rezervuar{background:#FFC107;color:#333}
  .fab{position:fixed;bottom:18px;left:50%;transform:translateX(-50%);background:#0F8A5F;color:white;border:0;padding:16px 24px;border-radius:999px;font-size:16px;font-weight:800;box-shadow:0 8px 24px rgba(15,138,95,.4);cursor:pointer;z-index:20}
  .modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:30;align-items:flex-end;justify-content:center}
  .modal.open{display:flex}
  .modal-box{background:white;width:100%;max-width:520px;border-radius:20px 20px 0 0;padding:20px;max-height:90vh;overflow:auto}
  .empty{text-align:center;padding:40px 10px;color:#888}
</style>
</head>
<body>

<header><h1>🎁 Dhuro</h1><p>Jep falas. Merr falas. Në lagjen tënde.</p></header>

<div class="container">
  <select id="filterLagjia" onchange="render()">
    <option value="Të gjitha">📍 Të gjitha lagjet - Tiranë</option>
    <option>Kombinat</option><option>Astir</option><option>Fresku</option>
    <option>Blloku</option><option>Yzberisht</option><option>Kamëz</option>
    <option>Don Bosko</option><option>Sauk</option><option>Porcelan</option>
  </select>

  <div class="filters" id="cats"></div>
  <div id="list"></div>
</div>

<button class="fab" onclick="openModal()">+ Dhuro diçka</button>

<div class="modal" id="modal">
  <div class="modal-box">
    <h2 style="margin:0 0 12px">Dhuro diçka në 30 sekonda</h2>
    <input id="titulli" placeholder="P.sh: Divan për fëmijë">
    <select id="kategoria">
      <option>Rroba</option><option>Lodra / Fëmijë</option>
      <option>Mobilje / Shtëpi</option><option>Elektronikë</option>
      <option>Libra / Shkollë</option><option>Të tjera</option>
    </select>
    <select id="lagjia">
      <option>Kombinat</option><option>Astir</option><option>Fresku</option>
      <option>Blloku</option><option>Yzberisht</option><option>Kamëz</option>
      <option>Don Bosko</option><option>Sauk</option><option>Porcelan</option>
    </select>
    <input id="foto" placeholder="Link foto (opsionale) ose lëre bosh">
    <textarea id="pershkrimi" rows="2" placeholder="Përshkrim i shkurtër..."></textarea>
    <button onclick="shto()" style="width:100%;padding:14px;background:#0F8A5F;color:white;border:0;border-radius:12px;font-weight:800;font-size:16px">PUBLIKO FALAS →</button>
    <button onclick="closeModal()" style="width:100%;padding:12px;background:none;border:0;margin-top:6px;color:#888">Mbyll</button>
  </div>
</div>

<script>
let cats = ["Të gjitha","Rroba","Lodra / Fëmijë","Mobilje / Shtëpi","Elektronikë","Libra / Shkollë","Të tjera"];
let activeCat = "Të gjitha";
let dhuratat = JSON.parse(localStorage.getItem('dhuro') || '[]');
if(dhuratat.length===0){
  dhuratat = [
    {id:1,titulli:"Rroba dimri për fëmijë 6-8 vjeç",kat:"Rroba",lagjia:"Kombinat",foto:"https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80",desc:"Të pastra, shumë pak të veshura.",status:"e lirë"},
    {id:2,titulli:"Divan i vogël - si i ri",kat:"Mobilje / Shtëpi",lagjia:"Astir",foto:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",desc:"Duhet marrë deri të premten.",status:"e lirë"},
    {id:3,titulli:"Lodra + libra për klasën e 1-rë",kat:"Libra / Shkollë",lagjia:"Fresku",foto:"https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80",desc:"Të kompletuara.",status:"e lirë"}
  ];
  save();
}
function save(){ localStorage.setItem('dhuro', JSON.stringify(dhuratat)); }
function renderCats(){
  document.getElementById('cats').innerHTML = cats.map(c=>`<button class="${c===activeCat?'active':''}" onclick="activeCat='${c}';render()">${c}</button>`).join('');
}
function render(){
  renderCats();
  let lagjia = document.getElementById('filterLagjia').value;
  let list = dhuratat.filter(d=> (activeCat==="Të gjitha"||d.kat===activeCat) && (lagjia==="Të gjitha"||d.lagjia===lagjia) && d.status!=="e marrë");
  document.getElementById('list').innerHTML = list.length ? list.map(d=>`
    <div class="card">
      <img src="${d.foto || 'https://images.unsplash.com/photo-1557928557-6b5c1d3d8b9a?w=800&q=80'}" onerror="this.src='https://images.unsplash.com/photo-1557928557-6b5c1d3d8b9a?w=800&q=80'">
      <div class="card-body">
        <span class="badge">${d.kat}</span><span class="badge lagjia">📍 ${d.lagjia}</span>
        <h3>${d.titulli}</h3><p>${d.desc||''}</p>
        <div class="actions">
          <button class="btn-dua ${d.status==='e rezervuar'?'btn-rezervuar':''}" onclick="rezervo(${d.id})">${d.status==='e rezervuar'?'✅ E rezervuar':'❤️ E dua'}</button>
          <button class="btn-mor" onclick="uMor(${d.id})">U mor</button>
        </div>
      </div>
    </div>`).join('') : `<div class="empty"><h3>Asnjë dhuratë këtu akoma 😢</h3><p>Ji i pari që dhuron në këtë lagje!</p></div>`;
}
function openModal(){ document.getElementById('modal').classList.add('open'); }
function closeModal(){ document.getElementById('modal').classList.remove('open'); }
function shto(){
  let t=document.getElementById('titulli').value.trim();
  if(!t) return alert('Shkruaj titullin!');
  dhuratat.unshift({id:Date.now(),titulli:t,kat:document.getElementById('kategoria').value,lagjia:document.getElementById('lagjia').value,foto:document.getElementById('foto').value,desc:document.getElementById('pershkrimi').value,status:"e lirë"});
  save(); closeModal(); render();
  document.getElementById('titulli').value=''; document.getElementById('pershkrimi').value='';
}
function rezervo(id){ let d=dhuratat.find(x=>x.id===id); d.status = d.status==='e rezervuar' ? 'e lirë' : 'e rezervuar'; save(); render(); }
function uMor(id){ if(confirm('U mor vërtet?')){ let d=dhuratat.find(x=>x.id===id); d.status='e marrë'; save(); render(); } }
render();
</script>
</body>
</html>
