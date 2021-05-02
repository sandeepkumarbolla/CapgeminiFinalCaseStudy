import React, { Component }from 'react';

import passengerService from '../services/passengerService'

export default class contact extends Component {
  constructor(props){
    super(props)

    this.state={
      passengers:[],
      
    }
    this.pnrHandler=this.pnrHandler.bind(this);
    this.search=this.search.bind(this);
  }

  search=(e)=>{
    e.preventDefault();
    passengerService.getPassengersbyid(this.state.pnr).then((res)=>{
      this.setState({passengers:res.data});
      console.log(this.state.passengers);
    });
  }
  pnrHandler=(event)=>{
    this.setState({pnr: event.target.value});
  }
  
  render(){
   const {passengers}=this.state
    return (
      
      <div 
      style={{
        background:'grey',
        display: 'flex',
        justifyContent: 'center',
        paddingTop:'40px',
        alignItems: 'top',
        height: '90vh',
        
      }}
      >
        <div className="container" style={{paddingTop:'10px'}}>
          <div className="row">
            <div className="card col-md-6 offset-md-3 bg-dark" style={{background:'white'}}>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="form-group" style={{paddingRight:"100px"}}>    
                      <input placeholder="Enter PNR" name="pnr" className="form-control"
                        value={this.state.pnr} onChange={this.pnrHandler} />
                    </div> 
                    <button className="btn btn-success" onClick={this.search}>Search</button>    
                  </div>
                </form>
              </div>   
            </div>
          </div>
          <div className="container" style={{paddingTop:'30px'}}>
      <div className='row'>
            <table className='table table-striped table-dark' style={{borderRadius:'20px'}}>
              <thead>
                <tr>
                <th>passenger pnr</th>
                  <th>Train number</th>
                  <th>passenger name</th>
                  <th>Date of Journey</th>
                  <th>source</th>
                  <th>destination</th>
                </tr>
              </thead>
              <tbody>
                   <tr>
                      <td>{passengers.pnr}</td>
                      <td>{passengers.trainNumber}</td>
                      <td>{passengers.passengerName}</td>
                      <td>{passengers.date}</td>
                      <td>{passengers.source}</td>
                      <td>{passengers.destination}</td>
                    </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>   
    );
  }
}
 