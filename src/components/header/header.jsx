import React, {useState} from 'react'
import './header.scss';
import { Col, Row } from 'react-bootstrap';
import { InputText } from 'primereact/inputtext';
import { Sidebar } from 'primereact/sidebar';

const Header = () =>{
    const [value, setValue] = useState('');
    const [visibleRight, setVisibleRight] = useState(false);
    return(
        <div className='header col-12'>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <div>
                    <div className='d-flex flex-wrap'>
                        <i className='pi pi-home me-3' style={{'fontSize': '30px'}}/>
                        <p>Home</p>
                    </div>
                    <div  className='d-flex flex-wrap mt-3'>
                        <i className='pi pi-clock me-3' style={{'fontSize': '30px'}}/>
                        <p>Recientes</p>
                    </div>
                </div>
            </Sidebar>
            <Row className='col-11 contain'>
                <Col lg={4} md={4} className='d-flex flex-wrap col-6'>
                    <i className='pi pi-building logo-header'/>
                    <span className="p-input-icon-left input-search input-size">
                        <i className="pi pi-search" />
                        <InputText value={value} onChange={(e) => setValue(e.target.value)} placeholder="Search" />
                    </span>
                </Col>
                <Col lg={3} md={4} className='navi-option'>
                    <div className='jb'>
                        <div>
                            <i className='pi pi-home'/>
                        </div>
                        <div>
                            <i className='pi pi-clock '/>
                        </div>
                    </div>
                </Col>
                <Col lg={3} md={3} className='col-6'>
                    <div className='ic'>
                        <button className='icon-option-place'>
                            <i className='pi pi-bars icon-efect' onClick={() => setVisibleRight(true)}/>
                        </button>
                        <button>
                            <i className='pi pi-whatsapp icon-efect'/>
                        </button>
                        <button>
                            <i className='pi pi-bell icon-efect'/>
                        </button>
                        <button>
                            <i className='pi pi-user icon-efect'/>
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Header;