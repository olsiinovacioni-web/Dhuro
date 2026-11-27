"use client"
import { useState } from "react"

type Dhurate = {
  id: number
  titulli: string
  pershkrimi: string
  kategoria: string
  vendndodhja: string
  dhuruesi: string
  foto: string
}

export default function Home() {
  const [tab, setTab] = useState("home")
  const [kerko, setKerko] = useState("")
  const [kategoria, setKategoria] = useState("Te gjitha")
  const [showForm, setShowForm] = useState(false)

  // PROFILI
  const [emri] = useState("Enzo")
  const [email] = useState("enzo@dhuro.al")
  const [fotoProfili, setFotoProfili] = useState("")
  const [vendndodhja, setVendndodhja] = useState("Tirane")
  const [bio, setBio] = useState("Pershendetje! Me pelqen te dhuroj sende qe nuk i perdor me.")

  // FORM DHURO
  const [titulli, setTitulli] = useState("")
  const [pershkrimi, setPershkrimi] = useState("")
  const [kat, setKat] = useState("Lojra")
  const [foto, setFoto] = useState("")
  const [photoPreview, setPhotoPreview] = useState("")

  const handlePhotoChange = (e: any) => {
    const file = e.target.files?.[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setPhotoPreview(url)
      setFoto(url)
    }
  }

  const [lista, setLista] = useState<Dhurate[]>([
    { id: 1, titulli: "Lodra per femije", pershkrimi: "Lodra te pastra, te perdorura pak.", kategoria: "Lojra", vendndodhja: "Tirane", dhuruesi: "Enzo", foto: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=600" },
    { id: 2, titulli: "Xhakete dimri", pershkrimi: "E ngrohte, madhesia M.", kategoria: "Rroba", vendndodhja: "Durres", dhuruesi: "Ana", foto: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600" },
  ])

  const shtoDhurate = () => {
    if (!titulli) return alert("Shkruaj titullin")
    const eRe: Dhurate = {
      id: Date.now(),
      titulli,
      pershkrimi,
      kategoria: kat,
      vendndodhja: vendndodhja,
      dhuruesi: emri,
      foto: foto || "https://via.placeholder.com/600x400?text=Pa+Foto"
    }
    setLista([eRe, ...lista])
    setTitulli(""); setPershkrimi(""); setFoto(""); setPhotoPreview("")
    setShowForm(false)
    setTab("home")
  }

  const filtruar = lista.filter((d) => {
    const okKat = kategoria === "Te gjitha" || d.kategoria === kategoria
    const okKerko = d.titulli.toLowerCase().includes(kerko.toLowerCase())
    return okKat && okKerko
  })

  const kategorite = ["Te gjitha", "Lojra", "Rroba", "Libra", "Te tjera"]

  return (
    <div style={{ minHeight: '100vh', background: '#FDFBEE', fontFamily: 'sans-serif' }}>
      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', background: 'white', borderBottom: '1px solid #EEE' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 36, height: 36, background: '#4CAF50', color: 'white', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>🎁</div>
          <b style={{ fontSize: 22 }}>DHURO</b>
        </div>
        <div style={{ display: 'flex', gap: 20 }}>
          <span onClick={() => setTab("home")} style={{ cursor: 'pointer', fontWeight: tab === 'home' ? 700 : 400 }}>Home</span>
          <span onClick={() => setShowForm(true)} style={{ cursor: 'pointer', color: '#4CAF50', fontWeight: 700 }}>+ Dhuro</span>
          <span onClick={() => setTab("profil")} style={{ cursor: 'pointer', fontWeight: tab === 'profil' ? 700 : 400 }}>Profili</span>
        </div>
      </div>

      {tab === 'profil' ? (
        <div style={{ maxWidth: 600, margin: '20px auto', background: 'white', padding: 20, borderRadius: 16 }}>
          <h2>Profili Im</h2>
          <input value={fotoProfili} onChange={(e) => setFotoProfili(e.target.value)} placeholder="Link foto profili" style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #EEE', marginBottom: 10 }} />
          {fotoProfili && <img src={fotoProfili} style={{ width: 100, height: 100, borderRadius: 50, objectFit: 'cover' }} />}
          <p><b>{emri}</b><br />{email}<br />📍 {vendndodhja}<br />{bio}</p>
          <h3>Dhuratat e mia</h3>
          {lista.filter(d => d.dhuruesi === emri).map(d => (
            <div key={d.id} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
              <img src={d.foto} style={{ width: 80, height: 80, borderRadius: 10, objectFit: 'cover' }} />
              <div><b>{d.titulli}</b><br /><span>{d.pershkrimi}</span></div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: 20 }}>
          <h1 style={{ fontSize: 32 }}>Dhuro, mos e hidh! 💚</h1>
          <p>Gjej sende falas nga komuniteti ose dhuro ato që nuk të duhen më.</p>

          <input value={kerko} onChange={(e) => setKerko(e.target.value)} placeholder="🔍 Kërko sende falas..." style={{ width: '100%', padding: 14, borderRadius: 12, border: '1px solid #EEE', background: 'white' }} />

          <div style={{ display: 'flex', gap: 10, marginTop: 15, flexWrap: 'wrap' }}>
            {kategorite.map((k) => (
              <button key={k} onClick={() => setKategoria(k)} style={{ padding: '8px 16px', borderRadius: 20, border: 'none', background: kategoria === k ? '#222' : 'white', color: kategoria === k ? 'white' : '#222', cursor: 'pointer' }}>{k}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16, marginTop: 20 }}>
            {filtruar.map((d) => (
              <div key={d.id} style={{ background: 'white', borderRadius: 16, overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }}>
                <img src={d.foto} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                <div style={{ padding: 14 }}>
                  <span style={{ background: '#E8F5E9', color: '#2E7D32', padding: '4px 10px', borderRadius: 20, fontSize: 12 }}>{d.kategoria}</span>
                  <h3 style={{ margin: '10px 0 5px' }}>{d.titulli}</h3>
                  <p style={{ color: '#666', fontSize: 14 }}>{d.pershkrimi}</p>
                  <p style={{ fontSize: 13 }}>📍 {d.vendndodhja} • 👤 {d.dhuruesi}</p>
                  <button style={{ width: '100%', background: '#4CAF50', color: 'white', border: 'none', padding: 10, borderRadius: 10, marginTop: 10 }}>Kërkoje</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* FORM DHURO - ME FOTO SI OPSION */}
      {showForm && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
          <div style={{ background: 'white', width: '100%', maxWidth: 500, padding: 20, borderRadius: 16, maxHeight: '90vh', overflowY: 'auto' }}>
            <h2>Dhuro një send 🎁</h2>
            <label>Titulli</label>
            <input value={titulli} onChange={(e) => setTitulli(e.target.value)} placeholder="P.sh. Biçikletë" style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #EEE', marginBottom: 10 }} />
            <label>Përshkrimi</label>
            <textarea value={pershkrimi} onChange={(e) => setPershkrimi(e.target.value)} placeholder="Përshkruaj sendin..." rows={3} style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #EEE', marginBottom: 10 }} />
            <label>Kategoria</label>
            <select value={kat} onChange={(e) => setKat(e.target.value)} style={{ width: '100%', padding: 10, borderRadius: 10, border: '1px solid #EEE', marginBottom: 10 }}>
              <option>Lojra</option><option>Rroba</option><option>Libra</option><option>Te tjera</option>
            </select>

            {/* KETU ESHTE FOTOJA */}
            <label style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>Foto e sendit (opsionale)</label>
            <input type="file" accept="image/*" onChange={handlePhotoChange} style={{ width: '100%', background: 'white', border: '1px solid #EEE', borderRadius: 10, padding: 10, marginBottom: 10 }} />
            {photoPreview && <img src={photoPreview} style={{ width: '100%', height: 200, objectFit: 'cover', borderRadius: 12, marginBottom: 10 }} />}

            <button onClick={shtoDhurate} style={{ width: '100%', background: '#4CAF50', color: 'white', border: 'none', padding: 12, borderRadius: 10, fontWeight: 700 }}>Dhuro Tani</button>
            <button onClick={() => setShowForm(false)} style={{ width: '100%', background: '#EEE', border: 'none', padding: 12, borderRadius: 10, marginTop: 8 }}>Anulo</button>
          </div>
        </div>
      )}
    </div>
  )
}
