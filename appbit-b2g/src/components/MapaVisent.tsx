import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

// Correção para o ícone do Leaflet aparecer corretamente no Vite
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

const IconeCustomizado = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

export default function MapaVisent() {
  // Coordenadas centrais da Região Metropolitana de Florianópolis
  const posicaoCentro: [number, number] = [-27.5948, -48.5569]

  return (
    <MapContainer 
      center={posicaoCentro} 
      zoom={11} 
      style={{ height: '100%', width: '100%' }}
    >
      {/* Camada do mapa com estilo escuro (CartoDB Dark Matter) */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Marcador de teste no centro de Floripa */}
      <Marker position={posicaoCentro} icon={IconeCustomizado}>
        <Popup>
          <div style={{ color: '#000' }}>
            <strong>Ponto Central — Florianópolis</strong><br />
            Pronto para receber as antenas da Vísent.
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}