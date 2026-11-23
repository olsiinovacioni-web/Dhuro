export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#F7F7F2", minHeight: "100vh", color: "#1E3A2B" }}>

      {/* ===== HEADER - SI NE FOTO ===== */}
      <header style={{ background: "white", padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid #eee" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: "900", fontSize: "20px", letterSpacing: "1px" }}>
          <span style={{ background: "#8A9E84", color: "white", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>⇄</span>
          DHURO
        </div>
        <nav style={{ display: "flex", gap: "18px", fontSize: "14px", fontWeight: "600", color: "#444" }}>
          <span style={{ color: "#1E3A2B" }}>Home</span>
          <span>Dhuro</span>
          <span>Humanitare</span>
          <span>Kërko</span>
        </nav>
        <div style={{ display: "flex", gap: "14px", alignItems: "center", fontSize: "19px" }}>
          <span>♡</span>
          <span>🔔</span>
          <span>👤</span>
          <span style={{ background: "#8A9E84", color: "white", padding: "7px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "700" }}>+ Shto</span>
        </div>
      </header>

      {/* ===== HERO - SHporta Prapa, Shkrimi Majtas - SI NE FOTO ===== */}
      <section style={{ position: "relative", height: "520px", overflow: "hidden", background: "#1E3A2B" }}>
        {/* FOTOJA E SHportes */}
        <img
          src="https://images.unsplash.com/photo-1597484661643-2f5fef640dd1?w=1600&q=80"
          alt="Shporta DHURO"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        {/* HIJA E GJELBER SIPER FOTOS PER TE LEXUAR SHKRIMI */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(120,146,125,0.45) 0%, rgba(120,146,125,0.30) 50%, rgba(120,146,125,0.15) 100%)" }}></div>
        
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 24px", maxWidth: "900px" }}>
          <h1 style={{ fontSize: "44px", lineHeight: "1.1", fontWeight: "900", color: "white", margin: "0 0 14px", maxWidth: "520px" }}>
            Mirësevini te DHURO
          </h1>
          <p style={{ fontSize: "17px", lineHeight: "1.6", color: "white", opacity: 0.95, margin: "0 0 26px", maxWidth: "480px" }}>
            Jep atë që nuk të duhet. Merr atë që të duhet.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/browse" style={{ background: "white", color: "#1E3A2B", padding: "13px 22px", borderRadius: "999px", fontWeight: "800", fontSize: "15px", textDecoration: "none" }}>
              Fillo Shkëmbimin
            </a>
            <a href="/browse" style={{ background: "rgba(255,255,255,0.22)", color: "white", padding: "13px 22px", borderRadius: "999px", fontWeight: "800", fontSize: "15px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.6)" }}>
              Shiko Sendet
            </a>
          </div>
        </div>
      </section>

      {/* ===== POSHTE HERO - SI ISHTE ===== */}
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "20px 14px 40px" }}>

        <div style={{ background: "white", borderRadius: "20px", padding: "20px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <h3 style={{ margin: "0", fontSize: "18px" }}>🤲 Duart që Ndihmojnë</h3>
          <p style={{ color: "#666", fontSize: "14px", lineHeight: "1.6", margin: "8px 0" }}>
            Jep, merr dhe ndihmo komunitetin të rritet së bashku. Çdo send i dhuruar është një buzëqeshje e re.
          </p>
          <span style={{ color: "#5B735F", fontWeight: "700", fontSize: "14px" }}>Mëso Më Shumë →</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "14px" }}>
          <div style={{ background: "white", borderRadius: "20px", padding: "18px" }}>
            <span style={{ fontSize: "26px" }}>🌱</span>
            <h4 style={{ margin: "10px 0 4px" }}>Më Pak Mbeturina</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: "1.5" }}>Jepi jetë të dytë sendeve të tua të papërdorura.</p>
          </div>
          <div style={{ background: "white", borderRadius: "20px", padding: "18px" }}>
            <span style={{ fontSize: "26px" }}>👥</span>
            <h4 style={{ margin: "10px 0 4px" }}>Komunitet i Fortë</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: "1.5" }}>Njihe fqinjin tënd dhe ndërto besim.</p>
          </div>
        </div>

        <div style={{ background: "white", borderRadius: "20px", padding: "22px", marginTop: "16px" }}>
          <h3 style={{ margin: "0 0 14px", fontSize: "20px" }}>Si Funksionon?</h3>
          <p style={{ margin: "10px 0", fontSize: "14px" }}><b>1. Listo Sendin</b><br /><span style={{ color: "#666" }}>Fotografo dhe ngarko atë që nuk të duhet.</span></p>
          <p style={{ margin: "10px 0", fontSize: "14px" }}><b>2. Lidhu me Fqinjin</b><br /><span style={{ color: "#666" }}>Gjej dikë pranë teje që ka nevojë për të.</span></p>
          <p style={{ margin: "10px 0", fontSize: "14px" }}><b>3. Shkëmbe & Gëzohu</b><br /><span style={{ color: "#666" }}>Takohuni, shkëmbeni dhe buzëqeshni.</span></p>
        </div>

        <div style={{ background: "#2F3D33", borderRadius: "24px", padding: "28px 20px", marginTop: "16px", color: "white", textAlign: "center" }}>
          <h3 style={{ margin: "0", fontSize: "22px" }}>Gati të Fillosh?</h3>
          <p style={{ fontSize: "14px", opacity: 0.85, margin: "10px 0 18px" }}>Bashkohu me qindra fqinjë që shkëmbejnë çdo ditë.</p>
          <a href="/browse" style={{ background: "white", color: "#2F3D33", padding: "12px 22px", borderRadius: "999px", fontWeight: "800", textDecoration: "none", display: "inline-block" }}>Shiko Sendet Tani</a>
        </div>

        <footer style={{ marginTop: "30px", color: "#666", fontSize: "14px" }}>
          <b style={{ color: "#2F3D33", fontSize: "18px" }}>DHURO</b>
          <p style={{ lineHeight: "1.6" }}>Ndërto komunitetin duke shkëmbyer atë që nuk të duhet me atë që të duhet.</p>
          <p style={{ textAlign: "center", fontSize: "12px", marginTop: "20px" }}>© 2026 DHURO. Të gjitha të drejtat e rezervuara.</p>
        </footer>

      </main>
    </div>
  );
}
