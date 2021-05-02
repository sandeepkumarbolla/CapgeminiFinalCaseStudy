import React, { Component } from 'react'
import trainService from '../services/trainService';

export default class updateTrain extends Component {
    constructor(props){
        super(props)

        this.state={
            trainNumber:this.props.match.params.trainNumber,
            trainName:'',
            trainOrigin:'',
            trainDestination:'',
            fare:'',
            date:'',
            time:'',
            ac:'',
            sleeper:'', 
        }
        this.changetrainNumberHandler=this.changetrainNumberHandler.bind(this);
        this.changetrainNameHandler=this.changetrainNameHandler.bind(this);
        this.changetrainOriginHandler=this.changetrainOriginHandler.bind(this);
        this.changetrainDestinationHandler=this.changetrainDestinationHandler.bind(this);
        this.changefareHandler=this.changefareHandler.bind(this);
        this.changedateHandler=this.changedateHandler.bind(this);
        this.changetimeHandler=this.changetimeHandler.bind(this);
        this.changeacHandler=this.changeacHandler.bind(this);
        this.changesleeperHandler=this.changesleeperHandler.bind(this);
        this.updatetrain=this.updatetrain.bind(this);
       
    }
    componentDidMount(){
        trainService.getTrainsById(this.state.trainNumber).then((res)=>{
            let traindata=res.data;
            this.setState({trainName:traindata.trainName,
                trainOrigin:traindata.trainOrigin,
                trainDestination:traindata.trainDestination,
                fare:traindata.fare,
                date:traindata.date,
                time:traindata.time,
                ac:traindata.trainTiers.ac,
                sleeper:traindata.trainTiers.sleeper

            });
        });
    }
    

    updatetrain = (e) => {
        e.preventDefault();
        let traindata = {trainNumber: this.state.trainNumber , 
            trainName:this.state.trainName, 
            trainOrigin:this.state.trainOrigin, 
            trainDestination:this.state.trainDestination, 
            fare:this.state.fare,
            date:this.state.date, 
            time:this.state.time,
            trainTiers:{
                ac:this.state.ac, 
                sleeper:this.state.sleeper
        }};

        console.log('traindata => ' + JSON.stringify(traindata));

        trainService.addTrain(traindata).then(res =>{
            this.props.history.push('/admin');
            alert('train successfully Updated');
        });

       
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
    changetimeHandler=(event)=>{
        this.setState({time:event.target.value});
    } 
    changeacHandler=(event)=>{
        this.setState({ac:event.target.value});
    } 
    changesleeperHandler=(event)=>{
        this.setState({sleeper:event.target.value});
    } 

    cancel(){
        this.props.history.push('/admin');
        alert('cancelled updating train... redirecting to admin page')
    }

    render() {
        return (
            <div
                style={{
                    color:"white",
                    background:"black",
                paddingTop:'30px',
                paddingBottom:'30px'
                }}>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3 bg-dark">
                        <h3 className="text-center"> update Train</h3>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                <lable>Train number</lable>
                                    <input placeholder="trainNumber" name="trainNumber" className="form-control"
                                        value={this.state.trainNumber} onChange={this.changetrainNumberHandler}/>

                                    <lable>Train name</lable>
                                    <input placeholder="trainName" name="trainName" className="form-control"
                                        value={this.state.trainName} onChange={this.changetrainNameHandler}/>

                                    <lable>Train origin</lable>
                                    <input placeholder="trainOrigin" name="trainOrigin" className="form-control"
                                        value={this.state.trainOrigin} onChange={this.changetrainOriginHandler}/>

                                    <lable>Train destination</lable>
                                    <input placeholder="trainDestination" name="trainDestination" className="form-control"
                                        value={this.state.trainDestination} onChange={this.changetrainDestinationHandler}/>
                                    
                                    <lable>Fare</lable>
                                    <input placeholder="fare" name="fare" className="form-control"
                                        value={this.state.fare} onChange={this.changefareHandler} required/>

                                    <lable>date of journey</lable>
                                    <input type="date" placeholder="date" name="date" className="form-control"
                                        value={this.state.date} onChange={this.changedateHandler}/>

                                    <lable>time</lable>
                                    <input type="time" placeholder="time" name="time" className="form-control"
                                        value={this.state.time} onChange={this.changetimeHandler}required/>

                                    <lable>seats in ac tier</lable>
                                    <input placeholder="ac" name="ac" className="form-control"
                                        value={this.state.ac} onChange={this.changeacHandler}/>
                                    
                                    <lable>seats in sleeper tier</lable>
                                    <input placeholder="sleeper" name="sleeper" className="form-control"
                                        value={this.state.sleeper} onChange={this.changesleeperHandler}/>
                                </div>
                                <button className="btn btn-success" onClick={this.updatetrain} >Update Train</button>
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
