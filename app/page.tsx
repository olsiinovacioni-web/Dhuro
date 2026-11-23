"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const items = [
    { title: "Buqetë Trëndafila", tag: "Free to Borrow", img: "💐", user: "Ana • Tirana", time: "2 min më parë" },
    { title: "Kuti Çokollatash", tag: "Free to Borrow", img: "🍫", user: "Sara • Bllok", time: "15 min më parë" },
    { title: "Buqetë për Gjyshen", tag: "Free to Borrow", img: "🌷", user: "Erioni • Kombinat", time: "30 min më parë" },
    { title: "Libër + Lule", tag: "Free to Borrow", img: "📚", user: "Doni • Kamëz", time: "1 orë më parë" },
    { title: "Lule për Spitalin", tag: "Free to Borrow", img: "🌻", user: "Komuniteti • QSUT", time: "2 orë më parë" },
    { title: "Buqetë Ditëlindje", tag: "Free to Borrow", img: "🎂", user: "Mira • Elbasan", time: "3 orë më parë" },
  ];
  return (
    <div style={{ fontFamily: "Manrope, Arial, sans-serif", background: "#E9E9DC", minHeight: "100vh", color: "#244B38", padding: "12px" }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1150px", margin: "0 auto", background: "#FFFFFF", padding: "12px 22px", borderRadius: "30px", gap: "10px", flexWrap: "wrap" }}>
        <b onClick={() => setPage("home")} style={{ cursor: "pointer", fontSize: "19px", color: "#244B38" }}>DHURO</b>
        <div style={{ display: "flex", gap: "18px", fontSize: "13px", color: "#666" }}>
          <span onClick={() => setPage("home")} style={{ cursor: "pointer", color: "#244B38", fontWeight: "bold" }}>Home</span>
          <span onClick={() => setPage("dhuro")} style={{ cursor: "pointer" }}>Dhuro</span>
          <span onClick={() => setPage("humanitare")} style={{ cursor: "pointer" }}>Humanitare</span>
          <span onClick={() => setPage("kerko")} style={{ cursor: "pointer" }}>Kërko</span>
        </div>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div style={{ display: "flex", alignItems: "center", background: "#F5F5F0", borderRadius: "30px", padding: "6px 10px", gap: "6px" }}>
            <span>🔍</span>
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Kërko..." style={{ border: "none", background: "transparent", outline: "none", width: "80px", fontSize: "13px" }} />
          </div>
          <button onClick={() => setPage("login")} style={{ background: "white", color: "#244B38", border: "1px solid #244B38", padding: "8px 16px", borderRadius: "30px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}>Log In</button>
          <button onClick={() => setPage("signup")} style={{ background: "#78927D", color: "white", border: "none", padding: "8px 16px", borderRadius: "30px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}>Sign Up</button>
        </div>
      </header>

      {page === "home" && (
        <>
          {/* SHPORTA SI NE FOTO - VETEM SFONDI PAK ME I HAPUR */}
          <div style={{ maxWidth: "1150px", margin: "14px auto 0", borderRadius: "24px", overflow: "hidden", position: "relative", minHeight: "420px", backgroundImage: "url('/hero.png.jpeg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center" }}>
            
<div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(120,146,125,0.45) 0%, rgba(120,146,125,0.30) 50%, rgba(120,146,125,0.15) 100%)" }}></div>
              <h1 style={{ fontSize: "44px", lineHeight: "1.1", margin: "0 0 14px", fontWeight: "900", textShadow: "0 2px 10px rgba(0,0,0,0.2)" }}>Shkëmbe,<br/>Mos Shpenzo<br/><span style={{ fontSize: "24px", fontWeight: "400", opacity: 0.95 }}>Mirësevjen te DHURO</span></h1>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "#FFFFFF", maxWidth: "420px", margin: "0 0 22px" }}>Një platformë komuniteti ku gjërat e papërdorura gjejnë shtëpi të re. Jep pak, merr atë që të duhet - pa para në mes.</p>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <button onClick={() => setPage("dhuro")} style={{ background: "#E9E9DC", color: "#244B38", border: "none", padding: "12px 22px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Start Exchanging</button>
                <button onClick={() => setPage("kerko")} style={{ background: "transparent", color: "white", border: "1px solid white", padding: "12px 22px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Browse Items</button>
              </div>
            </div>
          </div>

          <div style={{ maxWidth: "1150px", margin: "20px auto 0", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <div onClick={() => setPage("humanitare")} style={{ flex: 1, minWidth: "220px", background: "#FFFFFF", borderRadius: "16px", padding: "20px", cursor: "pointer" }}><span style={{ background: "#E9E9DC", padding: "8px", borderRadius: "10px" }}>🤲</span><h3 style={{ margin: "14px 0 5px", color: "#244B38" }}>Helping Hands</h3><p style={{ color: "#666", fontSize: "12.5px", margin: 0 }}>Offer a smile or request help from neighbors nearby.</p></div>
            <div onClick={() => setPage("dhuro")} style={{ flex: 1, minWidth: "220px", background: "#A8BFA8", color: "#FFFFFF", borderRadius: "16px", padding: "20px", cursor: "pointer" }}><span style={{ background: "rgba(255,255,255,0.3)", padding: "8px", borderRadius: "10px" }}>📅</span><h3 style={{ margin: "14px 0 5px", color: "#FFFFFF" }}>Local Events</h3><p style={{ color: "#FFFFFF", fontSize: "12.5px", margin: 0 }}>Block parties, ditëlindje, takime komuniteti.</p></div>
            <div onClick={() => setPage("kerko")} style={{ flex: 1, minWidth: "220px", background: "#D07A4A", color: "white", borderRadius: "16px", padding: "20px", cursor: "pointer" }}><span style={{ background: "rgba(255,255,255,0.2)", padding: "8px", borderRadius: "10px" }}>📍</span><h3 style={{ margin: "14px 0 5px" }}>Local Gems</h3><p style={{ color: "#FFE5D0", fontSize: "12.5px", margin: 0 }}>Discover neighbors dhe njerëz të mirë në lagjen tënde.</p></div>
          </div>

          <div style={{ maxWidth: "1150px", margin: "30px auto", padding: "0 5px 20px" }}>
            <h2 style={{ margin: "0 0 4px", fontSize: "24px", color: "#244B38" }}>Recently Added</h2>
            <p style={{ color: "#78927D", margin: 0, fontSize: "13px" }}>Available to borrow in your area</p>
            <div style={{ display: "flex", gap: "14px", marginTop: "16px", overflowX: "auto", paddingBottom: "10px" }}>
              {items.map((it, i) => (
                <div key={i} style={{ minWidth: "235px", background: "#FFFFFF", borderRadius: "14px", overflow: "hidden", border: "1px solid #E9E9DC", flexShrink: 0 }}>
                  <div style={{ background: "#E9E9DC", padding: "30px 0 20px", textAlign: "center", position: "relative" }}><span style={{ position: "absolute", top: "10px", left: "10px", background: "white", fontSize: "11px", padding: "4px 8px", borderRadius: "20px", fontWeight: "bold", color: "#244B38" }}>{it.tag}</span><div style={{ fontSize: "55px" }}>{it.img}</div></div>
                  <div style={{ padding: "14px" }}><h4 style={{ margin: "0 0 4px", fontSize: "14px", color: "#244B38" }}>{it.title}</h4><p style={{ margin: "0 0 8px", fontSize: "12px", color: "#78927D" }}>{it.user} • {it.time}</p><button onClick={() => setPage("dhuro")} style={{ width: "100%", background: "#78927D", color: "white", border: "none", padding: "9px", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}>Dhuro / Kërko →</button></div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {page === "dhuro" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "1150px", margin: "14px auto" }}><h2 style={{ color: "#244B38" }}>Dhuro 💐</h2><p>Zgjidh një buqetë, na shkruaj, ne e çojmë me dashuri.</p></div>)}
      {page === "kerko" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "1150px", margin: "14px auto" }}><h2 style={{ color: "#244B38" }}>Kërko 🔍</h2><p>Na thuaj çfarë kërkon - komuniteti të ndihmon.</p></div>)}
      {page === "humanitare" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "1150px", margin: "14px auto" }}><h2 style={{ color: "#244B38" }}>Helping Hands 🤲</h2><p>Për një gjyshe të vetmuar, një fëmijë në spital, një familje në nevojë.</p></div>)}
      {page === "login" && (<div style={{ textAlign: "center", padding: "50px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "450px", margin: "30px auto" }}><h2 style={{ color: "#244B38" }}>Mirësevjen përsëri! 👋</h2><input placeholder="Email" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "20px", boxSizing: "border-box" }} /><input type="password" placeholder="Fjalëkalimi" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "10px", boxSizing: "border-box" }} /><button onClick={() => setPage("home")} style={{ width: "100%", background: "#78927D", color: "white", border: "none", padding: "13px", borderRadius: "12px", marginTop: "15px", cursor: "pointer", fontWeight: "bold" }}>Log In</button></div>)}
      {page === "signup" && (<div style={{ textAlign: "center", padding: "50px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "450px", margin: "30px auto" }}><h2 style={{ color: "#244B38" }}>Krijo llogari ✨</h2><input placeholder="Emri" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "20px", boxSizing: "border-box" }} /><input placeholder="Email" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "10px", boxSizing: "border-box" }} /><input type="password" placeholder="Fjalëkalimi" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "10px", boxSizing: "border-box" }} /><button onClick={() => setPage("home")} style={{ width: "100%", background: "#78927D", color: "white", border: "none", padding: "13px", borderRadius: "12px", marginTop: "15px", cursor: "pointer", fontWeight: "bold" }}>Sign Up</button></div>)}
      <footer style={{ textAlign: "center", padding: "20px", color: "#78927D", fontSize: "12px" }}>© 2026 DHURO</footer>
    </div>
  );
}
