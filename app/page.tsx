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
  ];
  return (
    <div style={{ fontFamily: "Georgia, 'Times New Roman', serif", background: "#FFFFFF", minHeight: "100vh", color: "#1A1A1A", margin: 0 }}>
      {/* BANNER LART - si te foto */}
      <div style={{ background: "#78927D", color: "white", textAlign: "center", padding: "10px 15px", fontSize: "13.5px", fontFamily: "Arial, sans-serif", display: "flex", justifyContent: "center", alignItems: "center", gap: "12px" }}>
        <span>Dhuro me dashuri! Mos e hidh, dhuroje! 💐</span>
        <span style={{ background: "white", color: "#244B38", padding: "5px 14px", borderRadius: "20px", fontWeight: "bold", fontSize: "12px", cursor: "pointer" }}>Learn more</span>
      </div>

      {/* HEADER - IDENTIK ME FOTON */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "1200px", margin: "0 auto", padding: "16px 20px", fontFamily: "Arial, sans-serif" }}>
        <b onClick={() => setPage("home")} style={{ cursor: "pointer", fontSize: "16px", fontWeight: "bold", display: "flex", alignItems: "center", gap: "6px" }}><span style={{ fontSize: "20px" }}>♾️</span> DHURO</b>
        <div style={{ display: "flex", gap: "24px", fontSize: "13.5px", color: "#333", alignItems: "center" }}>
          <span onClick={() => setPage("dhuro")} style={{ cursor: "pointer" }}>Get Started ⌄</span>
          <span onClick={() => setPage("humanitare")} style={{ cursor: "pointer" }}>Humanitare</span>
          <span onClick={() => setPage("kerko")} style={{ cursor: "pointer" }}>Kërko</span>
          <span onClick={() => setPage("help")} style={{ cursor: "pointer" }}>Help Center</span>
        </div>
        <div style={{ display: "flex", gap: "12px", alignItems: "center", fontSize: "13.5px" }}>
          <span style={{ cursor: "pointer", fontSize: "18px" }}>🔍</span>
          <span onClick={() => setPage("login")} style={{ cursor: "pointer", color: "#333" }}>Log in</span>
          <button onClick={() => setPage("signup")} style={{ background: "#78927D", color: "white", border: "none", padding: "8px 16px", borderRadius: "20px", cursor: "pointer", fontSize: "13px", fontWeight: "bold" }}>Sign up</button>
        </div>
      </header>

      {page === "home" && (
        <>
          {/* HERO - IDENTIK ME FOTON */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "20px", padding: "20px 20px 40px", flexWrap: "wrap", alignItems: "center", position: "relative", overflow: "hidden" }}>
            {/* Majtas */}
            <div style={{ flex: 1, minWidth: "320px", zIndex: 2 }}>
              <h1 style={{ fontSize: "64px", lineHeight: "1.05", margin: "0 0 18px", fontWeight: "400", letterSpacing: "-1px" }}>Welcome to<br/>the<br/>DHURO<br/>Project</h1>
              <p style={{ fontSize: "15px", lineHeight: "1.6", color: "#333", maxWidth: "340px", margin: "0 0 24px", fontFamily: "Arial, sans-serif" }}>Join our community for giving and getting stuff, completely for free.</p>
              <div style={{ display: "flex", gap: "10px", fontFamily: "Arial, sans-serif" }}>
                <button onClick={() => setPage("signup")} style={{ background: "#78927D", color: "white", border: "none", padding: "12px 22px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Sign up</button>
                <button onClick={() => setPage("dhuro")} style={{ background: "white", color: "#244B38", border: "1.5px solid #244B38", padding: "12px 22px", borderRadius: "30px", cursor: "pointer", fontWeight: "bold", fontSize: "14px" }}>Download the app</button>
              </div>
            </div>

            {/* Djathtas - FOTO + SFOND JESHIL NATYRAL */}
            <div style={{ flex: 1.2, minWidth: "320px", position: "relative", height: "480px" }}>
              <div style={{ position: "absolute", right: "-40px", top: "-20px", width: "100%", height: "100%", background: "#78927D", borderRadius: "50% 0 0 50%", opacity: 0.95 }}></div>
              {/* Foto 1 - Biçikletë / Buqetë */}
              <div style={{ position: "absolute", top: "10px", right: "10px", width: "260px", background: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
                <div style={{ height: "150px", backgroundImage: "url('/hero.png.jpeg')", backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "50px" }}>💐</div>
              </div>
              <div style={{ position: "absolute", top: "50px", left: "10px", background: "white", padding: "10px 14px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.12)", zIndex: 3 }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#E9E9DC", display: "flex", alignItems: "center", justifyContent: "center" }}>👩</div>
                <div><div style={{ fontSize: "13px", fontWeight: "bold", fontFamily: "Arial" }}>Ana</div><div style={{ fontSize: "11px", color: "#666", fontFamily: "Arial" }}>Tirana, AL</div></div>
              </div>
              {/* Foto 2 */}
              <div style={{ position: "absolute", bottom: "70px", left: "40px", width: "300px", background: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
                <div style={{ height: "170px", background: "#E9E9DC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "60px" }}>🌷🌻🌹</div>
              </div>
              <div style={{ position: "absolute", bottom: "110px", left: "10px", background: "white", padding: "10px 14px", borderRadius: "12px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.12)", zIndex: 3 }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#FFE5D0", display: "flex", alignItems: "center", justifyContent: "center" }}>👩‍🦰</div>
                <div><div style={{ fontSize: "13px", fontWeight: "bold", fontFamily: "Arial" }}>Sara ✅</div><div style={{ fontSize: "11px", color: "#666", fontFamily: "Arial" }}>Bllok, Tirana</div></div>
              </div>
              {/* Foto 3 */}
              <div style={{ position: "absolute", bottom: "0", right: "0", width: "180px", background: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
                <div style={{ height: "110px", background: "#D07A4A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "50px" }}>🪴</div>
              </div>
            </div>
          </div>

          {/* SEARCH + 4 OPSIONE + RECENTLY ADDED */}
          <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px 40px", fontFamily: "Arial, sans-serif" }}>
            <div style={{ display: "flex", gap: "10px", background: "#F5F5F0", padding: "12px", borderRadius: "30px", maxWidth: "600px", margin: "0 auto" }}>
              <span style={{ padding: "8px 0 8px 12px" }}>🔍</span>
              <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Kërko buqetë, lule, dhuratë..." style={{ flex: 1, border: "none", background: "transparent", outline: "none", fontSize: "14px" }} />
              <button onClick={() => setPage("kerko")} style={{ background: "#78927D", color: "white", border: "none", padding: "10px 20px", borderRadius: "20px", cursor: "pointer", fontWeight: "bold" }}>Kërko</button>
            </div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center", marginTop: "18px", flexWrap: "wrap" }}>
              <button onClick={() => setPage("dhuro")} style={{ background: "#78927D", color: "white", border: "none", padding: "10px 18px", borderRadius: "20px", cursor: "pointer" }}>🤲 Helping Hands</button>
              <button onClick={() => setPage("dhuro")} style={{ background: "#E9E9DC", color: "#244B38", border: "none", padding: "10px 18px", borderRadius: "20px", cursor: "pointer" }}>📅 Local Events</button>
              <button onClick={() => setPage("kerko")} style={{ background: "#D07A4A", color: "white", border: "none", padding: "10px 18px", borderRadius: "20px", cursor: "pointer" }}>📍 Local Gems</button>
              <button onClick={() => setPage("humanitare")} style={{ background: "white", color: "#244B38", border: "1px solid #78927D", padding: "10px 18px", borderRadius: "20px", cursor: "pointer" }}>💐 Dhuro Tani</button>
            </div>
            <h2 style={{ fontFamily: "Georgia, serif", fontSize: "26px", margin: "30px 0 16px" }}>Recently Added</h2>
            <div style={{ display: "flex", gap: "14px", overflowX: "auto", paddingBottom: "10px" }}>
              {items.map((it, i) => (
                <div key={i} style={{ minWidth: "240px", background: "#FFFFFF", borderRadius: "14px", overflow: "hidden", border: "1px solid #E9E9DC", flexShrink: 0 }}>
                  <div style={{ background: "#E9E9DC", padding: "30px 0 20px", textAlign: "center" }}><div style={{ fontSize: "55px" }}>{it.img}</div></div>
                  <div style={{ padding: "14px" }}><h4 style={{ margin: "0 0 4px", fontSize: "14px" }}>{it.title}</h4><p style={{ margin: "0 0 8px", fontSize: "12px", color: "#78927D" }}>{it.user} • {it.time}</p><button onClick={() => setPage("dhuro")} style={{ width: "100%", background: "#78927D", color: "white", border: "none", padding: "9px", borderRadius: "10px", cursor: "pointer", fontWeight: "bold" }}>Dhuro / Kërko →</button></div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
      {page === "dhuro" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#F5F5F0", borderRadius: "20px", maxWidth: "1000px", margin: "20px auto", fontFamily: "Arial" }}><h2>Dhuro 💐</h2><p>Zgjidh një buqetë, na shkruaj, ne e çojmë me dashuri.</p></div>)}
      {page === "kerko" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#F5F5F0", borderRadius: "20px", maxWidth: "1000px", margin: "20px auto", fontFamily: "Arial" }}><h2>Kërko 🔍</h2><p>Na thuaj çfarë kërkon - komuniteti të ndihmon.</p></div>)}
      {page === "humanitare" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#F5F5F0", borderRadius: "20px", maxWidth: "1000px", margin: "20px auto", fontFamily: "Arial" }}><h2>Helping Hands 🤲</h2><p>Për një gjyshe të vetmuar, një fëmijë në spital.</p></div>)}
      {page === "help" && (<div style={{ textAlign: "center", padding: "60px 20px", background: "#F5F5F0", borderRadius: "20px", maxWidth: "1000px", margin: "20px auto", fontFamily: "Arial" }}><h2>Help Center ❓</h2><p>Si funksionon DHURO? Pyet këtu.</p></div>)}
      {page === "login" && (<div style={{ textAlign: "center", padding: "50px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "450px", margin: "30px auto", fontFamily: "Arial", border: "1px solid #E9E9DC" }}><h2>Mirësevjen përsëri! 👋</h2><input placeholder="Email" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "20px", boxSizing: "border-box" }} /><input type="password" placeholder="Fjalëkalimi" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "10px", boxSizing: "border-box" }} /><button onClick={() => setPage("home")} style={{ width: "100%", background: "#78927D", color: "white", border: "none", padding: "13px", borderRadius: "12px", marginTop: "15px", cursor: "pointer", fontWeight: "bold" }}>Log In</button></div>)}
      {page === "signup" && (<div style={{ textAlign: "center", padding: "50px 20px", background: "#FFFFFF", borderRadius: "20px", maxWidth: "450px", margin: "30px auto", fontFamily: "Arial", border: "1px solid #E9E9DC" }}><h2>Krijo llogari ✨</h2><input placeholder="Emri" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "20px", boxSizing: "border-box" }} /><input placeholder="Email" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "10px", boxSizing: "border-box" }} /><input type="password" placeholder="Fjalëkalimi" style={{ width: "100%", padding: "12px", borderRadius: "12px", border: "1px solid #E9E9DC", marginTop: "10px", boxSizing: "border-box" }} /><button onClick={() => setPage("home")} style={{ width: "100%", background: "#78927D", color: "white", border: "none", padding: "13px", borderRadius: "12px", marginTop: "15px", cursor: "pointer", fontWeight: "bold" }}>Sign Up</button></div>)}
      <footer style={{ textAlign: "center", padding: "20px", color: "#78927D", fontSize: "12px", fontFamily: "Arial" }}>© 2026 DHURO</footer>
    </div>
  );
}
