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
            <div id="car">
                
                 {
                     cars.map(car => (
                         <div className="card" key={car._id}>
                            <ul>
                             <li><Link to={'/car/${car._id}'}>
                                 <img src={car.src} alt=""></img>
                             </Link></li>
                             </ul>
                             <div className="content">
                                
                                <p>{car.ilanadi}</p>
                                <p>{car.marka}</p>
                                <p>{car.fiyat}</p>
                                <p>{car.bulunduguyer}</p>
                                <p>{car.seri}</p>
                                <p>{car.model}</p>
                                <p>{car.yıl}</p>
                                <p>{car.yakıt}</p>
                                <p>{car.vites}</p>
                                <p>{car.km}</p>
                                <p>{car.renk}</p>
                                <p>{car.aciklama}</p>
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