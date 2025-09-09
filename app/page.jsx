import LeadForm from "./components/LeadForm";
import Link from "next/link";
export default function Home(){
  return (
    <main>
      <section className="hero">
        <div className="container" style={{padding:"60px 0"}}>
          <div className="badge">Low down options • Builder credits • Same-day tours</div>
          <h1 className="h1" style={{marginTop:12}}>Daily list of South Florida homes under $750,000</h1>
          <p className="lead" style={{maxWidth:760}}>Tell us your budget, ZIPs, and must-haves. We’ll email curated homes and text you quickly if something perfect hits the market.</p>
          <div className="grid grid-2" style={{marginTop:28}}>
            <div className="card" style={{padding:16}}>
              <div className="grid grid-3">
                {['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85','https://images.unsplash.com/photo-1502005229762-cf1b2da7c52f','https://images.unsplash.com/photo-1494526585095-c41746248156'].map((src,i)=>(
                  <img key={i} src={src+'?auto=format&fit=crop&w=800&q=60'} alt="Home" style={{width:'100%',height:180,objectFit:'cover',borderRadius:12}}/>
                ))}
              </div>
              <div className="kpi" style={{marginTop:16}}>
                {[
                  {n:'2,100+',l:'buyers matched'},
                  {n:'48 hrs',l:'avg tour time'},
                  {n:'$18k',l:'avg seller credits'},
                  {n:'96%',l:'happy clients'}
                ].map((k,i)=>(
                  <div key={i} className="card" style={{padding:16, textAlign:'center'}}>
                    <div style={{fontWeight:900, fontSize:22}}>{k.n}</div>
                    <div style={{color:'#9fb0c9'}}>{k.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <LeadForm/>
          </div>
          <div style={{marginTop:18}}>
            <Link href="/listings" className="btn btn-outline">Browse example listings</Link>
            <Link href="/reviews" className="btn btn-primary" style={{marginLeft:12}}>See reviews</Link>
          </div>
        </div>
      </section>
    </main>
  );
}