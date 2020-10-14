import React from 'react';
import mapmarkerImg from '../images/Local.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanage-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapmarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão espreando a sua visita :)</p>
        </header>
        <footer>
          <strong>Barueri</strong>
          <span>São Paulo</span>
        </footer>
      </aside>


      <Map
        center={[-23.510719, -46.903357]}
        zoom={13}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        </Map>


        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#FFF" />
        </Link>
    </div>
  );
}
export default OrphanagesMap;