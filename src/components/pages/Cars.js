import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../pages/Context';
import Navbar from './Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';


export class Cars extends Component {

    static contextType = DataContext;

    render() {

        const { cars } = this.context;
        return (
            <div>
                <Navbar />
                <div style={{display:"flex", alignItems:"center",}} id="car">
                    {
                        cars.map(car => (
                                <div >
                                   

                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={car.img} />
                                        <Card.Body>
                                            <Card.Title>{car.ilanadi}</Card.Title>
                                            <Card.Text>
                                                {car.aciklama}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroup className="list-group-flush">
                                            <ListGroup.Item>Bulunduğu yer:{car.bulunduguyer}</ListGroup.Item>
                                            <ListGroup.Item>Km:{car.km}</ListGroup.Item>
                                            <ListGroup.Item>Marka:{car.marka}</ListGroup.Item>
                                            <ListGroup.Item>Seri:{car.seri}</ListGroup.Item>
                                            <ListGroup.Item>Fiyat:{car.fiyat}</ListGroup.Item>
                                            <ListGroup.Item>Model:{car.model}</ListGroup.Item>
                                            <ListGroup.Item>Renk:{car.renk}</ListGroup.Item>
                                            <Card.Link >Mail At</Card.Link>
                                        </ListGroup>
                                      
                                    </Card>
                                </div>
                          
                        ))
                    }
                </div>
            </div>

        )
    }
}
export default Cars;