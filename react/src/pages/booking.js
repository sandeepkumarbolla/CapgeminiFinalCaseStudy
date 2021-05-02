import React, { Component } from 'react'
import searchService from '../services/searchService';

export default class booking extends Component {
  constructor(props){
    super(props)

    this.state={
      trains:[]
    }
    
    this.sourceHandler = this.sourceHandler.bind(this);  
    this.destinationHandler = this.destinationHandler.bind(this);  
    this.dateHandler = this.dateHandler.bind(this);  
}

sourceHandler=(event)=>{
  this.setState({source: event.target.value});
}

destinationHandler=(event)=>{
  this.setState({destination: event.target.value});
}
dateHandler=(event)=>{
  this.setState({date: event.target.value});
}

search=(e)=>{
  e.preventDefault();
  searchService.getsearchtrains(this.state.source,this.state.destination,this.state.date).then((res)=>{
    this.setState({trains:res.data});
    if(this.state.source==null){
      alert("please enter source destination and date");
    }
    else if(this.state.destination==null){
      alert("please enter source destination and date");
    }
    else if(this.state.date==null){
      alert("please enter source destination and date");
    }
    console.log(this.state.trains);
  });
}

confirmdetails(trainNumber){
  this.props.history.push(`/confirmbooking/${trainNumber}`);
}



 

  render() {
    return (
      <div className="bg-image"
    style={{  
       backgroundImage: "url(" + "https://i.pinimg.com/originals/96/a9/6a/96a96a15ff3fa14336de2aa456539b85.jpg" + ")",
      height: '100vh',
      //background:'grey',
      color:'white',
      backgroundRepeat:'no-repeat',
      backgroundAttachment:'fixed',
      backgroundPosition:'center',
      backgroundSize:'100%'
    }}
    >
      <div className="container" style={{paddingTop:'10px'}}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark" style={{background:'white'}}>
          <h2 className="text-center" style={{paddingTop:'10px'}}><b>Book ticket</b></h2>  
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>Source</label>
                     <input placeholder="Source" name="source" className="form-control"
                        value={this.state.source} onChange={this.sourceHandler}/>

                     <label style={{paddingTop:'20px'}}>Destination</label>
                      <input placeholder="Destination" name="destination" className="form-control"
                          value={this.state.destination} onChange={this.destinationHandler}/> 

                      <label style={{paddingTop:'20px'}}>Date Of Journey</label>
                      <input type="date" placeholder="dd-mm-yyyy" name="date" className="form-control"
                          value={this.state.date} onChange={this.dateHandler}/>      
                      
                      </div>
                      <button className="btn btn-success" onClick={this.search}>Find Trains</button>
                </form>
            </div>   
          </div>
        </div>
      </div>
      <div className="container" style={{paddingTop:'30px'}}>
      <div className='row'>
            <table className='table table-striped table-dark' style={{borderRadius:'20px'}}>
              <thead>
                <tr>
                  <th>Train id</th>
                  <th>Train name</th>
                  <th>Train source</th>
                  <th>Train destination</th> 
                  <th>fare</th>
                  <th>Date of Journey</th>
                  <th>Time</th>
                  <th>AC</th>
                  <th>sleeper</th>
                  <th>Book</th>
                  
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
                      <td>{trains.time}</td>
                      <td>{trains.trainTiers.ac}</td>
                      <td>{trains.trainTiers.sleeper}</td>
                      <td>
                        <button onClick={ () => this.confirmdetails(trains.trainNumber)} className="btn btn-success" >book</button>
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
