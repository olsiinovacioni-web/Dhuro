"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [cat, setCat] = useState("Te gjitha");

  const items = [
    { title: "Buqetë Trëndafila", tag: "Free to Borrow", img: "💐", user: "Ana • Tirana", time: "2 min më parë" },
    { title: "Kuti Çokollatash", tag: "Free to Borrow", img: "🍫", user: "Sara • Bllok", time: "15 min më parë" },
    { title: "Buqetë për Gjyshen", tag: "Free to Borrow", img: "🌷", user: "Erioni • Kombinat", time: "30 min më parë" },
    { title: "Libër + Lule", tag: "Free to Borrow", img: "📚", user: "Doni • Kamëz", time: "1 orë më parë" },
    { title: "Lule për Spitalin", tag: "Free to Borrow", img: "🌻", user: "Komuniteti • QSUT", time: "2 orë më parë" },
    { title: "Buqetë Ditëlindje", tag: "Free to Borrow", img: "🎂", user: "Mira • Elbasan", time: "3 orë më parë" },
    { title: "Kartë Falënderimi", tag: "Free to Borrow", img: "💌", user: "Eli • Durrës", time: "5 orë më parë" },
    { title: "Buqetë Luledielli", tag: "Free to Borrow", img: "🌼", user: "Jon • Vlorë", time: "Sot" },
  ];

  return (
    <div style={{ fontFamily: "Georgia, serif", background: "#EDEFE9", minHeight: "100vh", color: "#1A2E2A", padding: "12px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1150px", margin: "0 auto", background: "white", padding: "12px 22px", borderRadius: "30px", boxShadow: "0 4px 15px rgba(0,0,0,0.05)" }}>
        <b onClick={() => setPage("home")} style={{ cursor: "pointer", fontSize: "19px" }}>DHURO</b>
        <div style={{ display: "flex", gap: "18px", fontSize: "13px", color: "#666" }}>
          <span onClick={() => setPage("home")} style={{ cursor: "pointer", color: "#1A3C34", fontWeight: "bold" }}>Home</span>
          <span onClick={() => setPage("dhuro")} style={{ cursor: "pointer" }}>Dhuro</span>
          <span onClick={() => setPage("humanitare")} style={{ cursor: "pointer" }}>Humanitare</span>
          <span onClick={() => setPage("kerko")} style={{ cursor: "pointer" }}>Kërko</span>
          <span onClick={() => setPage("kerko")} style={{ cursor: "pointer" }}>Kontakt</span>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button style={{ background: "white", border: "1px solid #999", padding: "8px 16px", borderRadius: "30px", cursor: "pointer", fontSize: "13px" }}>Login</button>
          <button onClick={() => setPage("dhuro")} style={{ background: "#1A3C34", color: "white", border: "none", padding: "8px 16px", borderRadius: "30px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}>Sign Up</button>
        </div>
      </header>

      {page === "home" && (
        <>
          <div style={{ maxWidth: "1150px", margin: "14px auto 0", background: "linear-gradient(135deg, #1A3C34 0%, #2A4A3A 50%, #122A22 100%)", borderRadius: "24px", padding: "40px 35px", display: "flex", gap: "30px", flexWrap: "wrap", alignItems: "center", color: "white" }}>
            <div style={{ flex: "1", minWidth: "300px" }}>
              <h1 style={{ fontSize: "44px", lineHeight: "1.1", margin: "0 0 14px", fontWeight: "900" }}>Shkëmbe,<br/>Mos Shpenzo<br/><span style={{ fontSize: "24px", fontWeight: "400", opacity: 0.9 }}>Mirësevjen te DHURO</span></h1>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#D8E5E0", maxWidth: "420px", margin: "0 0 22px" }}>Një platformë komuniteti ku gjërat e papërdorura gjejnë shtëpi të re. Jep pak, merr atë që të duhet - pa para në mes. Dhuro një buzëqeshje, një buqetë, një dorë ndihme.</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={() => setPage("dhuro")} style={{ background: "white", color: "#1A3C34", border: "none", padding: "12px 22px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Start Exchanging</button>
                <button onClick={() => setPage("kerko")} style={{ background: "transparent", color: "white", border: "1px solid white", padding: "12px 22px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Browse Items</button>
              </div>
            </div>
            <div style={{ flex: "1", minWidth: "300px", textAlign: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "20px", padding: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ fontSize: "28px", marginBottom: "6px" }}>📢 &nbsp; 🎯 &nbsp; 💡</div>
                <div style={{ fontSize: "80px", lineHeight: "1" }}>🧺</div>
                <div style={{ fontSize: "42px", marginTop: "-10px" }}>💐 📚 🧸 🪴</div>
                <div style={{ display: "flex", justifyContent: "center", gap: "10px", fontSize: "32px", marginTop: "8px" }}><span>🪑</span><span>👟</span><span>☕</span><span>🏠</span><span>🌿</span></div>
                <div style={{ marginTop: "10px", background: "white", color: "#1A3C34", display: "inline-block", padding: "6px 14px", borderRadius: "20px", fontSize: "12px", fontWeight: "bold" }}>% &nbsp; DHURO • SHKËMBE • NDAJ</div>
              </div>
              <p style={{ fontSize: "11px", color: "#A8C0B8", marginTop: "10px" }}>Shporta e Komunitetit - plot me dashuri</p>
            </div>
          </div>

          <div style={{ maxWidth: "1150px", margin: "20px auto 0", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <div onClick={() => setPage("humanitare")} style={{ flex: 1, minWidth: "220px", background: "white", borderRadius: "16px", padding: "20px", cursor: "pointer" }}>
              <span style={{ background: "#FFF0E6", padding: "8px", borderRadius: "10px" }}>🤲</span>
              <h3 style={{ margin: "14px 0 5px", fontSize: "16px" }}>Helping Hands</h3>
              <p style={{ color: "#888", fontSize: "12.5px", margin: 0, lineHeight: "1.5" }}>Offer a smile or request help from neighbors nearby. Dhurim për gjyshe, fëmijë, familje.</p>
            </div>
            <div onClick={() => setPage("dhuro")} style={{ flex: 1, minWidth: "220px", background: "#1E4A3A", color: "white", borderRadius: "16px", padding: "20px", cursor: "pointer" }}>
              <span style={{ background: "rgba(255,255,255,0.15)", padding: "8px", borderRadius: "10px" }}>📅</span>
              <h3 style={{ margin: "14px 0 5px", fontSize: "16px" }}>Local Events</h3>
              <p style={{ color: "#C8D8D2", fontSize: "12.5px", margin: 0, lineHeight: "1.5" }}>Block parties, ditëlindje, takime komuniteti, dhe dhurime të përbashkëta.</p>
            </div>
            <div onClick={() => setPage("kerko")} style={{ flex: 1, minWidth: "220px", background: "#D07A4A", color: "white", borderRadius: "16px", padding: "20px", cursor: "pointer" }}>
              <span style={{ background: "rgba(255,255,255,0.2)", padding: "8px", borderRadius: "10px" }}>📍</span>
              <h3 style={{ margin: "14px 0 5px", fontSize: "16px" }}>Local Gems</h3>
              <p style={{ color: "#FFE5D0", fontSize: "12.5px", margin: 0, lineHeight: "1.5" }}>Discover neighbors, luleshitës dhe njerëz të mirë në lagjen tënde.</p>
            </div>
          </div>

          <div style={{ maxWidth: "1150px", margin: "30px auto", padding: "0 5px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
              <div>
                <h2 style={{ margin: "0 0 4px", fontSize: "24px" }}>Recently Added</h2>
                <p style={{ color: "#999", margin: 0, fontSize: "13px" }}>Available to borrow in your area</p>
              </div>
              <span style={{ fontSize: "13px", cursor: "pointer", fontWeight: "bold" }}>View all →</span>
            </div>
            <div style={{ display: "flex", gap: "8px", marginTop: "15px", flexWrap: "wrap" }}>
              {["Te gjitha", "Dhuro", "Humanitare", "Kërko"].map(c => (
                <button key={c} onClick={() => setCat(c)} style={{ background: cat === c ? "#1A3C34" : "white", color: cat === c ? "white" : "#333", border: "1px solid #ddd", padding: "7px 14px", borderRadius: "30px", cursor: "pointer", fontSize: "12px" }}>{c}</button>
              ))}
            </div>
            <div style={{ display: "flex", gap: "14px", marginTop: "16px", overflowX: "auto", paddingBottom: "10px" }}>
              {items.map((it, i) => (
                <div key={i} style={{ minWidth: "235px", background: "white", borderRadius: "14px", overflow: "hidden", border: "1px solid #eee", flexShrink: 0 }}>
                  <div style={{ background: "#FDF0E6", padding: "30px 0 20px", textAlign: "center", position: "relative" }}>
                    <span style={{ position: "absolute", top: "10px", left: "10px", background: "white", fontSize: "11px", padding: "4px 8px", borderRadius: "20px", fontWeight: "bold" }}>{it.tag}</span>
                    <div style={{ fontSize: "55px" }}>{it.img}</div>
                  </div>
                  <div style={{ padding: "14px" }}>
                    <h4 style={{ margin: "0 0 4px", fontSize: "14px" }}>{it.title}</h4>
                    <p style={{ margin: "0 0 8px", fontSize: "12px", color: "#999" }}>{it.user} • {it.time}</p>
                    <button onClick={() => setPage("dhuro")} style={{ width: "100%", background: "#1A3C34", color: "white", border: "none", padding: "9px", borderRadius: "10px", cursor: "pointer", fontSize: "12px", fontWeight: "bold" }}>Dhuro / Kërko →</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {page === "dhuro" && (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: "20px", maxWidth: "1150px", margin: "14px auto" }}>
          <h2 style={{ fontSize: "36px" }}>Dhuro 💐</h2>
          <p>Zgjidh një buqetë, na shkruaj, ne e çojmë me dashuri.</p>
          <button style={{ background: "#1A3C34", color: "white", border: "none", padding: "14px 28px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold" }}>Na Shkruaj në WhatsApp</button>
        </div>
      )}
      {page === "kerko" && (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: "20px", maxWidth: "1150px", margin: "14px auto" }}>
          <h2 style={{ fontSize: "36px" }}>Local Events / Kërko 🔍</h2>
          <p>Na thuaj çfarë kërkon - komuniteti të ndihmon.</p>
        </div>
      )}
      {page === "humanitare" && (
        <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: "20px", maxWidth: "1150px", margin: "14px auto" }}>
          <h2 style={{ fontSize: "36px" }}>Helping Hands - Dritarja e Mirësisë 🤲</h2>
          <p>Për një gjyshe të vetmuar, një fëmijë në spital, një familje në nevojë.</p>
          <button style={{ background: "#D07A4A", color: "white", border: "none", padding: "14px 28px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold" }}>Dhuro për Mirësi</button>
        </div>
      )}

      <footer style={{ textAlign: "center", padding: "20px", color: "#999", fontSize: "12px" }}>© 2026 DHURO - Komunitet Solidar</footer>
    </div>
  );
}
