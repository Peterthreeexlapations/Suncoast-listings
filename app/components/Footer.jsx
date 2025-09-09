export default function Footer(){
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div style={{fontWeight:800}}>Suncoast Home Lists</div>
          <div style={{maxWidth:520}}>We send hand-picked South Florida homes, price drops, and new construction incentives. No spam.</div>
        </div>
        <div style={{fontSize:13}}>© {new Date().getFullYear()} Suncoast. Equal Housing Opportunity.</div>
      </div>
    </footer>
  );
}