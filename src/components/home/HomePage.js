import React, { Component } from 'react';
import {Link} from "react-router";

class HomePage extends Component {
    render() {
        return (
            <div>        
                <p>This is Home Page</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default HomePage;