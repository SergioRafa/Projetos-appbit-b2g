import { MapPin, ShieldAlert, Briefcase, GraduationCap, MessagesSquare } from 'lucide-react'
import MapaVisent from './components/MapaVisent'

// Layout Base do Painel B2G
export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', margin: 0 }}>
      
      {/* Barra Lateral de Navegação (Módulos do MVP) */}
      <aside style={{ width: '260px', backgroundColor: '#1e293b', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '1px solid #334155' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '20px' }}>App BiT — B2G</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', backgroundColor: '#334155', cursor: 'pointer' }}>
            <GraduationCap size={20} /> <span>Formações</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
            <Briefcase size={20} /> <span>Empregabilidade</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
            <MapPin size={20} /> <span>Iniciativas Sociais</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer' }}>
            <ShieldAlert size={20} /> <span>Saúde Mental</span>
          </div>
        </nav>
        
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #334155', paddingTop: '10px' }}>
          Região Metropolitana de Florianópolis
        </div>
      </aside>

      {/* Área Principal (Mapa + IA) */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* Topbar */}
        <header style={{ height: '60px', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid #334155' }}>
          <h1 style={{ fontSize: '1rem', fontWeight: '500' }}>Painel de Dados Públicos — Vísent CDRView</h1>
        </header>

        {/* Espaço onde o Mapa vai morar */}
<div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
  <MapaVisent />
</div>

        {/* Barra de Consulta com IA */}
        <div style={{ padding: '20px', backgroundColor: '#1e293b', borderTop: '1px solid #334155', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <MessagesSquare style={{ color: '#38bdf8' }} />
          <input 
            type="text" 
            placeholder="Pergunte à IA: 'Onde há concentração de pessoas com cobertura de rede precária?'" 
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', outline: 'none' }}
          />
          <button style={{ padding: '12px 20px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            Consultar
          </button>
        </div>

      </main>
    </div>
  )
}