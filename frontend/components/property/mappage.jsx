import React, { Component } from 'react';
import PropertyMap from './property_map';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            altitude: 36.778259,
            longtitude: -119.417931
        };
    }
    
    render() {
        return (
            <div>
                <h1>MAPPAGE</h1>
                <div className="google-maps">
                    {/* <PropertyMap property={altitude:+36.778259,longtitude: -119.417931} type="show" zoom="false" /> */}
                </div>
            </div>
        )
    }
}

export default MapPage;