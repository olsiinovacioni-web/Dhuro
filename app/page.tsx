"use client";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", padding: "20px", background: "#fff7f0", minHeight: "100vh" }}>
      
      {/* MENU */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "900px", margin: "0 auto" }}>
        <h1 onClick={() => setPage("home")} style={{ cursor: "pointer" }}>DHURO</h1>
        <nav style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button onClick={() => setPage("home")}>Kryefaqja</button>
          <button onClick={() => setPage("dhuro")}>Dhuro</button>
          <button onClick={() => setPage("kerko")}>Kërko</button>
          <button onClick={() => setPage("humanitare")}>Humanitare</button>
          <button onClick={() => setPage("kontakt")}>Kontakt</button>
        </nav>
      </header>

      {page === "home" && (
        <>
          {/* 1. HERO */}
          <div style={{ marginTop: "40px" }}>
            <h2 style={{ fontSize: "38px" }}>Një dhuratë e vogël, një buzëqeshje e madhe.</h2>
            <p style={{ fontSize: "18px", color: "#555" }}>Dhuro është komunitet solidar. Ne dhurojmë për njëri-tjetrin, falënderojmë dhe ndajmë dashuri.</p>
            <button onClick={() => setPage("dhuro")} style={{ background: "#ff5a5a", color: "white", border: "none", padding: "14px 28px", borderRadius: "10px", fontSize: "18px", cursor: "pointer" }}>Dhuro Sot</button>
          </div>

          {/* 2. 3 MENYRAT SOLIDARE */}
          <div style={{ display: "flex", gap: "20px", justifyContent: "center", marginTop: "40px", flexWrap: "wrap" }}>
            <div style={{ background: "white", padding: "30px", borderRadius: "20px", width: "250px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <h3>DHURO</h3>
              <p>Jep një buqetë për dikë që do. Për ditëlindje, falënderim, ose pa arsye.</p>
              <button onClick={() => setPage("dhuro")} style={{ background: "#ff5a5a", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px", cursor: "pointer" }}>Dhuro</button>
            </div>
            <div style={{ background: "white", padding: "30px", borderRadius: "20px", width: "250px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <h3>KËRKO</h3>
              <p>Kërko atë që të duhet. Na thuaj çfarë ke në mendje, komuniteti të ndihmon.</p>
              <button onClick={() => setPage("kerko")} style={{ background: "#ff5a5a", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px", cursor: "pointer" }}>Kërko</button>
            </div>
            <div style={{ background: "white", padding: "30px", borderRadius: "20px", width: "250px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}>
              <h3>FALËNDERO</h3>
              <p>Falëndero dikë që të bëri të buzëqeshësh. Falënderimi mban gjallë solidaritetin.</p>
              <button onClick={() => setPage("kontakt")} style={{ background: "#ff5a5a", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px", cursor: "pointer" }}>Falëndero</button>
            </div>
          </div>

          {/* 3. DRITARJA HUMANITARE */}
          <div style={{ background: "#fff0e0", padding: "30px", borderRadius: "20px", maxWidth: "800px", margin: "40px auto" }}>
            <h2>🤲 Dritarja e Mirësisë - Humanitare</h2>
            <p>Mund të dhurosh edhe për dikë që nuk njeh: një gjyshe të vetmuar, një fëmijë në spital, një familje në nevojë.</p>
            <p>Jo detyrim. Vetëm kush ka zemër.</p>
            <button onClick={() => setPage("humanitare")} style={{ background: "#ff8a00", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px", cursor: "pointer" }}>Dhuro për Mirësi</button>
          </div>

          {/* 4. HISTORI */}
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
            <h2 style={{ textAlign: "center" }}>Histori nga Komuniteti</h2>
            <p><b>Ana:</b> "I dhurova buqetë gjyshes sime pas 1 viti. Qau nga gëzimi."</p>
            <p><b>Erioni:</b> "Kërkova një buqetë për mamin. Komuniteti më ndihmoi."</p>
            <p><b>Sara:</b> "Falënderoj dikë që më dhuroi pa më njohur."</p>
          </div>

          {/* 5. SI FUNKSIONON */}
          <div style={{ marginTop: "40px" }}>
            <h2>Si Funksionon?</h2>
            <p><b>1.</b> Zgjidh kë do të bësh të lumtur</p>
            <p><b>2.</b> Na shkruaj në WhatsApp / Instagram</p>
            <p><b>3.</b> Ne e përgatisim dhe e çojmë me dashuri</p>
          </div>
        </>
      )}

      {page === "dhuro" && (
        <div style={{ marginTop: "40px" }}>
          <h2>Dhuro</h2>
          <p>Zgjidh për kë po dhuron, ne e bëjmë buqetën për ty me lule të freskëta dhe kartolinë.</p>
          <button style={{ background: "#ff5a5a", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px" }}>Na Shkruaj në WhatsApp</button>
        </div>
      )}

      {page === "kerko" && (
        <div style={{ marginTop: "40px" }}>
          <h2>Kërko / Porosit</h2>
          <p>Na thuaj: Për kë është? Çfarë occasioni? Çfarë buxheti?</p>
          <button style={{ background: "#ff5a5a", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px" }}>Porosit Tani</button>
        </div>
      )}

      {page === "humanitare" && (
        <div style={{ marginTop: "40px", maxWidth: "600px", marginLeft: "auto", marginRight: "auto" }}>
          <h2>Dritarja e Mirësisë</h2>
          <p>Kjo është dritarja humanitare e Dhuro.</p>
          <p>Mund të dhurosh për:</p>
          <p>- Një gjyshe të vetmuar</p>
          <p>- Një fëmijë në spital</p>
          <p>- Një familje në nevojë</p>
          <p>Ne e çojmë në emrin tënd, ose anonim nëse do.</p>
          <button style={{ background: "#ff8a00", color: "white", border: "none", padding: "12px 20px", borderRadius: "10px" }}>Dhuro për Mirësi</button>
        </div>
      )}

      {page === "kontakt" && (
        <div style={{ marginTop: "40px" }}>
          <h2>Kontakt</h2>
          <p>Instagram: @dhuro.al</p>
          <p>WhatsApp: Na shkruaj për porosi</p>
          <p>Tiranë, Shqipëri</p>
        </div>
      )}

      <footer style={{ marginTop: "60px", color: "#888" }}>
        <p>© 2026 DHURO - Komunitet Solidar</p>
      </footer>
    </div>
  );
}
