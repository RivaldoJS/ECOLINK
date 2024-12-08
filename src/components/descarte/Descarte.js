// Assuming Descarte.js has similar content to Descartar.tsx
// This file might need to be updated based on its original content

import react from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Descarte.css';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const center = {
    lat: -12.9714,
    lng: -38.5014
};

function Descarte() {
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
                    <option value="notebook">Notebook</option> 
                    <option value="impressora">Impressora</option> 
                    <option value="celular">Celular</option> 
                    <option value="tablet">Tablet</option> 
                    <option value="scanner">Scanner</option>
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

export default Descarte;
