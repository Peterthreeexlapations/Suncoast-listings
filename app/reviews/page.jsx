export const metadata = { title: "Reviews — Suncoast" };
const reviews = [
  {name:"Jasmine M.", text:"They texted us three homes the day they hit. We toured that weekend and made an offer on Monday.", img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2"},
  {name:"Diego R.", text:"New construction with a 2-1 buydown and closing credits. Exactly what we needed.", img:"https://images.unsplash.com/photo-1541534401786-9fffe10f2a5b"},
  {name:"Morgan K.", text:"Smooth process. We got alerts on price drops and never felt pressured.", img:"https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"},
  {name:"Evan L.", text:"Fast responses and legit local guidance. Highly recommend.", img:"https://images.unsplash.com/photo-1546961329-78bef0414d7e"}
];
export default function Reviews(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1" style={{fontSize:"clamp(28px,5vw,40px)"}}>Real Buyer Reviews</h1>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", marginTop:16}}>
          {reviews.map((r,i)=>(
            <div key={i} className="card" style={{padding:16}}>
              <div style={{display:'grid', gridTemplateColumns:'auto 1fr', gap:12}}>
                <img src={r.img+'?auto=format&fit=crop&w=200&q=60'} alt={r.name} style={{height:44,width:44,borderRadius:999,objectFit:'cover'}}/>
                <div>
                  <div style={{fontWeight:800}}>{r.name}</div>
                  <div style={{color:'#9fb0c9'}}>Verified buyer</div>
                </div>
              </div>
              <p style={{marginTop:8}}>"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}