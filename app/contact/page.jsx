import ContactBlock from "../components/ContactBlock";
export const metadata = { title: "Contact — Suncoast" };
export default function Contact(){
  return (
    <main className="section">
      <div className="container">
        <h1 className="h1" style={{fontSize:"clamp(28px,5vw,40px)"}}>Contact Us</h1>
        <div className="grid grid-2" style={{marginTop:16}}>
          <ContactBlock/>
          <div className="card" style={{padding:16}}>
            <div className="h2">Text for Faster Replies</div>
            <p style={{color:'#9fb0c9'}}>Send your name and question(s) by text and we’ll reply.</p>
            <a className="btn btn-primary" href="sms:+19547702500">Text (954) 770-2500</a>
          </div>
        </div>
      </div>
    </main>
  );
}
