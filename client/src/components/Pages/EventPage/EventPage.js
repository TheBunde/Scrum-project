import React, {Component} from 'react';

import Navbar from '../../Navbar/Navbar'
import "../../../css/EventPage.css"

class EventPage extends Component{
    
    render() {
        return (
            <div>
                <Navbar />

                <div id="eventPageBackground">
                    <div id="eventPageTitle">
                        <h1>Arrangementer</h1>
                    </div>
                    <div id="eventPageBar">
                        <div className="dropdown">
                            <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div className="dropdown">
                            <button className="btn btn-outline dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                        <div id="eventPageSearchBar">
                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EventPage;