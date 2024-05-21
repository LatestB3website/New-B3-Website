import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker  } from 'google-maps-react';
// import CurrentLocation from './Map';
const mapStyles = {
    position: 'relative',
    width: '1285px',
    // with:'200px',
    height: '450px',
    

}

export class Maps extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

    render() {
        return (
            <Map width='150px'
            google={this.props.google}
            zoom={14}
            yesIWantToUseGoogleMapApiInternals
            style={mapStyles}
            initialCenter={
              {
                lat: 19.112095862539928,
                lng: 72.861061
              } 
            }
          >
            <Marker
              onClick={this.onMarkerClick}
              name={'BitByBit Solutions'}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
              </div>
            </InfoWindow>
          </Map>
        );
    }
}

export default GoogleApiWrapper(
    (props) => ({
      // apiKey: props.apiKey
      
      apiKey: ("AIzaSyAsZqySD5s3gzRozEdD7rKesWeowXXjOIk")
    }
  ))(Maps)
