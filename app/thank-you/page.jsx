import Link from "next/link";
export const metadata = { title: "Thank You — Suncoast" };
export default function ThankYou(){
  return (
    <main className="section">
      <div className="container" style={{textAlign:"center"}}>
        <div className="card" style={{padding:24, maxWidth:640, margin:"0 auto"}}>
          <div style={{display:"inline-grid", placeItems:"center", height:60, width:60, borderRadius:999, background:"#22c55e", color:"#0b1220", fontWeight:900, fontSize:28}}>✓</div>
          <h1 className="h1" style={{fontSize:"clamp(26px,5vw,36px)", marginTop:12}}>Request received!</h1>
          <p className="lead">We’re building your list now. You’ll get an email shortly—and we’ll text quickly if something urgent fits your criteria.</p>
          <div style={{marginTop:12}}>
            <Link href="/listings" className="btn btn-outline">View example listings</Link>
            <Link href="/" className="btn btn-primary" style={{marginLeft:12}}>Back to Home</Link>
          </div>
        </div>
      </div>
    </main>
  );
}