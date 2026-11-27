'use client';
import { useState, useEffect } from 'react';

type Dhurata = { id: number; titulli: string; kat: string; lagjia: string; foto: string; desc: string; status: string; };

const KATS = ["Të gjitha","Rroba","Lodra / Fëmijë","Mobilje / Shtëpi","Elektronikë","Libra / Shkollë","Të tjera"];
const LAGJET = ["Kombinat","Astir","Fresku","Blloku","Yzberisht","Kamëz","Don Bosko","Sauk","Porcelan"];
const FILLIMI: Dhurata[] = [
  { id: 1, titulli: "Rroba dimri për fëmijë 6-8 vjeç", kat: "Rroba", lagjia: "Kombinat", foto: "https://images.unsplash.com/photo-1522771930-78848d9293e8?w=800&q=80", desc: "Të pastra, shumë pak të veshura.", status: "e lirë" },
  { id: 2, titulli: "Divan i vogël - si i ri", kat: "Mobilje / Shtëpi", lagjia: "Astir", foto: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", desc: "Duhet marrë deri të premten.", status: "e lirë" },
  { id: 3, titulli: "Lodra + libra për klasën e 1-rë", kat: "Libra / Shkollë", lagjia: "Fresku", foto: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=800&q=80", desc: "Të kompletuara.", status: "e lirë" },
  { id: 4, titulli: "Këpucë sportive Nr 38", kat: "Rroba", lagjia: "Blloku", foto: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80", desc: "Veshur 2 herë.", status: "e lirë" },
];

export default function Home() {
  const [dhuratat, setDhuratat] = useState<Dhurata[]>(FILLIMI);
  const [activeCat, setActiveCat] = useState("Të gjitha");
  const [filterLagjia, setFilterLagjia] = useState("Të gjitha");
  const [kerko, setKerko] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [tab, setTab] = useState<'home' | 'dhuro' | 'humanitare' | 'kerko' | 'profil'>('home');
  const [titulli, setTitulli] = useState("");
  const [kategoria, setKategoria] = useState("Rroba");
  const [lagjia, setLagjia] = useState("Kombinat");
  const [pershkrimi, setPershkrimi] = useState("");
  const [emri, setEmri] = useState("Përdorues Dhuro");
  const [fotoProfili, setFotoProfili] = useState("https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80");
  const [bio, setBio] = useState("Tiranë • Dhuroj gjëra që s'më duhen më 🎁");

  useEffect(() => {
    const s = localStorage.getItem('dhuro'); if (s) { try { setDhuratat(JSON.parse(s)); } catch {} }
    const p = localStorage.getItem('dhuro-profil'); if (p) { try { const d = JSON.parse(p); setEmri(d.emri); setFotoProfili(d.fotoProfili); setBio(d.bio); } catch {} }
  }, []);

  const save = (list: Dhurata[]) => { setDhuratat(list); localStorage.setItem('dhuro', JSON.stringify(list)); };
  const shto = () => {
    if (!titulli.trim()) return alert('Shkruaj titullin!');
    save([{ id: Date.now(), titulli, kat: kategoria, lagjia, foto: "https://images.unsplash.com/photo-1557928557-6b5c1d3d8b9a?w=800&q=80", desc: pershkrimi, status: "e lirë" }, ...dhuratat]);
    setShowModal(false); setTitulli(""); setPershkrimi(""); setTab('home');
  };
  const rezervo = (id: number) => save(dhuratat.map(d => d.id === id ? { ...d, status: d.status === 'e rezervuar' ? 'e lirë' : 'e rezervuar' } : d));
  const uMor = (id: number) => { if (confirm('U mor vërtet?')) save(dhuratat.map(d => d.id === id ? { ...d, status: 'e marrë' } : d)); };
  const fshi = (id: number) => { if (confirm('Ta fshij?')) save(dhuratat.filter(d => d.id !== id)); };
  const lista = dhuratat.filter(d => (activeCat === "Të gjitha" || d.kat === activeCat) && (filterLagjia === "Të gjitha" || d.lagjia === filterLagjia) && (kerko === "" || d.titulli.toLowerCase().includes(kerko.toLowerCase())) && d.status !== "e marrë");

  return (
    <div style={{ background: '#FDF8EE', minHeight: '100vh', fontFamily: 'system-ui', paddingBottom: 40 }}>

      {/* ===== LART - E GJITHA SI NE FOTO ===== */}
      <header style={{ background: '#FDF8EE', padding: '14px 22px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, position: 'sticky', top: 0, zIndex: 20, borderBottom: '1px solid #F0EADF' }}>
        {/* MAJTAS: DHURO */}
        <b style={{ fontSize: 21, letterSpacing: 1, cursor: 'pointer', fontWeight: 900 }} onClick={() => setTab('home')}>DHURO</b>

        {/* MES: Home Dhuro Humanitare Kerko */}
        <nav style={{ display: 'flex', gap: 20, fontSize: 14, color: '#555', alignItems: 'center' }}>
          <span onClick={() => setTab('home')} style={{ cursor: 'pointer', fontWeight: tab === 'home' ? 800 : 400, color: tab === 'home' ? '#111' : '#555' }}>Home</span>
          <span onClick={() => { setTab('dhuro'); setShowModal(true); }} style={{ cursor: 'pointer', fontWeight: tab === 'dhuro' ? 800 : 400, color: tab === 'dhuro' ? '#111' : '#555' }}>Dhuro</span>
          <span onClick={() => setTab('humanitare')} style={{ cursor: 'pointer', fontWeight: tab === 'humanitare' ? 800 : 400, color: tab === 'humanitare' ? '#111' : '#555' }}>Humanitare</span>
          <span onClick={() => setTab('kerko')} style={{ cursor: 'pointer', fontWeight: tab === 'kerko' ? 800 : 400, color: tab === 'kerko' ? '#111' : '#555' }}>Kërko</span>
        </nav>

        {/* DJATHTAS: Search + Log In + Sign Up */}
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ background: 'white', borderRadius: 999, padding: '8px 14px', display: 'flex', gap: 6, alignItems: 'center', border: '1px solid #EEE' }}>
            <span>🔍</span>
            <input value={kerko} onChange={e => { setKerko(e.target.value); setTab('kerko'); }} placeholder="Kërko..." style={{ border: 'none', outline: 'none', width: 90, fontSize: 13, background: 'transparent' }} />
          </div>
          <button onClick={() => setTab('profil')} style={{ background: 'white', border: '1.5px solid #333', borderRadius: 999, padding: '8px 16px', fontWeight: 600, cursor: 'pointer', whiteSpace: 'nowrap' }}>Log In</button>
          <button onClick={() => setTab('profil')} style={{ background: '#2E4A2E', color: 'white', border: 'none', borderRadius: 999, padding: '9px 18px', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Sign Up</button>
        </div>
      </header>

      {tab === 'home' && (
        <>
          {/* ===== HERO - JESHILJA + SHPORTA JOTE ===== */}
          <div style={{ margin: '10px 16px 0', background: '#164A34', borderRadius: 24, overflow: 'hidden', display: 'flex', color: 'white', minHeight: 380 }}>
            <div style={{ flex: 1, padding: '42px 34px' }}>
              <h1 style={{ fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 900 }}>Shkëmbe,<br />Mos Shpenzo</h1>
              <p style={{ fontSize: 20, margin: '14px 0 6px', fontWeight: 600 }}>Mirësevjen te DHURO</p>
              <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.9, maxWidth: 380, margin: 0 }}>Një platformë komuniteti ku gjërat e papërdorura gjejnë shtëpi të re.<br />Jep pak, merr atë që të duhet - pa para në mes.</p>
              <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
                <button onClick={() => setShowModal(true)} style={{ background: '#FDF8EE', color: '#111', border: 'none', borderRadius: 999, padding: '12px 18px', fontWeight: 700, cursor: 'pointer' }}>Start Exchanging</button>
                <button onClick={() => document.getElementById('recent')?.scrollIntoView({ behavior: 'smooth' })} style={{ background: 'transparent', color: 'white', border: '1.5px solid white', borderRadius: 999, padding: '12px 18px', fontWeight: 700, cursor: 'pointer' }}>Browse Items</button>
              </div>
            </div>
           <div style={{ display: 'flex', gap: '16px' }}>
  <div style={{ flex: 1 }}>
    <img src="/shporta.jpg.jpeg" alt="Shporta DHURO" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
  </div>
</div>
          <div style={{ display: 'flex', gap: 12, margin: '14px 16px 0' }}>
            <div onClick={() => setTab('humanitare')} style={{ flex: 1, background: 'white', borderRadius: 16, padding: 18, cursor: 'pointer' }}>
              <div style={{ background: '#FFF3D6', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>🤝</div>
              <b style={{ display: 'block', marginTop: 12 }}>Helping Hands</b><p style={{ margin: '6px 0 0', fontSize: 13, color: '#777', lineHeight: 1.5 }}>Offer a smile or request help from neighbors nearby.</p>
            </div>
            <div style={{ flex: 1, background: '#DCE5D5', borderRadius: 16, padding: 18 }}>
              <div style={{ background: 'white', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📅</div>
              <b style={{ display: 'block', marginTop: 12, color: 'white' }}>Local Events</b><p style={{ margin: '6px 0 0', fontSize: 13, color: 'white', lineHeight: 1.5 }}>Block parties, ditëlindje, takime komuniteti.</p>
            </div>
            <div style={{ flex: 1, background: '#E87F2E', borderRadius: 16, padding: 18 }}>
              <div style={{ background: '#FFC9A0', width: 36, height: 36, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>📍</div>
              <b style={{ display: 'block', marginTop: 12, color: 'white' }}>Local Gems</b><p style={{ margin: '6px 0 0', fontSize: 13, color: 'white', lineHeight: 1.5 }}>Discover neighbors dhe njerëzit më mirë në lagjen tënde.</p>
            </div>
          </div>
        </>
      )}

      {/* RECENTLY ADDED */}
      <div id="recent" style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px 0' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: 22, margin: 0 }}>{tab === 'profil' ? '👤 Profili' : tab === 'humanitare' ? '🤝 Humanitare' : tab === 'kerko' ? '🔍 Kërko' : 'Recently Added'}</h2>
          <button onClick={() => setShowModal(true)} style={{ background: '#164A34', color: 'white', border: 0, padding: '10px 16px', borderRadius: 999, fontWeight: 700, cursor: 'pointer' }}>+ Dhuro diçka</button>
        </div>
        {tab !== 'profil' && (
          <>
            <select value={filterLagjia} onChange={e => setFilterLagjia(e.target.value)} style={{ width: '100%', maxWidth: 400, padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', margin: '14px 0 10px', background: 'white' }}>
              <option value="Të gjitha">📍 Të gjitha lagjet - Tiranë</option>
              {LAGJET.map(l => <option key={l}>{l}</option>)}
            </select>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto', paddingBottom: 14 }}>
              {KATS.map(c => <button key={c} onClick={() => setActiveCat(c)} style={{ whiteSpace: 'nowrap', border: '1.5px solid #E5E0D8', background: c === activeCat ? '#164A34' : 'white', color: c === activeCat ? 'white' : '#333', padding: '8px 14px', borderRadius: 999, fontWeight: 600, cursor: 'pointer' }}>{c}</button>)}
            </div>
          </>
        )}
        {tab === 'profil' ? (
          <div style={{ background: 'white', borderRadius: 20, padding: 22, maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
            <img src={fotoProfili} alt="Profili" style={{ width: 110, height: 110, borderRadius: '50%', objectFit: 'cover' }} />
            <h2>{emri}</h2><p style={{ color: '#666', marginTop: -8 }}>{bio}</p>
            <input value={emri} onChange={e => setEmri(e.target.value)} placeholder="Emri" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #EEE', marginTop: 12 }} />
            <input value={fotoProfili} onChange={e => setFotoProfili(e.target.value)} placeholder="Link foto profili" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #EEE', marginTop: 8 }} />
            <input value={bio} onChange={e => setBio(e.target.value)} placeholder="Bio" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #EEE', marginTop: 8 }} />
            <button onClick={() => { localStorage.setItem('dhuro-profil', JSON.stringify({ emri, fotoProfili, bio })); alert('Profili u ruajt ✅'); }} style={{ width: '100%', padding: 13, background: '#164A34', color: 'white', border: 0, borderRadius: 12, fontWeight: 800, marginTop: 10 }}>RUAJ PROFILIN ✅</button>
            <h3 style={{ textAlign: 'left', marginTop: 22 }}>Dhuratat e mia</h3>
            {dhuratat.map(d => (
              <div key={d.id} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: 10, background: '#FDF8EE', borderRadius: 12, marginBottom: 8, textAlign: 'left' }}>
                <img src={d.foto} alt={d.titulli} style={{ width: 60, height: 60, borderRadius: 10, objectFit: 'cover' }} />
                <div style={{ flex: 1 }}><b style={{ fontSize: 14 }}>{d.titulli}</b><div style={{ fontSize: 12, color: '#888' }}>{d.kat} • {d.lagjia} • {d.status}</div></div>
                <button onClick={() => fshi(d.id)} style={{ background: '#FFE5E5', color: '#C00', border: 0, padding: '8px 12px', borderRadius: 10, fontWeight: 700 }}>Fshi</button>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 14 }}>
            {lista.map(d => (
              <div key={d.id} style={{ background: 'white', borderRadius: 16, overflow: 'hidden' }}>
                <img src={d.foto} alt={d.titulli} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <div style={{ padding: 14 }}>
                  <span style={{ background: '#E6F7EF', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700 }}>{d.kat}</span>
                  <span style={{ background: '#FFF3D6', padding: '4px 10px', borderRadius: 999, fontSize: 12, fontWeight: 700, marginLeft: 6 }}>📍 {d.lagjia}</span>
                  <h3 style={{ margin: '10px 0 4px' }}>{d.titulli}</h3><p style={{ margin: 0, color: '#666', fontSize: 13 }}>{d.desc}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
                    <button onClick={() => rezervo(d.id)} style={{ flex: 1, padding: 11, borderRadius: 12, border: 0, fontWeight: 700, cursor: 'pointer', background: d.status === 'e rezervuar' ? '#FFC107' : '#164A34', color: 'white' }}>{d.status === 'e rezervuar' ? '✅ E rezervuar' : '❤️ E dua'}</button>
                    <button onClick={() => uMor(d.id)} style={{ flex: 1, padding: 11, borderRadius: 12, border: 0, fontWeight: 700, cursor: 'pointer', background: '#F0F0F0' }}>U mor</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.6)', zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'white', width: '100%', maxWidth: 480, borderRadius: 20, padding: 20 }}>
            <h2 style={{ margin: '0 0 12px' }}>Dhuro diçka në 30 sekonda</h2>
            <input value={titulli} onChange={e => setTitulli(e.target.value)} placeholder="P.sh: Divan për fëmijë" style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }} />
            <select value={kategoria} onChange={e => setKategoria(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }}>{KATS.filter(c => c !== "Të gjitha").map(c => <option key={c}>{c}</option>)}</select>
            <select value={lagjia} onChange={e => setLagjia(e.target.value)} style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }}>{LAGJET.map(l => <option key={l}>{l}</option>)}</select>
            <textarea value={pershkrimi} onChange={e => setPershkrimi(e.target.value)} rows={2} placeholder="Përshkrim..." style={{ width: '100%', padding: 12, borderRadius: 12, border: '1.5px solid #E5E0D8', marginBottom: 10 }} />
            <button onClick={shto} style={{ width: '100%', padding: 14, background: '#164A34', color: 'white', border: 0, borderRadius: 12, fontWeight: 800 }}>PUBLIKO FALAS →</button>
            <button onClick={() => setShowModal(false)} style={{ width: '100%', padding: 12, background: 'none', border: 0, color: '#888' }}>Mbyll</button>
          </div>
        </div>
      )}
    </div>
  );
}
