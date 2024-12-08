import React from 'react';
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

function Descartar() {
    return (
        <div className="descarte">
            <h1>Descarte de Itens Eletrônicos</h1>
            <form id="descarteForm">
                <label htmlFor="localizacao">Localização:</label>
                <input type="text" id="localizacao" name="localizacao" required />
                

                
                <label htmlFor="item">O que precisa descartar?</label>
                <select id="item" name="item" required>
                    <option value="">Selecione um item</option>
                    <option value="11">Aparelhos de ar condicionado</option>
                    <option value="128">Aparelhos de barbear elétricos</option>
                    <option value="137">Aparelhos de telefone</option>
                    <option value="129">Aspiradores de pó</option>
                    <option value="172">Baterias Automotivas</option>
                    <option value="179">Baterias de celular</option>
                    <option value="185">Baterias de eletrônicos - outras</option>
                    <option value="130">Cafeteiras</option>
                    <option value="138">Caixas de som</option>
                    <option value="197">Câmeras digitais</option>
                    <option value="150">Carregadores de celular</option>
                    <option value="189">Carregadores de eletrônicos - outros</option>
                    <option value="17">Computadores</option>
                    <option value="188">Computadores - gabinetes</option>
                    <option value="183">Drives</option>
                    <option value="131">Chuveiros elétricos</option>
                    <option value="140">HDs (Interno/Externo)</option>
                    <option value="141">Home theaters</option>
                    <option value="190">Hubs, roteadores e switchers</option>
                    <option value="18">Impressoras</option>
                    <option value="201">Impressoras - toners</option>
                    <option value="134">Liquidificadores e processadores</option>
                    <option value="196">Monitores LED</option>
                    <option value="198">Mouses</option>
                    <option value="186">Gravadores de voz</option>
                    <option value="203">Teclados de computador</option>
                    <option value="146">Televisores de LCD/LED/Plasma</option>
                    <option value="145">Televisores de tubo</option>
                    <option value="149">Videogames</option>
                </select>
                
                <div>
                    <label htmlFor="data">Data do Descarte:</label>
                    <input type="date" id="data" name="data" required style={{ width: '20%' }} />
                </div>
                <div>
                    <button type="submit">Efetuar Descarte</button>
                </div>
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
