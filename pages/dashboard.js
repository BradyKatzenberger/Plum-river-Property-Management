import Link from 'next/link'

export default function Dashboard() {
  return (
    <div style={{ background:'#0d0f0f', color:'#f0f0ee', minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', gap:16, fontFamily:'sans-serif' }}>
      <div style={{ fontSize:48 }}>🌊</div>
      <div style={{ fontSize:28, fontWeight:700, letterSpacing:2 }}>PLUMRIVER</div>
      <div style={{ color:'rgba(255,255,255,0.5)', fontSize:14 }}>Owner portal — coming soon</div>
      <Link href="/">
        <button style={{ marginTop:16, padding:'10px 24px', background:'#e8c547', color:'#0d0f0f', border:'none', borderRadius:8, fontWeight:700, cursor:'pointer', fontSize:14 }}>
          ← Back to Home
        </button>
      </Link>
    </div>
  )
}
