import React from 'react';
import {MapContainer, TileLayer, Marker} from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import marker from "./icon/location-pointer.png";
import L from "leaflet";

class SuppliersMap extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            iconPerson: {}
        }
    }

    componentDidMount() {
        this.setState({
            iconPerson: new L.Icon({
                iconUrl: marker,
                iconSize: [25, 35],
            }),
        });
    }

    onMapClick = () => alert("Vous allez voir la carte")

    render() {
        if (this.props.loading || this.props.localLoading) {
            return (
                <img src={"./icon/loading.gif"} alt="gif de chargement"/>
            )
        } else if (this.props.error) {
            return (
                <img src={"./icon/404.gif"} alt="gif d'erreur 404"/>
            )
        } else {
            return (
                <div>
                    <MapContainer
                        center={[this.props.latitude, this.props.longitude]} zoom={4} scrollWheelzoom={false}
                    >
                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {this.props.suppliers.map((supplier) => (
                            <Marker
                                key={supplier.id}
                                position={[supplier.latitude, supplier.longitude]} icon={this.state.iconPerson}>
                            </Marker>
                        ))}

                    </MapContainer>
                    <h1>Carte des fourniseurs</h1>
                    <button
                        onClick={this.onMapClick}
                    >
                        Voir la carte
                    </button>
                </div>
            )
        }
    }
}

export default SuppliersMap;