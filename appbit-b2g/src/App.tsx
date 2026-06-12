import { useState } from 'react'
import { MapPin, ShieldAlert, Briefcase, GraduationCap, MessagesSquare, Bot } from 'lucide-react'
import MapaVisent from './components/MapaVisent'

interface Mensagem {
  id: number;
  autor: 'usuario' | 'ia';
  texto: string;
}

export default function App() {
  // Estado para armazenar o histórico de consultas da IA
  const [mensagens, setMensagens] = useState<Mensagem[]>([
    { id: 1, autor: 'ia', texto: 'Painel Vísent AI carregado. Faça uma consulta sobre a infraestrutura ou o índice de empregabilidade de SP ou RJ.' }
  ]);
  
  // Estado para controlar o texto que o usuário digita
  const [textoInput, setTextoInput] = useState('');

  // Função que processa a pergunta e gera a resposta simulada (Mock) para o MVP
  const lidarComConsulta = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textoInput.trim()) return;

    const novaMsgUsuario: Mensagem = {
      id: Date.now(),
      autor: 'usuario',
      texto: textoInput
    };

    setMensagens(prev => [...prev, novaMsgUsuario]);
    const pergunta = textoInput.toLowerCase();
    setTextoInput('');

    // Simulação da resposta da IA rodando em background
    setTimeout(() => {
      let respostaIA = "Cruzando dados de mobilidade do CDRView com indicadores socioeconômicos...";

      if (pergunta.includes('são paulo') || pergunta.includes('sp')) {
        respostaIA = "⚠️ SP - Zona Sul: Concentração populacional crítica identificada (85k pessoas). A infraestrutura de rede móvel atual é predominantemente 3G/Escassa, gerando um forte impacto negativo no Índice de Empregabilidade da região, atualmente avaliado em 0.42 (Baixo).";
      } else if (pergunta.includes('rio') || pergunta.includes('rj') || pergunta.includes('rio de janeiro')) {
        respostaIA = "✅ RJ - Centro: Cenário de alta estabilidade. Região beneficiada por ampla cobertura de infraestrutura 5G aliada a uma densidade corporativa consolidada. O Índice de Empregabilidade local reflete essa sinergia, atingindo 0.78 (Alto).";
      } else {
        respostaIA = "Análise do Eixo Sudeste: Identificamos um gap estrutural severo na correlação entre conectividade móvel e oportunidades de trabalho em bairros periféricos de grandes metrópoles. Recomenda-se priorizar investimentos em infraestrutura de rede para áreas com índice de empregabilidade abaixo de 0.50.";
      }

      setMensagens(prev => [...prev, {
        id: Date.now() + 1,
        autor: 'ia',
        texto: respostaIA
      }]);
    }, 800);
  };

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100vw', fontFamily: 'sans-serif', backgroundColor: '#0f172a', color: '#f8fafc', margin: 0, overflow: 'hidden' }}>
      
      {/* Barra Lateral de Navegação */}
      <aside style={{ width: '260px', backgroundColor: '#1e293b', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', borderRight: '1px solid #334155' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#38bdf8', marginBottom: '20px' }}>App BiT — B2G</h2>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '12px', flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer', color: '#94a3b8' }}>
            <GraduationCap size={20} /> <span>Formações</span>
          </div>
          
          {/* Indicador Ativo do Módulo no MVP */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', backgroundColor: '#334155', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }}>
            <Briefcase size={20} /> <span>Empregabilidade</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer', color: '#94a3b8' }}>
            <MapPin size={20} /> <span>Iniciativas Sociais</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px', borderRadius: '6px', cursor: 'pointer', color: '#94a3b8' }}>
            <ShieldAlert size={20} /> <span>Saúde Mental</span>
          </div>
        </nav>
        
        <div style={{ fontSize: '0.8rem', color: '#94a3b8', borderTop: '1px solid #334155', paddingTop: '10px' }}>
          Eixo Sudeste — Monitoramento SP / RJ
        </div>
      </aside>

      {/* Área Principal (Mapa + IA) */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        
        {/* Topbar */}
        <header style={{ height: '60px', backgroundColor: '#1e293b', display: 'flex', alignItems: 'center', padding: '0 20px', borderBottom: '1px solid #334155', justifyContent: 'space-between' }}>
          <h1 style={{ fontSize: '1rem', fontWeight: '500' }}>Painel de Dados Públicos — Vísent CDRView</h1>
          <span style={{ fontSize: '11px', backgroundColor: '#0284c7', padding: '3px 8px', borderRadius: '4px', fontWeight: 'bold' }}>MVP CONTRATO</span>
        </header>

        {/* Espaço do Mapa + Janela Flutuante da IA */}
        <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
          <MapaVisent />

          {/* Terminal Suspenso da IA */}
          <div style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            zIndex: 1100,
            width: '340px',
            maxHeight: '75%',
            backgroundColor: 'rgba(30, 41, 59, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: '8px',
            border: '1px solid rgba(71, 85, 105, 0.5)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}>
            <div style={{ padding: '12px 15px', borderBottom: '1px solid rgba(71, 85, 105, 0.5)', backgroundColor: 'rgba(15, 23, 42, 0.6)', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bot size={16} style={{ color: '#38bdf8' }} />
              <strong style={{ fontSize: '12px', color: '#38bdf8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Terminal Analítico Visent AI</strong>
            </div>
            
            <div style={{ padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1, fontSize: '13px', lineHeight: '1.4' }}>
              {mensagens.map((msg) => (
                <div key={msg.id} style={{
                  padding: '8px 12px',
                  borderRadius: '6px',
                  backgroundColor: msg.autor === 'usuario' ? '#0284c7' : 'rgba(15, 23, 42, 0.5)',
                  borderLeft: msg.autor === 'ia' ? '3px solid #38bdf8' : 'none',
                  alignSelf: msg.autor === 'usuario' ? 'flex-end' : 'flex-start',
                  maxWidth: '90%'
                }}>
                  {msg.texto}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulário da Barra de Consulta Inferior */}
        <form onSubmit={lidarComConsulta} style={{ padding: '20px', backgroundColor: '#1e293b', borderTop: '1px solid #334155', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <MessagesSquare style={{ color: '#38bdf8' }} />
          <input 
            type="text" 
            value={textoInput}
            onChange={(e) => setTextoInput(e.target.value)}
            placeholder="Pergunte à IA: 'Como está a situação de São Paulo?' ou 'Verificar Rio de Janeiro'..." 
            style={{ flex: 1, padding: '12px', borderRadius: '6px', border: '1px solid #475569', backgroundColor: '#0f172a', color: '#fff', outline: 'none' }}
          />
          <button type="submit" style={{ padding: '12px 20px', backgroundColor: '#38bdf8', color: '#0f172a', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}>
            Consultar
          </button>
        </form>

      </main>
    </div>
  )
}