import React, { useState, useEffect } from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Container, Row, Col } from 'react-bootstrap';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getConfirmedTotal } from '../../api/request';
import API from '../../api/index';
import NoData from '../Components/Utils/NoData';
import Loading from '../Components/Utils/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMd, faHandHoldingMedical, faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

export default function CovidMap() {

    const [lat, setLat] = useState(51, 0);
    const [lng, setLng] = useState(0, 0);
    const [zoom, setZoom] = useState(3);
    const [position, setPosition] = useState([0, 0]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const [markers, setMarkers] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setError(false);
            setLoading(true);
            let resultAPI;
            try {
                resultAPI = await API.get(getConfirmedTotal());
                if (resultAPI.status === 200) {
                    for (let i = 0; i < resultAPI.data.length - 1; i++) {
                        setMarkers(m => [...m, {
                            provinceState: resultAPI.data[i].provinceState,
                            country: resultAPI.data[i].countryRegion,
                            position: [resultAPI.data[i].lat, resultAPI.data[i].long],
                            confirmed: resultAPI.data[i].confirmed,
                            recovered: resultAPI.data[i].recovered,
                            deaths: resultAPI.data[i].deaths
                        }]);
                    }
                } else {
                    setError(true);
                }
            } catch (error) {
                setError(true);
            }
            setLoading(false);
        };
        setLat(lat);
        setLng(lng);
        setZoom(zoom)
        setPosition([lat, lng]);

        fetchAPI();
    }, [lat, lng, zoom])


    const renderData = () => {
        if (error) {
            return (<NoData error={error} data="Impossible de charger" />)
        }
        if (loading) {
            return (<Loading isLoading={loading} />)
        } else {

            return (
                <>
                    {markers.map((val, index) => (
                        <Marker key={index} position={val.position}>
                            <Popup>
                                <h6><strong>{val.country}</strong> {val.provinceState !== "" ? (<span>{val.provinceState}</span>) : ("") }</h6>
                                <hr />
                                <p className="text-primary"> <FontAwesomeIcon icon={faUserMd} /> Confirmed : {val.confirmed}</p>
                                <p className="text-success"> <FontAwesomeIcon icon={faHandHoldingMedical} /> Recovered : {val.recovered}</p>
                                <p className="text-danger"> <FontAwesomeIcon icon={faSkullCrossbones} /> Deaths : {val.deaths}</p>
                            </Popup>
                        </Marker>
                    ))}
                </>
            )
        }
    }

    return (
        <Container className="main" fluid>
            <Row>
                <Col sm={12}>
                    <Map center={position} zoom={zoom}>
                        <TileLayer
                            url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        {renderData()}
                        { /*<Marker position={position}>
                            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
                        </Marker>*/}
                    </Map>
                </Col>
            </Row>
        </Container>
    )
}
