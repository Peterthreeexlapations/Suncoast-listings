"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

const APPS_SCRIPT_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzV4DkMiUzWsaXFuyfbHpzJ5ys5VBkP-z-HgQHK5slN8stghcOanJ0I3kDrSnRMtQ/exec";

export default function LeadForm(){
  const router = useRouter();
  const [max, setMax] = useState(750000);
  const submitted = useRef(false);

  function onSubmit(){
    submitted.current = true; // we let the browser post to the iframe
    // give the iframe a moment to finish, then show thank-you
    setTimeout(()=>router.push("/thank-you"), 900);
  }

  return (
    <form
      action={APPS_SCRIPT_WEB_APP_URL}
      method="POST"
      target="hidden_iframe"
      onSubmit={onSubmit}
      className="card"
      style={{padding:16}}
      id="getlist"
    >
      <div style={{fontWeight:800, fontSize:18, marginBottom:6}}>Get your custom list</div>
      <div style={{color:"#9fb0c9", fontSize:13, marginBottom:12}}>We’ll email picks and text fast if something hot hits the market.</div>

      <div className="grid" style={{gridTemplateColumns:'repeat(auto-fit, minmax(180px,1fr))'}}>
        <div><label>First name</label><input className="input" required name="first_name" placeholder="Ava" /></div>
        <div><label>Last name</label><input className="input" required name="last_name" placeholder="Rivera" /></div>
        <div><label>Email</label><input className="input" type="email" required name="email" placeholder="you@email.com" /></div>
        <div><label>Mobile</label><input className="input" type="tel" required name="phone" placeholder="(954) 555-0199" /></div>
        <div><label>Target ZIP or area</label><input className="input" name="zip" placeholder="33431" /></div>
        <div>
          <label>Max price: ${max.toLocaleString()}</label>
          <input className="input" type="range" min={150000} max={50000000} step={5000} value={max} onChange={e=>setMax(parseInt(e.target.value))} name="max_price" />
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
        <div><label>Top 3 must-haves</label><input className="input" name="must_haves" placeholder="Garage, fenced yard, updated kitchen" /></div>
      </div>

      <button className="btn btn-primary" style={{width:'100%', marginTop:12}}>Send My List</button>
      <iframe name="hidden_iframe" style={{display:"none"}} />
    </form>
  );
}