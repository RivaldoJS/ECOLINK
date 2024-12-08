import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Select from 'react-select';
import './Descarte.css';

const containerStyle = {
    width: '100%',
    height: '400px'
};

const initialCenter = {
    lat: -12.9714,
    lng: -38.5014
};

const options = [
    { value: '11', label: 'Aparelhos de ar condicionado' },
    { value: '128', label: 'Aparelhos de barbear elétricos' },
    { value: '137', label: 'Aparelhos de telefone' },
    { value: '129', label: 'Aspiradores de pó' },
    { value: '172', label: 'Baterias Automotivas' },
    { value: '179', label: 'Baterias de celular' },
    { value: '185', label: 'Baterias de eletrônicos - outras' },
    { value: '130', label: 'Cafeteiras' },
    { value: '138', label: 'Caixas de som' },
    { value: '197', label: 'Câmeras digitais' },
    { value: '150', label: 'Carregadores de celular' },
    { value: '189', label: 'Carregadores de eletrônicos - outros' },
    { value: '17', label: 'Computadores' },
    { value: '188', label: 'Computadores - gabinetes' },
    { value: '183', label: 'Drives' },
    { value: '131', label: 'Chuveiros elétricos' },
    { value: '140', label: 'HDs (Interno/Externo)' },
    { value: '141', label: 'Home theaters' },
    { value: '190', label: 'Hubs, roteadores e switchers' },
    { value: '18', label: 'Impressoras' },
    { value: '201', label: 'Impressoras - toners' },
    { value: '134', label: 'Liquidificadores e processadores' },
    { value: '196', label: 'Monitores LED' },
    { value: '198', label: 'Mouses' },
    { value: '186', label: 'Gravadores de voz' },
    { value: '203', label: 'Teclados de computador' },
    { value: '146', label: 'Televisores de LCD/LED/Plasma' },
    { value: '145', label: 'Televisores de tubo' },
    { value: '149', label: 'Videogames' }
];

function Descartar() {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleChange = (selectedOptions) => {
        setSelectedItems(selectedOptions);
    };

    return (
        <div className="descarte">
            <h1>Descarte de Itens Eletrônicos</h1>
            <form id="descarteForm">
                <label htmlFor="localizacao">Localização:</label>
                <input type="text" id="localizacao" name="localizacao" required />

                <label htmlFor="items">O que precisa descartar?</label>
                <Select
                    id="items"
                    name="items"
                    options={options}
                    isMulti
                    onChange={handleChange}
                />

                <div>
                    <label htmlFor="data">Data do Descarte:</label>
                    <input type="date" id="data" name="data" required style={{ width: '20%' }} />
                </div>
                <div>
                    <button type="submit">Efetuar Descarte</button>
                </div>
                <LoadScript googleMapsApiKey="AIzaSyBFfzmovTtQXIHGktuJAL2Gh4anule0fuY">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={initialCenter}
                        zoom={12}
                    >
                        <Marker position={initialCenter} />
                    </GoogleMap>
                </LoadScript>
            </form>
        </div>
    );
}

export default Descartar;
