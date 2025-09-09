import Link from "next/link";
export default function Nav(){
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <div className="logo">SL</div>
          <div>
            <div style={{fontWeight:900}}>Suncoast Home Lists</div>
            <div style={{color:"#9fb0c9", fontSize:12}}>Curated South Florida homes</div>
          </div>
        </Link>
        <div className="navlinks">
          <Link href="/listings">Listings</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="btn btn-outline">Contact</Link>
          <Link href="/#getlist" className="btn btn-primary">Get My List</Link>
        </div>
      </div>
    </nav>
  );
}