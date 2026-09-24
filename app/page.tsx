'use client'
import { useState } from 'react'
export default function Page(){
 const [pid,setPid]=useState('')
 const [feeds,setFeeds]=useState<any[]>([])
 return (
  <main style={{background:'radial-gradient(circle at top, #1a1a1a, #000)',color:'#f5d67b',minHeight:'100vh',padding:'40px 20px',fontFamily:'serif',textAlign:'center'}}>
   <div style={{border:'2px solid #d4af37',borderRadius:'16px',maxWidth:'600px',margin:'0 auto',padding:'30px',background:'rgba(0,0,0,0.8)',boxShadow:'0 0 30px rgba(212,175,55,0.3)'}}>
    <h1 style={{fontSize:'42px',margin:'0',color:'#ffd700'}}>Migração Relâmpago</h1>
    <p style={{color:'#fff',marginTop:'10px'}}>Switchboard desliga 25/09. Migre para Pyth em 1 clique.</p>
    <input value={pid} onChange={e=>setPid(e.target.value)} placeholder="Cole seu Program ID" style={{padding:'12px',width:'70%',borderRadius:'8px',border:'1px solid #d4af37',marginTop:'15px'}}/>
    <br/>
    <button onClick={()=>setFeeds([{s:'SOL/USD',p:'$143.82'},{s:'BONK/USD',p:'$0.00002841'},{s:'JUP/USD',p:'$0.91'}])} style={{marginTop:'15px',background:'linear-gradient(180deg,#ffd700,#b8860b)',border:'none',padding:'12px 30px',borderRadius:'8px',fontWeight:'bold',cursor:'pointer'}}>MIGRAR AGORA</button>
    <div style={{marginTop:'20px'}}>
     {feeds.map((f,i)=><div key={i} style={{background:'#111',border:'1px solid #d4af37',margin:'8px 0',padding:'10px',borderRadius:'8px',color:'#fff'}}>{f.s}: <b style={{color:'#ffd700'}}>{f.p}</b></div>)}
    </div>
   </div>
  </main>
 )
}
