import React, { Component } from 'react'
import trainService from '../services/trainService';

export default class search extends Component {

  constructor(props){
    super(props)
  
    this.state={
      trains:[]
    }
     
  }
  componentDidMount(){
      trainService.getTrains().then((res)=>{
        this.setState({trains:res.data});
      });
    }

    render() {
        return (
            <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop:'40px',
        alignItems: 'top',
        height: '90vh',
        
      }}
    >
      <div>
        <h2 className='text-center'>train and passenger Data</h2>
        <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTrain}> Add Train</button>
                    <button style={{marginLeft: "10px",floatLeft:"10px"}} className="btn btn-primary" onClick={this.passenger}> passenger</button>
                 </div>
                 <br></br>
          <div className='row'>
            <table className='table table-striped table bordered'>
              <thead>
                <tr>
                  <th>Train number</th>
                  <th>Train name</th>
                  <th>Train source</th>
                  <th>Train destination</th> 
                  <th>Date of Journey</th>
                  <th>AC</th>
                  <th>sleeper</th>
                  <th>Book Ticket</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.trains.map(
                    trains =>
                    <tr key={trains.id}>
                      <td>{trains.trainNumber}</td>
                      <td>{trains.trainName}</td>
                      <td>{trains.trainOrigin}</td>
                      <td>{trains.trainDestination}</td>
                      <td>{trains.date}</td>
                      <td>{trains.trainTiers.ac}</td>
                      <td>{trains.trainTiers.sleeper}</td>
                      <td>
                      <button onClick={ () => this.editTrain(trains.trainNumber)} className="btn btn-info">Update </button>
                       <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTrain(trains.trainNumber)} className="btn btn-danger">Delete </button>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div> 
      </div>
        )
    }
}
