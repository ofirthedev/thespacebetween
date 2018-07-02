import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import pgimage from '../../img/covers/bandpg1.jpg';
import raanan from '../../img/team/raanan.JPG';
import nik from '../../img/team/nik.JPG';
import idan from '../../img/team/idan.JPG';
import eli from '../../img/team/eli.JPG';
import yosef from '../../img/team/yosef.JPG';
import icon from '../../img/icon.jpg';
import Loading from 'react-loading-components';

import './Band.css';
let bg = {
  backgroundColor: 'black',
  height: '100%',

}
let positionText = {
  position:'relative',
  fontSize: '6vh',
  width:'100vw',
  color:'white',
  left: '50%',
  
  transform: `translate(${-50}%, ${-50}%)` 

}
let pgimagestyle = {
  backgroundImage: `url(${pgimage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '73vh',
}
class Band extends Component {
  constructor() {
    super();
    this.state = { isLoading: true };
  }
  authenticate(){
    return new Promise(resolve => setTimeout(resolve, 1000))
  }

componentDidMount(){
  this.authenticate().then(() => {
    this.setState({ isLoading: false });
 })
}
  render() {
    if (this.state.isLoading) {
      return(
      <div className="loading"><center>
      <Loading
      
      type='puff'
       width={100}
        height={100}
         fill='#f44242' />
      </center></div>
    );
  }
    return (

      <div style={bg}>
      <div style={pgimagestyle}>      </div>
      <br/>
      <Container  fluid style={{ lineHeight: '32px' }}>
      <div className="container" >
      <div className="row center-align">
      <div className="col s6 m6 l6 push-l3 push-m3 push-s3">
      <div className="animated fadeInDown">
       <h2  style={positionText}>

      THE BAND
       <hr style={{width:'20%'}} />
       </h2>
      
     </div>
     </div>
     </div>
     </div>
        <br />

        <Row align="center">
        <Col align="center"lg={4}>
        <img className="profiles" src = {idan}  alt="idan"/>
        <div className="profileAlt" style={{color: 'white'}}>Idan aharoni(guitar&drums)</div>

        </Col>
        <Col align="center"lg={4}>

        <img className="profiles" src ={nik} alt="nik"/>
        <div className="profileAlt" style={{color: 'white'}}>Nik sky stepinsky(lead vocalist)</div>

        </Col>
        <Col align="center" lg={4}>

        <img className="profiles" src = {eli} alt="eli"/>
        <div className="profileAlt" style={{color: 'white'}}>Eli leonid perman(bass&vocals)</div>

        </Col>

       
        </Row>
        <br/>
        <Row align="center">
        <Col align="center"lg={12}>
        <img style={{borderRadius:'50%',width:'200px',height:'auto'}}src = {icon} alt="icon"/>
        </Col>
        </Row>
        <br/>
        <Row align="center">
        <Col  lg={6} align="center">
        <img className="profiles" src = {raanan} alt="raanan"/>
        <div className="profileAlt" style={{color: 'white'}}>Raanan naseraldeen(lead guitar</div>

        </Col>
        <Col lg={6} align="center">

        <img className="profiles" src =  {yosef} alt="yosef"/>
        <div className="profileAlt" style={{color: 'white'}}>Yosef haco "hollow" (drums&guitar)</div>
        </Col>

        </Row>
        </Container>
         </div>

    );
  }
}

export default Band;