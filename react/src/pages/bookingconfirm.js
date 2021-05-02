import React, { Component } from 'react'
import passengerService from '../services/passengerService';
import trainService from '../services/trainService';


export default class bookingconfirm extends Component {

    constructor(props){
        super(props)

        this.state={
            trainNumber:this.props.match.params.trainNumber,
            trainName:'',
            trainOrigin:'',
            trainDestination:'',
            fare:'',
            date:'',
            ac:'',
            sleeper:'', 
        }
        this.changetrainNumberHandler=this.changetrainNumberHandler.bind(this);
        this.changetrainNameHandler=this.changetrainNameHandler.bind(this);
        this.changetrainOriginHandler=this.changetrainOriginHandler.bind(this);
        this.changetrainDestinationHandler=this.changetrainDestinationHandler.bind(this);
        this.changefareHandler=this.changefareHandler.bind(this);
        this.changedateHandler=this.changedateHandler.bind(this);
        this.changepassengerNameHandler=this.changepassengerNameHandler.bind(this);
        this.changeemailHandler=this.changeemailHandler.bind(this);
        this.changephoneHandler=this.changephoneHandler.bind(this);
        this.savepassenger=this.savepassenger.bind(this);
    }


    componentDidMount(){
        trainService.getTrainsById(this.state.trainNumber).then((res)=>{
            let traindata=res.data;
            this.setState({trainName:traindata.trainName,
                trainOrigin:traindata.trainOrigin,
                trainDestination:traindata.trainDestination,
                fare:traindata.fare,
                date:traindata.date,
                

            });
        });
    }
    

    savepassenger = (e) => {
        e.preventDefault();
        let passengerdata = {trainNumber: this.state.trainNumber , 
            pnr:0,
            trainName:this.state.trainName, 
            source:this.state.trainOrigin, 
            destination:this.state.trainDestination, 
            fare:this.state.fare,
            date:this.state.date, 
            passengerName:this.state.passengerName,
            email:this.state.email,
            phone:this.state.phone
        };

        console.log('passengerdata => ' + JSON.stringify(passengerdata));
        
       
       passengerService.addPassenger(passengerdata).then(res =>{
            alert("train booked successfully")
            this.props.history.push('/');
        })
      }

      cancel(){
          this.props.history.push('/booking');
          alert('train booking cancelled')
      }
    
    changetrainNumberHandler=(event)=>{
        this.setState({trainNumber:event.target.value});
    }
    changetrainNameHandler=(event)=>{
        this.setState({trainName:event.target.value});
    }
    changetrainOriginHandler=(event)=>{
        this.setState({trainOrigin:event.target.value});
    } 
    changetrainDestinationHandler=(event)=>{
        this.setState({trainDestination:event.target.value});
    } 
    changefareHandler=(event)=>{
        this.setState({fare:event.target.value});
    }
    changedateHandler=(event)=>{
        this.setState({date:event.target.value});
    } 
   changepassengerNameHandler=(event)=>{
       this.setState({passengerName:event.target.value});
   }
   changeemailHandler=(event)=>{
       this.setState({email:event.target.value});
   }
   changephoneHandler=(event)=>{
       this.setState({phone:event.target.value});
   }


    render() {
        return (
            <div
            style={{
            paddingTop:'30px',
            paddingBottom:'30px'
            }}>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="text-center">confirm booking</h3>
                    <div className="card-body">


                        <form>
                            <div className="form-group">
                            <lable>Train number</lable>
                                <input type="number" placeholder="trainNumber" name="trainNumber" className="form-control"
                                    value={this.state.trainNumber} onChange={this.changetrainNumberHandler} readOnly/>

                                <lable>Train name</lable>
                                <input required placeholder="trainName" name="trainName" className="form-control"
                                    value={this.state.trainName} onChange={this.changetrainNameHandler} readOnly/>

                                <lable>source</lable>
                                <input placeholder="source" name="trainOrigin" className="form-control"
                                    value={this.state.trainOrigin} onChange={this.changetrainOriginHandler} readOnly/>

                                <lable>Train destination</lable>
                                <input placeholder="trainDestination" name="trainDestination" className="form-control"
                                    value={this.state.trainDestination} onChange={this.changetrainDestinationHandler} readOnly/>

                                <lable>Fare</lable>
                                <input placeholder="fare" name="fare" className="form-control"
                                    value={this.state.fare} onChange={this.changefareHandler} readOnly/>

                                <lable>date of journey</lable>
                                <input placeholder="date" name="date" className="form-control"
                                    value={this.state.date} onChange={this.changedateHandler} readOnly/>

                                <lable>Name of the passenger:</lable>
                                <input placeholder="passengerName" name="passengerName" className="form-control"
                                    value={this.state.passengerName} onChange={this.changepassengerNameHandler} required/>

                                <lable>Email:</lable>
                                <input type="email" placeholder="email" name="email" className="form-control"
                                    value={this.state.email} onChange={this.changeemailHandler} required/>

                                <lable>phone number: </lable>
                                <input type="number" placeholder="phone" name="phone" className="form-control"
                                    value={this.state.phone} onChange={this.changephoneHandler} required/>
                            </div>
                            <button type="submit" className="btn btn-success" onClick={this.savepassenger} >Save</button>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",paddingTop:"10px"}}>Cancel</button>
                
                        </form>
                    </div>
                </div>
            </div>
             
        </div>
        
        </div>
        )
    }
}
