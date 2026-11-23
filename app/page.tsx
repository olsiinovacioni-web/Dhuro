"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [search, setSearch] = useState("");

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", background: "#F7F7F2", minHeight: "100vh", color: "#2F3D33" }}>

      {/* HEADER */}
      <header style={{ background: "white", padding: "12px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid #eee" }}>
        <Link href="/" style={{ textDecoration: "none", color: "#2F3D33", fontWeight: "800", fontSize: "22px", display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ background: "#8A9E84", color: "white", width: "32px", height: "32px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center" }}>⇄</span>
          DHURO
        </Link>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <span style={{ fontSize: "20px" }}>♡</span>
          <span style={{ fontSize: "20px" }}>🔔</span>
          <span style={{ fontSize: "20px" }}>👤</span>
          <Link href="/add" style={{ background: "#8A9E84", color: "white", padding: "8px 14px", borderRadius: "999px", textDecoration: "none", fontWeight: "700", fontSize: "14px" }}>+ Shto</Link>
        </div>
      </header>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "14px 14px 40px" }}>

        {/* SEARCH */}
        <div style={{ background: "white", borderRadius: "999px", padding: "10px 16px", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" }}>
          <span>🔍</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Kërko për sende, vegla, rroba..."
            style={{ border: "none", outline: "none", width: "100%", fontSize: "15px" }}
          />
        </div>

        {/* KATEGORITË */}
        <div style={{ display: "flex", gap: "8px", marginTop: "14px", overflowX: "auto", paddingBottom: "4px", whiteSpace: "nowrap" }}>
          {["Të Gjitha", "Vegla", "Elektronikë", "Rroba", "Libra", "Shtëpi"].map((c, i) => (
            <span key={c} style={{ background: i === 0 ? "#2F3D33" : "white", color: i === 0 ? "white" : "#2F3D33", padding: "8px 14px", borderRadius: "999px", fontSize: "14px", fontWeight: "600" }}>{c}</span>
          ))}
        </div>

        {/* HERO - SI ISHTE, ME SHPORTË */}
        <div style={{ marginTop: "22px", background: "linear-gradient(180deg, #A7B8A0, #78927D)", borderRadius: "24px", padding: "36px 22px 0px", color: "white", textAlign: "center", overflow: "hidden" }}>
          <h1 style={{ fontSize: "42px", lineHeight: "1.1", fontWeight: "800", margin: "0" }}>
            Mirësevini te DHURO
          </h1>
          <p style={{ fontSize: "17px", lineHeight: "1.5", margin: "14px auto 22px", maxWidth: "520px", opacity: "0.95" }}>
            Jep atë që nuk të duhet. Merr atë që të duhet.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "24px" }}>
            <Link href="/browse" style={{ background: "white", color: "#2F3D33", padding: "12px 20px", borderRadius: "999px", fontWeight: "700", textDecoration: "none" }}>Fillo Shkëmbimin</Link>
            <Link href="/browse" style={{ background: "rgba(255,255,255,0.2)", color: "white", padding: "12px 20px", borderRadius: "999px", fontWeight: "700", textDecoration: "none", border: "1px solid rgba(255,255,255,0.4)" }}>Shiko Sendet</Link>
          </div>
          <img src="/basket.png" alt="Shporta DHURO" style={{ width: "100%", maxWidth: "500px", borderRadius: "16px 16px 0 0", display: "block", margin: "0 auto" }} />
        </div>

        {/* KARTA - DUART QË NDIHMOJNË */}
        <div style={{ background: "white", borderRadius: "20px", padding: "20px", marginTop: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <div style={{ display: "flex", gap: "14px", alignItems: "flex-start" }}>
            <span style={{ fontSize: "28px" }}>🤲</span>
            <div>
              <h3 style={{ margin: "0", fontSize: "18px", fontWeight: "800" }}>Duart që Ndihmojnë</h3>
              <p style={{ margin: "6px 0 0", fontSize: "14px", lineHeight: "1.5", color: "#666" }}>Jep, merr dhe ndihmo komunitetin të rritet së bashku. Çdo send i dhuruar është një buzëqeshje e re.</p>
              <span style={{ display: "inline-block", marginTop: "12px", color: "#5B735F", fontWeight: "700", fontSize: "14px" }}>Mëso Më Shumë →</span>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginTop: "14px" }}>
          <div style={{ background: "white", borderRadius: "20px", padding: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <span style={{ fontSize: "26px" }}>🌱</span>
            <h4 style={{ margin: "10px 0 4px", fontWeight: "800" }}>Më Pak Mbeturina</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: "1.5" }}>Jepi jetë të dytë sendeve të tua të papërdorura.</p>
          </div>
          <div style={{ background: "white", borderRadius: "20px", padding: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
            <span style={{ fontSize: "26px" }}>👥</span>
            <h4 style={{ margin: "10px 0 4px", fontWeight: "800" }}>Komunitet i Fortë</h4>
            <p style={{ margin: 0, fontSize: "13px", color: "#666", lineHeight: "1.5" }}>Njihe fqinjin tënd dhe ndërto besim.</p>
          </div>
        </div>

        {/* SI FUNKSIONON */}
        <div style={{ background: "white", borderRadius: "20px", padding: "22px", marginTop: "18px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
          <h3 style={{ margin: "0 0 16px", fontSize: "20px", fontWeight: "800" }}>Si Funksionon?</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ background: "#EAF0E8", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", flexShrink: 0 }}>1</span>
              <div><b>Listo Sendin</b><p style={{ margin: 0, fontSize: "13px", color: "#666" }}>Fotografo dhe ngarko atë që nuk të duhet.</p></div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ background: "#EAF0E8", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", flexShrink: 0 }}>2</span>
              <div><b>Lidhu me Fqinjin</b><p style={{ margin: 0, fontSize: "13px", color: "#666" }}>Gjej dikë pranë teje që ka nevojë për të.</p></div>
            </div>
            <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
              <span style={{ background: "#EAF0E8", width: "36px", height: "36px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "800", flexShrink: 0 }}>3</span>
              <div><b>Shkëmbe & Gëzohu</b><p style={{ margin: 0, fontSize: "13px", color: "#666" }}>Takohuni, shkëmbeni dhe buzëqeshni.</p></div>
            </div>
          </div>
        </div>

        {/* GATI TË FILLOSH */}
        <div style={{ background: "#2F3D33", borderRadius: "24px", padding: "28px 20px", marginTop: "18px", color: "white", textAlign: "center" }}>
          <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "800" }}>Gati të Fillosh?</h3>
          <p style={{ fontSize: "14px", opacity: "0.85", margin: "10px 0 18px" }}>Bashkohu me qindra fqinjë që shkëmbejnë çdo ditë.</p>
          <Link href="/browse" style={{ background: "white", color: "#2F3D33", padding: "12px 22px", borderRadius: "999px", fontWeight: "800", textDecoration: "none", display: "inline-block" }}>Shiko Sendet Tani</Link>
        </div>

        {/* FOOTER */}
        <footer style={{ marginTop: "30px", padding: "10px 4px", color: "#666", fontSize: "14px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", fontWeight: "800", color: "#2F3D33", fontSize: "18px" }}>
            <span style={{ background: "#8A9E84", color: "white", width: "28px", height: "28px", borderRadius: "7px", display: "flex", alignItems: "center", justifyContent: "center" }}>⇄</span> DHURO
          </div>
          <p style={{ lineHeight: "1.6" }}>Ndërto komunitetin duke shkëmbyer atë që nuk të duhet me atë që të duhet.</p>
          <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
            <div><b style={{ color: "#2F3D33" }}>Veglat</b><p style={{ margin: "6px 0" }}>About<br />Browse<br />Shto Sendin</p></div>
            <div><b style={{ color: "#2F3D33" }}>Ndihmë</b><p style={{ margin: "6px 0" }}>Si Funksionon<br />Kontakti<br />Rregullat</p></div>
          </div>
          <p style={{ textAlign: "center", marginTop: "20px", fontSize: "12px" }}>© 2026 DHURO. Të gjitha të drejtat e rezervuara.</p>
        </footer>

      </main>
    </div>
  );
}
