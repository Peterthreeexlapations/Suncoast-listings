export const metadata = { title: "Listings — Suncoast" };
export default function Listings(){
  const items = [
    {img:"https://images.unsplash.com/photo-1564013799919-ab600027ffc6", title:"Sunny Isles Townhome", price:"$589,000", beds:"3", baths:"2.5", desc:"Garage • updated kitchen • low HOA"},
    {img:"https://images.unsplash.com/photo-1507089947368-19c1da9775ae", title:"Boca Raton Pool Home", price:"$729,000", beds:"4", baths:"3", desc:"Fenced yard • new roof • A-rated schools"},
    {img:"https://images.unsplash.com/photo-1515263487990-61b07816b324", title:"Fort Lauderdale New Build", price:"$645,000", beds:"3", baths:"2", desc:"Builder credits • 2-1 buydown eligible"},
    {img:"https://images.unsplash.com/photo-1523217582562-09d0def993a6", title:"Delray Beach Condo", price:"$349,000", beds:"2", baths:"2", desc:"FHA-friendly • walk to Atlantic Ave"}
  ];
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1" style={{fontSize:"clamp(28px,5vw,40px)"}}>Example Listings</h1>
        <p className="lead">Real listings change constantly. These examples show the look and feel you can expect in your inbox.</p>
        <div className="grid" style={{gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", marginTop:16}}>
          {items.map((x,i)=>(
            <div key={i} className="card" style={{padding:12}}>
              <img src={x.img+'?auto=format&fit=crop&w=900&q=60'} alt={x.title} style={{width:"100%",height:180,objectFit:"cover", borderRadius:12}}/>
              <div style={{fontWeight:800, marginTop:8}}>{x.title}</div>
              <div style={{color:"#9fb0c9"}}>{x.beds} bd • {x.baths} ba</div>
              <div style={{fontWeight:900, marginTop:4}}>{x.price}</div>
              <div style={{color:"#9fb0c9", marginTop:4}}>{x.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}