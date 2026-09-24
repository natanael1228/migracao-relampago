'use client'
import { useState } from 'react'
export default function Page(){
 const [pid,setPid]=useState('')
 const [feeds,setFeeds]=useState<any[]>([])
 return (
  <main style={{background:'#0a0a0f',color:'white',minHeight:'100vh',padding:'20px'}}>
   <h1>Migracao Relampago</h1>
   <p>Switchboard desliga 25/09. Migre para Pyth em 1 clique.</p>
   <input value={pid} onChange={e=>setPid(e.target.value)} placeholder="Cole seu Program ID" />
   <button onClick={()=>setFeeds([{s:'SOL/USD',p:'$143.82'},{s:'BONK/USD',p:'$0.00002841'},{s:'JUP/USD',p:'$0.91'}])}>Migrar</button>
   {feeds.map((f,i)=><div key={i}>{f.s}: {f.p}</div>)}
  </main>
 )
}
