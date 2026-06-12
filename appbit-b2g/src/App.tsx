import { useState } from 'react'
import { MapPin, ShieldAlert, Briefcase, GraduationCap } from 'lucide-react'
import MapaVisent from './components/MapaVisent'
import ChatIA from './components/ChatIA'

interface Mensagem {
  id: number;
  autor: 'usuario' | 'ia';
  texto: string;
}
export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#0f172a', // Fundo azul escuro combinando com o mapa
      color: '#fff', 
      fontFamily: 'sans-serif', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      
      {/* 1. CABEÇALHO DO SITE & MENU */}
      <header style={{ padding: '20px', borderBottom: '1px solid #1e293b', backgroundColor: '#1e293b' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold', color: '#38bdf8' }}>
            Aplicativo BiT — B2G
          </h1>
          <span style={{ fontSize: '12px', backgroundColor: '#0284c7', padding: '4px 8px', borderRadius: '4px', fontWeight: 'bold' }}>
            PROTÓTIPO MVP
          </span>
        </div>

        {/* Links do Menu */}
        <nav style={{ display: 'flex', gap: '20px', fontSize: '14px' }}>
          <span style={{ color: '#94a3b8', cursor: 'pointer' }}>Formações</span>
          <span style={{ color: '#38bdf8', fontWeight: 'bold', borderBottom: '2px solid #38bdf8', paddingBottom: '4px', cursor: 'pointer' }}>Empregabilidade</span>
          <span style={{ color: '#94a3b8', cursor: 'pointer' }}>Iniciativas Sociais</span>
          <span style={{ color: '#94a3b8', cursor: 'pointer' }}>Saúde Mental</span>
        </nav>
      </header>

      {/* 2. PAINEL DE INDICADORES (O que estava pendente agora vira destaque!) */}
      <section style={{ padding: '20px', backgroundColor: '#111827' }}>
        <div style={{ marginBottom: '5px' }}>
          <span style={{ fontSize: '12px', color: '#94a3b8', textTransform: 'uppercase', tracking: 'wide' }}>
            Painel de Dados Públicos — Visent CDRView
          </span>
=======
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', margin: 0, overflow: 'hidden' }}>
      
      {/* Barra Lateral de Navegação (Módulos do MVP) */}
      <aside style={{ width: '260px', backgroundColor: '#1e293b', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '1px solid #334155' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '20px' }}>App BiT — B2G</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer', color: '#94a3b8' }}>
            <GraduationCap size={20} /> <span>Formações</span>
          </div>
          {/* 🔥 Empregabilidade agora marcada como o módulo ativo do MVP */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', backgroundColor: '#334155', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            <Briefcase size={20} /> <span>Empregabilidade</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer', color: '#94a3b8' }}>
            <MapPin size={20} /> <span>Iniciativas Sociais</span>
          </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
          <div>
            <h2 style={{ margin: '0 0 5px 0', fontSize: '20px' }}>Monitoramento do Eixo Sudeste</h2>
            <p style={{ margin: 0, fontSize: '14px', color: '#94a3b8' }}>
              Análise cruzada de conectividade e vulnerabilidade social.
            </p>
          </div>

          {/* Cards com as regras do MVP cumpridas */}
          <div style={{ display: 'flex', gap: '15px' }}>
            <div style={{ backgroundColor: '#1e293b', padding: '10px 15px', borderRadius: '6px', borderLeft: '4px solid #38bdf8' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Regiões Incluídas</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold' }}>2 Analisadas (SP / RJ)</div>
            </div>
            
            <div style={{ backgroundColor: '#1e293b', padding: '10px 15px', borderRadius: '6px', borderLeft: '4px solid #22c55e' }}>
              <div style={{ fontSize: '11px', color: '#94a3b8' }}>Indicador Ativo</div>
              <div style={{ fontSize: '16px', fontWeight: 'bold', color: '#22c55e' }}>Índice de Empregabilidade</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. ÁREA PRINCIPAL DO PROTÓTIPO */}
      <main style={{ flex: 1, padding: '20px', backgroundColor: '#0f172a', display: 'flex', gap: '20px', height: '600px' }}>
        
        {/* Chat de IA na Esquerda */}
        <ChatIA />

        {/* Mapa na Direita */}
        <div style={{ flex: 1, borderRadius: '8px', overflow: 'hidden', border: '1px solid #1e293b' }}>
          <MapaVisent />
        </div>
      </main>

    </div>
  )
}
