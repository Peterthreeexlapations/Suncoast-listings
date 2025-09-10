"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

// Paste your Apps Script Web App URL here (must end with /exec)
const APPS_SCRIPT_WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbzKPS3FWKmd5lEP56Wg7voHgDWx0x2F0pnzs060hApgCTQOCOq8EqZ6OgkoX2-38DQ/exec";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container" style={{ padding: "60px 0" }}>
          <div className="badge">
            Low down options • Builder credits • Same-day tours
          </div>
          <h1 className="h1" style={{ marginTop: 12 }}>
            Daily list of South Florida homes under $25,000,000
          </h1>
          <p className="lead" style={{ maxWidth: 760 }}>
            Tell us your budget, ZIPs, and must-haves. We’ll email curated homes
            and text you quickly if something perfect hits the market.
          </p>

          <div className="grid grid-2" style={{ marginTop: 28 }}>
            {/* Left column: images + stats */}
            <div className="card" style={{ padding: 16 }}>
              <div className="grid grid-3">
                {[
                  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
                  "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=60",
                  "https://images.unsplash.com/photo-1494526585095-c41746248156",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src + "?auto=format&fit=crop&w=800&q=60"}
                    alt="Home"
                    style={{
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                      borderRadius: 12,
                    }}
                  />
                ))}
              </div>

              <div className="kpi" style={{ marginTop: 16 }}>
                {[
                  { n: "2,100+", l: "buyers matched" },
                  { n: "48 hrs", l: "avg tour time" },
                  { n: "$18k", l: "avg seller credits" },
                  { n: "96%", l: "happy clients" },
                ].map((k, i) => (
                  <div
                    key={i}
                    className="card"
                    style={{ padding: 16, textAlign: "center" }}
                  >
                    <div style={{ fontWeight: 900, fontSize: 22 }}>{k.n}</div>
                    <div style={{ color: "#9fb0c9" }}>{k.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: form */}
            <LeadForm />
          </div>

          <div style={{ marginTop: 18 }}>
            <Link href="/listings" className="btn btn-outline">
              Browse example listings
            </Link>
            <Link
              href="/reviews"
              className="btn btn-primary"
              style={{ marginLeft: 12 }}
            >
              See reviews
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// === Form component (merged here for simplicity) ===
function LeadForm() {
  const router = useRouter();
  const [max, setMax] = useState(25000000);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const body = new URLSearchParams();
    for (const [k, v] of fd.entries()) body.append(k, v);

    try {
      fetch(APPS_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body,
      });
    } catch (_) {
      // ignore errors (no-cors won’t give us a response)
    }

    router.push("/thank-you");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="card"
      style={{ padding: 16 }}
      id="getlist"
    >
      <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>
        Get your custom list
      </div>
      <div style={{ color: "#9fb0c9", fontSize: 13, marginBottom: 12 }}>
        We’ll email picks and text fast if something hot hits the market.
      </div>

      <div
        className="grid"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))",
          gap: 12,
        }}
      >
        <div>
          <label>First name</label>
          <input className="input" required name="first_name" placeholder="Ava" />
        </div>
        <div>
          <label>Last name</label>
          <input className="input" required name="last_name" placeholder="Rivera" />
        </div>
        <div>
          <label>Email</label>
          <input
            className="input"
            type="email"
            required
            name="email"
            placeholder="you@email.com"
          />
        </div>
        <div>
          <label>Mobile</label>
          <input
            className="input"
            type="tel"
            required
            name="phone"
            placeholder="(954) 555-0199"
          />
        </div>
        <div>
          <label>Target ZIP or area</label>
          <input className="input" name="zip" placeholder="33431" />
        </div>
        <div>
          <label>Max price: ${max.toLocaleString()}</label>
          <input
            className="input"
            type="range"
            min={150000}
            max={25000000}
            step={5000}
            value={max}
            onChange={(e) => setMax(parseInt(e.target.value))}
            name="max_price"
          />
        </div>
        <div>
          <label>Move-in time</label>
          <select className="input" name="timeline">
            <option value="0-3">0–3 months</option>
            <option value="3-6">3–6 months</option>
            <option value="6-12">6–12 months</option>
            <option value=">12">12+ months</option>
          </select>
        </div>
        <div>
          <label>Top 3 must-haves</label>
          <input
            className="input"
            name="must_haves"
            placeholder="Garage, fenced yard, updated kitchen"
          />
        </div>
      </div>

      <button
        className="btn btn-primary"
        style={{ width: "100%", marginTop: 12 }}
        disabled={submitting}
      >
        {submitting ? "Sending…" : "Send My List"}
      </button>
    </form>
  );
}
