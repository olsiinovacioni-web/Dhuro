'use client';
import { useState, useEffect } from 'react';

type Dhurata = {
  id: number; titulli: string; kat: string; lagjia: string;
  foto: string; desc: string; status: string;
};

const KATS = ["Të gjitha","Rroba","Lodra / Fëmijë","Mobilje / Shtëpi","Elektronikë","Libra / Shkollë","Të tjera"];
const LAGJET = ["Kombinat","Astir","Fresku","Blloku","Yzberisht","Kamëz","Don Bosko","Sauk","Porcelan"];

const FILLIMI: Dhurata[] = [
  { id: 1, titulli: "Rroba dimri për fëmijë 6-8 vjeç", kat: "Rroba", lagjia: "Kombinat", foto: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80", desc: "Të pastra, shumë pak të veshura.", status: "e lirë" },
  { id: 2, titulli: "Divan i vogël - si i ri", kat: "Mobilje / Shtëpi", lagjia: "Astir", foto: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", desc: "Duhet marrë deri të premten.", status: "e lirë" },
  { id: 3, titulli: "Lodra + libra për klasën e 1-rë", kat: "Libra / Shkollë", lagjia: "Fresku", foto: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80", desc: "Të kompletuara.", status: "e lirë" },
];

export default function Home() {
  const [dhuratat, setDhuratat] = useState<Dhurata[]>(FILLIMI);
  const [activeCat, setActiveCat] = useState("Të gjitha");
  const [filterLagjia, setFilterLagjia] = useState("Të gjitha");
  const [showModal, setShowModal] = useState(false);
  const [titulli, setTitulli] = useState("");
  const [kategoria, setKategoria] = useState("Rroba");
  const [lagjia, setLagjia] = useState("Kombinat");
  const [pershkrimi, setPershkrimi] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem('dhuro');
    if (saved) { try { setDhuratat(JSON.parse(saved)); } catch {} }
  }, []);

  const save = (list: Dhurata[]) => { setDhuratat(list); localStorage.setItem('dhuro', JSON.stringify(list)); };

  const shto = () => {
    if (!titulli.trim()) return alert('Shkruaj titullin!');
    const eRe: Dhurata = { id: Date.now(), titulli, kat: kategoria, lagjia, foto: "https://images.unsplash.com/photo-1557928557-6b5c1d3d8b9a?w=800&q=80", desc: pershkrimi, status: "e lirë" };
    save([eRe, ...dhuratat]);
    setShowModal(false); setTitulli(""); setPershkrimi("");
  };

  const rezervo = (id: number) => {
    save(dhuratat.map(d => d.id === id ? { ...d, status: d.status === 'e rezervuar' ? 'e lirë' : 'e rezervuar' } : d));
  };
  const uMor = (id: number) => {
    if (confirm('U mor vërtet?')) save(dhuratat.map(d => d.id === id ? { ...d, status: 'e marrë' } : d));
  };

  const lista = dhuratat.filter(d => (activeCat === "Të gjitha" || d.kat === activeCat) && (filterLagjia === "Të gjitha" || d.lagjia === filterLagjia) && d.status !== "e marrë");

  return (
    <div style={{ background: '#F8F7F4', minHeight: '100vh', paddingBottom: 90, fontFamily: 'system-ui' }}>
      <header style={{ background: '#0F8A5F', color: 'white', padding: '18px 16px', position: 'sticky', top: 0, zIndex: 10 }}>
        <h1 style={{ margin: 0, fontSize: 24 }}>🎁 Dhuro</h1>
        <p style={{ margin: '4px 0 0', opacity: 0.9, fontSize: 14 }}>Jep falas. Merr falas. Në lagjen tënde.</p>
      </header>

      <div style={{ maxWidth: 520, margin: '0 auto', padding: 14 }}>
        <select value={filterLagjia} onChange={e => setFilterLagjia(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10, fontSize: 15 }}>
          <option value="Të gjitha">📍 Të gjitha lagjet - Tiranë</option>
          {LAGJET.map(l => <option key={l}>{l}</option>)}
        </select>

        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 12 }}>
          {KATS.map(c => (
            <button key={c} onClick={() => setActiveCat(c)} style={{ whiteSpace: 'nowrap', border: '1.5px solid #E5E0D8', background: c === activeCat ? '#0F8A5F' : 'white', color: c === activeCat ? 'white' : '#333', padding: '8px 14px', borderRadius: 999, fontWeight: 600, cursor: 'pointer' }}>{c}</button>
          ))}
        </div>

        {lista.length === 0 ? <div style={{ textAlign: 'center', padding: 40, color: '#888' }}><h3>Asnjë dhuratë këtu akoma 😢</h3><p>Ji i pari që dhuron në këtë lagje!</p></div> : null}

        {lista.map(d => (
          <div key={d.id} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', marginBottom: 14, boxShadow: '0 2px 12px rgba(0,0,0,.06)' }}>
            <img src={d.foto} alt={d.titulli} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
            <div style={{ padding: 14 }}>
              <span style={{ background: '#E6F7EF', color: '#0F8A5F', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>{d.kat}</span>
              <span style={{ background: '#FFF3D6', color: '#8A6D00', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700, marginLeft: 6 }}>📍 {d.lagjia}</span>
              <h3 style={{ margin: '10px 0 4px', fontSize: 18 }}>{d.titulli}</h3>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>{d.desc}</p>
              <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                <button onClick={() => rezervo(d.id)} style={{ flex: 1, padding: 12, borderRadius: 12, border: 0, fontWeight: 700, cursor: 'pointer', background: d.status === 'e rezervuar' ? '#FFC107' : '#0F8A5F', color: d.status === 'e rezervuar' ? '#333' : 'white' }}>{d.status === 'e rezervuar' ? '✅ E rezervuar' : '❤️ E dua'}</button>
                <button onClick={() => uMor(d.id)} style={{ flex: 1, padding: 12, borderRadius: 12, border: 0, fontWeight: 700, cursor: 'pointer', background: '#F0F0F0' }}>U mor</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={() => setShowModal(true)} style={{ position: 'fixed', bottom: 18, left: '50%', transform: 'translateX(-50%)', background: '#0F8A5F', color: 'white', border: 0, padding: '16px 24px', borderRadius: 999, fontSize: 16, fontWeight: 800, boxShadow: '0 8px 24px rgba(15,138,95,.4)', cursor: 'pointer', zIndex: 20 }}>+ Dhuro diçka</button>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 30, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
          <div style={{ background: 'white', width: '100%', maxWidth: 520, borderRadius: '20px 20px 0 0', padding: 20 }}>
            <h2 style={{ margin: '0 0 12px' }}>Dhuro diçka në 30 sekonda</h2>
            <input value={titulli} onChange={e => setTitulli(e.target.value)} placeholder="P.sh: Divan për fëmijë" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10, fontSize: 15 }} />
            <select value={kategoria} onChange={e => setKategoria(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }}>
              {KATS.filter(c => c !== "Të gjitha").map(c => <option key={c}>{c}</option>)}
            </select>
            <select value={lagjia} onChange={e => setLagjia(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }}>
              {LAGJET.map(l => <option key={l}>{l}</option>)}
            </select>
            <textarea value={pershkrimi} onChange={e => setPershkrimi(e.target.value)} rows={2} placeholder="Përshkrim i shkurtër..." style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }} />
            <button onClick={shto} style={{ width: '100%', padding: 14, background: '#0F8A5F', color: 'white', border: 0, borderRadius: 12, fontWeight: 800, fontSize: 16 }}>PUBLIKO FALAS →</button>
            <button onClick={() => setShowModal(false)} style={{ width: '100%', padding: 12, background: 'none', border: 0, marginTop: 6, color: '#888' }}>Mbyll</button>
          </div>
        </div>
      )}
    </div>
  );
}
