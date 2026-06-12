import { Fragment } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Circle } from 'react-leaflet'
import L from 'leaflet'

// Importação do CSS essencial do Leaflet
import 'leaflet/dist/leaflet.css'

// Correção para o ícone do Leaflet aparecer corretamente no Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const IconeCustomizado = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

// Dados simulados do MVP alinhados com o que o Pedro e a Giorgia precisam
const dadosRegioes = [
  {
    id: 1,
    nome: "São Paulo - Zona Sul",
    posicao: [-23.6544, -46.6611] as [number, number],
    cobertura: "3G / Sinal Escasso",
    densidade: "Alta (85k pessoas)",
    empregabilidade: "0.42 (Baixa)",
    status: "critico"
  },
  {
    id: 2,
    nome: "Rio de Janeiro - Centro",
    posicao: [-22.9035, -43.1729] as [number, number],
    cobertura: "5G / Excelente",
    densidade: "Média (120k pessoas)",
    empregabilidade: "0.78 (Alta)",
    status: "estavel"
  }
]

export default function MapaVisent() {
  // Centro estratégico para pegar SP e RJ na mesma tela inicial
  const posicaoCentro: [number, number] = [-23.30, -45.30]

  return (
    <MapContainer 
      center={posicaoCentro} 
      zoom={7} 
      style={{ height: '600px', width: '100%' }}
    >
      {/* Camada do mapa com estilo escuro */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {dadosRegioes.map((regiao) => {
        const corIndicador = regiao.status === 'critico' ? '#ef4444' : '#22c55e';

        return (
          <Fragment key={regiao.id}>
            {/* Mancha visual do Indicador */}
            <Circle
              center={regiao.posicao}
              radius={25000}
              pathOptions={{
                color: corIndicador,
                fillColor: corIndicador,
                fillOpacity: 0.25,
                weight: 1.5
              }}
            />

            {/* Marcador Interativo */}
            <Marker position={regiao.posicao} icon={IconeCustomizado}>
              <Popup>
                <div style={{ color: '#000', fontFamily: 'sans-serif', minWidth: '180px' }}>
                  <strong style={{ fontSize: '14px', color: '#1e293b' }}>{regiao.nome}</strong>
                  <hr style={{ margin: '6px 0', border: '0', borderTop: '1px solid #e2e8f0' }} />
                  
                  <p style={{ margin: '4px 0', fontSize: '12px' }}>
                    <strong>População:</strong> {regiao.densidade}
                  </p>
                  <p style={{ margin: '4px 0', fontSize: '12px' }}>
                    <strong>Sinal Móvel:</strong> {regiao.cobertura}
                  </p>

                  <div style={{ marginTop: '8px' }}>
                    <span style={{ 
                      display: 'inline-block', 
                      padding: '3px 6px', 
                      borderRadius: '4px', 
                      fontSize: '11px', 
                      fontWeight: 'bold',
                      backgroundColor: regiao.status === 'critico' ? '#fee2e2' : '#dcfce7',
                      color: regiao.status === 'critico' ? '#991b1b' : '#166534'
                    }}>
                      Empregabilidade: {regiao.empregabilidade}
                    </span>
                  </div>
                </div>
              </Popup>
            </Marker>
          </Fragment>
        )
      })}
    </MapContainer>
  )
}
