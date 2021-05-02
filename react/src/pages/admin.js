 import '../App'
import React, { Component } from 'react'
import trainService from '../services/trainService'

export default class admin extends Component {

constructor(props){
  super(props)

  this.state={
    trains:[]
  }
    this.addTrain = this.addTrain.bind(this);
    this.editTrain = this.editTrain.bind(this);
    this.deleteTrain = this.deleteTrain.bind(this);
    this.passenger=this.passenger.bind(this);
}
componentDidMount(){
    trainService.getTrains().then((res)=>{
      this.setState({trains:res.data});
    });
  }

  

  addTrain(){
    this.props.history.push('/addTrain');
}

passenger(){
  this.props.history.push('/passengers');
}

  editTrain(trainNumber){
    this.props.history.push(`/updatetrain/${trainNumber}`);
}

deleteTrain(trainNumber){
  trainService.deleteTrain(trainNumber).then( res => {
      this.setState({trains: this.state.trains.filter(traindata => traindata.trainNumber !== trainNumber)});
  });
  alert('deleted train with  train number: '+trainNumber);
  
}

 
  render() {
    return (
      <div
      style={{
        background:'black',
        display: 'flex',
        position:'static',
        justifyContent: 'center',
        paddingTop:'40px',
        alignItems: 'top',
        height: '90vh',
        
      }}
    >
      <div>
        <h2 className='text-center' style={{color:"white"}}>train and passenger Data</h2>
        <div className = "row">
          <button className="btn btn-primary" onClick={this.addTrain}> Add Train</button>
          <button style={{marginLeft: "10px",floatLeft:"10px"}} className="btn btn-primary" onClick={this.passenger}> show passengers</button>
        </div><br></br>  
        <div className='row'>
            <table className='table table-striped table-dark'>
              <thead>
                <tr>
                  <th>Train id</th>
                  <th>Train name</th>
                  <th>Train origin</th>
                  <th>Train destination</th> 
                  <th>fare</th>
                  <th>Date of Journey</th>
                  <th>time</th>
                  <th>AC</th>
                  <th>sleeper</th>
                  <th>update/delete</th>
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
                      <td>{trains.fare}</td>
                      <td>{trains.date}</td>
                      <th>{trains.time}</th>
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
