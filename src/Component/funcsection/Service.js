import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Service() {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);
    const [f, setF] = useState(0);
    const [j, setJ] = useState(0);
    const [h, setH] = useState(0);
    const [i, setI] = useState(0);
    const [g, setG] = useState(0);
    const [k, setK] = useState(0);
    const [l, setL] = useState(0);

    return (
        <section id='serv' className='service' style={{ padding: '60px 0 0', textAlign: 'center' }}>
            <Container>
                <div>
                    <h2 style={{ padding: ' 10px  0 40px ' }}>
                        إبدأ بالتسبيح
                    </h2>
                </div>
                <Row style={{ flexWrap: 'wrap' }}>
                    <Col onClick={() => {
                        setA((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{a}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    اللهم ارفع درجاته
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setB((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{b}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    اللهم ارحمه
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setC((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{c}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    اللهم اعفُ عنه
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setD((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{d}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    اللهم اغفر له
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setE((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{e}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    أستغفر الله
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setF((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{f}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    الحمدلله
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setJ((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{j}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    الله أكبر
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setH((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{h}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    سبحان الله
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setI((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{i}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    سبحان الله العظيم
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setG((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{g}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    لا إله إلا الله
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setK((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{k}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    لا حول ولا قوة الا بالله
                                </h4>
                            </div>
                        </div>
                    </Col>
                    <Col onClick={() => {
                        setL((old) => old += 1)
                    }} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch mb-2 mb-lg-0' >
                        <div className='icon'>
                            <div className='icon-text'>
                                <p style={{ margin: '0', fontWeight: 'bold', fontSize: '25px' }}>{l}</p>
                            </div>
                            <div className='title'>
                                <h4>
                                    سبحان الله وبحمده
                                </h4>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Service