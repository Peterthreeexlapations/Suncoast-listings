export const metadata = { title: "About — Suncoast" };
export default function About(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1" style={{fontSize:"clamp(28px,5vw,40px)"}}>About Suncoast</h1>
        <div className="card" style={{padding:18, marginTop:12}}>
          <p>We’re a South Florida home-search and marketing team that curates real, available listings based on your criteria. We highlight price drops, builder incentives, and tour-ready homes so you can move quickly and confidently.</p>
          <ul>
            <li>• Daily home lists tailored to your budget and must-haves</li>
            <li>• Optional lender intro for faster pre-approval</li>
            <li>• Friendly, no-pressure guidance and showings</li>
          </ul>
        </div>
      </div>
    </main>
  );
}