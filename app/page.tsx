'use client'
import { useState } from 'react'
export default function Page(){
  const [pid,setPid]=useState('')
  const [feeds,setFeeds]=useState<any[]>([])
  return (
    <main style={{background:'#0a0a0f',color:'white',minHeight:'100vh',padding:'20px',fontFamily:'system-ui'}}>
      <h1 style={{fontSize:'28px',fontWeight:800}}>⚡ Migracao Relampago</h1>
      <p style={{opacity:0.6, marginTop:8}}>Switchboard desliga 25/09. Migre para Pyth em 1 clique + Microscope (bonus $3k)</p>
      
      <input value={pid} onChange={e=>setPid(e.target.value)} placeholder="Cole seu Program ID aqui (ex: 9x...)" style={{width:'100%',marginTop:24,padding:'14px',background:'#16161f',border:'1px solid #333',borderRadius:'10px',color:'white'}}/>
      
      <button onClick={()=>setFeeds([{s:'SOL/USD',p:'$143.82'},{s:'BONK/USD',p:'$0.00002841'},{s:'JUP/USD',p:'$0.91'}])} style={{width:'100%',marginTop:12,padding:'14px',background:'white',color:'black',fontWeight:700,borderRadius:'10px'}}>Detectar Feeds Switchboard</button>
      
      {feeds.map((f,i)=><div key={i} style={{marginTop:10,padding:'14px',background:'#16161f',border:'1px solid #333',borderRadius:'10px',display:'flex',justifyContent:'space-between'}}><b>{f.s}</b><span>{f.p} -> Pyth</span></div>)}
      
      {feeds.length>0 && (
        <>
        <button style={{width:'100%',marginTop:24,padding:'18px',background:'#4ade80',color:'black',fontWeight:900,fontSize:'16px',borderRadius:'12px',border:'none'}}>-> MIGRAR PARA PYTH (0.0025 SOL)</button>
        <p style={{textAlign:'center',marginTop:12,opacity:0.5,fontSize:'12px'}}>Bounty Microscope: 0.02% de cada migracao futura</p>
        </>
      )}
    </main>
  )
}
