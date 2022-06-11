import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import pin from "./pin.png";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 22.078642,
      lng: 82.152328
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={23.839217318786893}
            lng={91.27125746931348}
            text="My Marker"
            
          />
          <img  src={pin} alt="pin" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;