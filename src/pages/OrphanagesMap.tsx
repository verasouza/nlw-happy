import React, { useState, useEffect } from 'react';
import mapmarkerImg from '../images/Local.svg';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight} from 'react-icons/fi';
import '../styles/pages/orphanage-map.css';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import api from '../services/api';

interface Orphanage{
  id: number;
  latitude:number;
  longitude: number;
  name: string;
}

function OrphanagesMap() {
const[listOrphanages, setListOrphanages] = useState<Orphanage[]>([])


useEffect(() => {
  api.get('orphanages')
  .then(response => {
    setListOrphanages(response.data)
  });
}, []);

  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapmarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Barueri</strong>
          <span>São Paulo</span>
        </footer>
      </aside>


      <Map
        center={[-23.5092843, -46.882701]}
        zoom={15.75}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {listOrphanages.map(orphanage => (
          <Marker
            icon={mapIcon}
            position={[orphanage.latitude, orphanage.longitude]}
            key={orphanage.id}
          >
            <Popup
              closeButton={false}
              minWidth={240}
              maxWidth={240}
              className="map-popup"
            >
              {orphanage.name}
              <Link to={`/orphanages/${orphanage.id}`}>
                <FiArrowRight size={32} color="#fff" />
              </Link>
            </Popup>
          </Marker>
        ))}
        </Map>
        <Link to="/orphanages/create" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
  );
}
export default OrphanagesMap;