import React, {useState} from 'react';
import Header from '../header/header';
import { Col, Row } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import './container.scss'

const Container =()=>{
    const [value, setValue] = useState('');

    return(
        <div>
            <Header/>
            <Row lg={3} className='container'>
                <Col className="ticket-form">
                    <div>
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} />
                    </div>
                    <div>
                        <br/>
                        <br/>
                    </div>
                    <div className='date-ticket'>
                        <p>Fecha</p>
                        <p>Hora</p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Container;