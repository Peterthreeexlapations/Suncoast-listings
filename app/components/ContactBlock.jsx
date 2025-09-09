export default function ContactBlock(){
  return (
    <div className="card" style={{padding:16}}>
      <div className="h2">Call or Text Us</div>
      <p style={{fontSize:18, fontWeight:800, marginTop:6}}><a href="tel:+19547702500">(954) 770-2500</a></p>
      <p style={{color:'#9fb0c9'}}>We’re available Mon–Sat, 9am–7pm ET.</p>
    </div>
  );
}