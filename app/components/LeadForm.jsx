"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

// Paste your Apps Script Web App URL (must end with /exec)
const APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycby3KbAUirTpUSxMCphphmsHJ5GLiPL9i-5fxkQ2mvUOrO6NHCCvq2N0EHipeJ6CYtU/exec";

export default function LeadForm() {
  const router = useRouter();
  const [max, setMax] = useState(50000000);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setSubmitting(true);

    // Build form payload
    const fd = new FormData(e.currentTarget);
    // Convert to URL-encoded body (works great with Apps Script doPost)
    const body = new URLSearchParams();
    for (const [k, v] of fd.entries()) body.append(k, v);

    // Fire-and-forget (no-cors): request is sent, we don't await a readable response
    try {
      fetch(APPS_SCRIPT_WEB_APP_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body
      });
    } catch (_) {
      // even if network read fails, the no-cors request likely went through
    }

    // Navigate to thank-you immediately
    router.push("/thank-you");
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{ padding: 16 }} id="getlist">
      <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 6 }}>Get your custom list</div>
      <div style={{ color: "#9fb0c9", fontSize: 13, marginBottom: 12 }}>
        We’ll email picks and text fast if something hot hits the market.
      </div>

      <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12 }}>
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
          <input className="input" type="email" required name="email" placeholder="you@email.com" />
        </div>
        <div>
          <label>Mobile</label>
          <input className="input" type="tel" required name="phone" placeholder="(954) 555-0199" />
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
            max={50000000}
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
          <input className="input" name="must_haves" placeholder="Garage, fenced yard, updated kitchen" />
        </div>
      </div>

      <button className="btn btn-primary" style={{ width: "100%", marginTop: 12 }} disabled={submitting}>
        {submitting ? "Sending…" : "Send My List"}
      </button>
    </form>
  );
}
