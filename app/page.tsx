'use client'

import { useState } from 'react'

const wallet = 'GQPpQuxGHT2bAqAFzGjMYcpmEAnC58vWumS1rGwdBnrx'
const pixKey = 'radamez1228@gmail.com'
const whatsappUrl = 'https://wa.me/5567981251773'

function PaymentButton({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '56px', padding: '0 20px',
        borderRadius: '12px', textDecoration: 'none', fontWeight: 800, letterSpacing: '0.02em',
        color: secondary ? '#e8edf5' : '#07110d',
        background: secondary ? 'rgba(255,255,255,0.06)' : 'linear-gradient(135deg, #c8ff45, #71d66f)',
        border: secondary ? '1px solid rgba(255,255,255,0.14)' : '1px solid rgba(200,255,69,0.7)',
        boxShadow: secondary ? 'none' : '0 12px 28px rgba(113,214,111,0.18)',
      }}
    >{children}</a>
  )
}

export default function Page() {
  const [copied, setCopied] = useState(false)

  async function copyPix() {
    await navigator.clipboard.writeText(pixKey)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  return (
    <main style={{ minHeight: '100vh', background: '#07110d', color: '#f4f7f3', padding: '32px 18px', fontFamily: 'Arial, sans-serif' }}>
      <section style={{ maxWidth: '520px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#c8ff45', fontSize: '13px', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase' }}>
          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#c8ff45', boxShadow: '0 0 14px #c8ff45' }} /> Migração Relâmpago
        </div>
        <h1 style={{ fontSize: 'clamp(34px, 9vw, 58px)', lineHeight: 0.98, letterSpacing: '-0.06em', margin: '28px 0 16px', maxWidth: '460px' }}>Migre para Pyth sem complicação.</h1>
        <p style={{ color: '#aab8ae', fontSize: '17px', lineHeight: 1.55, margin: '0 0 28px' }}>Escolha a opção ideal e faça seu pagamento em poucos segundos.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <PaymentButton href={`solana:${wallet}?amount=3&label=Migracao%20Relampago`}>PAGAR 3 SOL — EU FAÇO PARA VOCÊ</PaymentButton>
          <PaymentButton href={`solana:${wallet}?amount=1&label=Migracao%20Relampago`} secondary>PAGAR 1 SOL — FAZER SOZINHO</PaymentButton>
          <PaymentButton href={whatsappUrl} secondary>FALAR NO WHATSAPP</PaymentButton>
        </div>

        <div style={{ marginTop: '34px', padding: '22px', borderRadius: '18px', background: 'rgba(255,255,255,0.045)', border: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ margin: '0 0 12px', color: '#aab8ae', fontSize: '12px', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}>Pagamento via Pix</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <code style={{ flex: 1, overflowWrap: 'anywhere', color: '#f4f7f3', fontSize: '15px' }}>{pixKey}</code>
            <button onClick={copyPix} aria-label="Copiar chave Pix" style={{ flexShrink: 0, border: '1px solid rgba(200,255,69,0.5)', color: '#c8ff45', background: 'transparent', borderRadius: '8px', padding: '9px 12px', cursor: 'pointer', fontWeight: 700 }}>{copied ? 'Copiado' : 'Copiar'}</button>
          </div>
        </div>

        <div style={{ marginTop: '18px', padding: '18px 22px', borderRadius: '18px', background: 'rgba(255,255,255,0.025)', border: '1px solid rgba(255,255,255,0.08)' }}>
          <p style={{ margin: '0 0 8px', color: '#aab8ae', fontSize: '12px', fontWeight: 800, letterSpacing: '0.13em', textTransform: 'uppercase' }}>Carteira Solana</p>
          <code style={{ display: 'block', overflowWrap: 'anywhere', color: '#dce8de', fontSize: '13px', lineHeight: 1.5 }}>{wallet}</code>
        </div>
        <p style={{ color: '#718078', fontSize: '12px', textAlign: 'center', marginTop: '28px' }}>Confira a carteira antes de confirmar a transação.</p>
      </section>
    </main>
  )
}
