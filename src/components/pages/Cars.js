import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {DataContext} from '../pages/Context';
import Navbar from './Navbar';


export class Cars extends Component {
    
    static contextType = DataContext;

    render() {
        const {cars} = this.context;
        return (
          <div>
            <Navbar/>
            <div id="cars">
                
                {
                    cars.map(cars => (
                        <div className="card" key={cars._id}>
                            <Link to={'/cars/${cars._id}'}>
                                <img src={cars.src} alt=""></img>
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={'/cars/${cars._id}'}>{cars.ilanadi}</Link>
                                </h3>

                            </div>
                        </div>
                    ))
                }
            </div>
            </div>
          
        )
    }
}
export default Cars;