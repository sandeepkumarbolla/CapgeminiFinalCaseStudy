import React, { Component } from 'react'
import passengerService from '../services/passengerService'

export default class passengerdata extends Component {
    constructor(props){
        super(props)

        this.state={
          passengers:[]
        }
        this.deletePassenger=this.deletePassenger.bind(this);
        this.back=this.back.bind(this);
    }
    componentDidMount(){
        passengerService.getPassengers().then((res)=>{
            this.setState({passengers:res.data});
        });
      }
      back(){
          this.props.history.push('/admin');
      }

      deletePassenger(pnr){
        passengerService.deletePassenger(pnr).then( res => {
            this.setState({passengers: this.state.passengers.filter(passengerdata => passengerdata.pnr !== pnr)});
            alert("journey for pnr: "+pnr+" has been cancelled");
        });
    }
    


    render() {
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
            
        <div>
        <h2 className='text-center'>passenger Data</h2>           
            <div className='row'>
            <table className='table table-dark table-striped'>
              <thead>
                <tr>
                  <th>passenger pnr</th>
                  <th>Train number</th>
                  <th>passenger name</th>
                  <th>Date of Journey</th>
                  <th>source</th>
                  <th>destination</th>
                  <th>cancel ticket</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.passengers.map(
                    passengers =>
                    <tr key={passengers.id}>
                      <td>{passengers.pnr}</td>
                      <td>{passengers.trainNumber}</td>
                      <td>{passengers.passengerName}</td>
                      <td>{passengers.date}</td>
                      <td>{passengers.source}</td>
                      <td>{passengers.destination}</td>
                      <td>
                       <button style={{marginLeft: "10px"}} onClick={ () => this.deletePassenger(passengers.pnr)} className="btn btn-danger">cancel</button>
                      </td> 
                      
                    </tr>
                   
                  )
                }
              </tbody>
            </table>
            <button style={{marginLeft: "10px"}} onClick={()=> this.back()}  className="btn btn-outline-dark">back </button>
          </div>
        </div> 
           
        </div>
        )
    }

}