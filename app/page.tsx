export default function Home() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", background: "#F7F5F0", minHeight: "100vh", padding: "16px" }}>
      
      {/* HEADER */}
      <div style={{ maxWidth: "1150px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 4px" }}>
        <div style={{ fontWeight: "800", fontSize: "22px", color: "#2F3D33" }}>DHURO</div>
        <div style={{ display: "flex", gap: "10px" }}>
          <a href="/browse" style={{ textDecoration: "none", color: "#2F3D33", fontWeight: "600", padding: "8px 14px" }}>Shiko Sendet</a>
          <a href="/browse" style={{ textDecoration: "none", background: "#2F3D33", color: "white", fontWeight: "700", padding: "8px 16px", borderRadius: "999px" }}>Fillo Shkëmbimin</a>
        </div>
      </div>

      {/* HERO - PJESA E GJELBËR */}
      <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
        <div style={{ marginTop: "22px", background: "linear-gradient(180deg, #A7B8A0, #78927D)", borderRadius: "24px", padding: "36px 22px", color: "white", textAlign: "center" }}>
          <h1 style={{ fontSize: "42px", lineHeight: "1.1", fontWeight: "800", margin: "0" }}>
            Mirësevini te DHURO
          </h1>

          <p style={{ fontSize: "17px", lineHeight: "1.5", margin: "14px auto 22px", maxWidth: "520px", opacity: "0.95" }}>
            Jep atë që nuk të duhet. Merr atë që të duhet.
          </p>

          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/browse" style={{ background: "white", color: "#2F3D33", padding: "12px 20px", borderRadius: "999px", fontWeight: "700", textDecoration: "none" }}>
              Fillo Shkëmbimin
            </a>
            <a href="/browse" style={{ background: "rgba(255,255,255,0.2)", color: "white", padding: "12px 20px", borderRadius: "999px", fontWeight: "700", textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}>
              Shiko Sendet
            </a>
          </div>
        </div>

        {/* KARTAT POSHTË */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", marginTop: "20px", paddingBottom: "30px" }}>
          <div style={{ background: "white", borderRadius: "18px", padding: "20px" }}>
            <div style={{ fontSize: "26px" }}>🤲</div>
            <h3 style={{ margin: "10px 0 6px", color: "#2F3D33" }}>Duart që Ndihmojnë</h3>
            <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>Ofro një buzëqeshje, dhuro diçka të vogël, ose ndaj kohën tënde.</p>
          </div>

          <div style={{ background: "white", borderRadius: "18px", padding: "20px" }}>
            <div style={{ fontSize: "26px" }}>🔄</div>
            <h3 style={{ margin: "10px 0 6px", color: "#2F3D33" }}>Shkëmbe Lehtë</h3>
            <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>Posto atë që nuk të duhet dhe gjej atë që të duhet pranë teje.</p>
          </div>

          <div style={{ background: "white", borderRadius: "18px", padding: "20px" }}>
            <div style={{ fontSize: "26px" }}>🌱</div>
            <h3 style={{ margin: "10px 0 6px", color: "#2F3D33" }}>Më Pak Mbeturina</h3>
            <p style={{ margin: "0", color: "#666", lineHeight: "1.5" }}>Çdo send që ripërdoret është një send më pak që hidhet.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
