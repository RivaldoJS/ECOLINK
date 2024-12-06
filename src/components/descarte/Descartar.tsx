import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Descarte.css';
import Footer from '../Footer/Footer';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -12.9714,
    lng: -38.5014
};

function Descartar() {
    return (
        <div className="descarte">
            <h1>Descarte de Itens Eletrônicos</h1>
            <form id="descarteForm">
                <label htmlFor="localizacao">Localização:</label>
                <input type="text" id="localizacao" name="localizacao" required />
                
                <label htmlFor="produto">Produto a ser descartado:</label>
                <select id="produto" name="produto" required>
                    <option value="gabinete">Gabinete</option>
                    <option value="monitor">Monitor</option>
                    <option value="perifericos">Periféricos</option>
                    <option value="bateria">Bateria</option>
                    <option value="televisao">Televisão</option>
                </select>
                
                <button type="submit">Efetuar Descarte</button>
            </form>

            <LoadScript googleMapsApiKey="AIzaSyBFfzmovTtQXIHGktuJAL2Gh4anule0fuY">
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={12}
                >
                    <Marker position={center} />
                </GoogleMap>
            </LoadScript>

        </div>
        
    );
}

export default Descartar;
