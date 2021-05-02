import React, { Component } from 'react'
import userService from '../services/userService';

export default class signup extends Component {
  constructor(props){
    super(props)

    this.state={
      UserName:'',
      age:'',
      sex:'',
      address:'',
      email:'',
      password:'', 
    }
    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
    this.changeageHandler = this.changeageHandler.bind(this);  
    this.changesexHandler = this.changesexHandler.bind(this); 
    this. changeaddressHandler = this. changeaddressHandler.bind(this);
    this.changeEmailHandler= this.changeEmailHandler.bind(this); 
    this.changepasswordHandler= this.changepasswordHandler.bind(this); 
  }

  saveuser = (e) => {
    e.preventDefault();
    let userdata = {userName: this.state.userName , age:this.state.age, sex:this.state.sex, address:this.state.address, email:this.state.email, password:this.state.password};
    console.log('userdata => ' + JSON.stringify(userdata));

    userService.user(userdata).then(res =>{
      this.props.history.push('/sign-in');
    });

  }

  changeUserNameHandler=(event)=>{
    this.setState({userName: event.target.value});
  }
  changeageHandler=(event)=>{
    this.setState({age: event.target.value});
  }
  changesexHandler=(event)=>{
    this.setState({sex: event.target.value});
  }
  changeaddressHandler=(event)=>{
    this.setState({address: event.target.value});
  }
  changeEmailHandler=(event)=>{
    this.setState({email: event.target.value});
  }
  changepasswordHandler=(event)=>{
    this.setState({password: event.target.value});
  }
  
  cancel(){
    this.props.history.push('/');
}
  render() {
    return (
      <div
      style={{
        backgroundImage: "url(" + "https://i.pinimg.com/originals/96/a9/6a/96a96a15ff3fa14336de2aa456539b85.jpg" + ")",
      height: '100vh',
      color:'white',
      backgroundRepeat:'no-repeat',
      backgroundAttachment:'fixed',
      backgroundPosition:'center',
      backgroundSize:'100%',
      paddingTop:'30px',
      }}
      >
          <div className="container">
            <div className="row"   style={{paddingtop:'20px'}}>
              <div className="card col-md-6 offset-md-3 offset-md-3  bg-dark" style={{background:'white'}}>
             
                <h2 className="text-center" style={{paddingTop:'2 0px'}}>Register</h2>  
                  <div className="card-body">
                    <form class="row g-3 needs-validation" novalidate>
                     

                      <div className="form-group" style={{paddingLeft:'20px'}}>
                        <label>User Name:</label>
                        <input required placeholder="FirstName" name="userName" className="form-control"
                          value={this.state.userName} onChange={this.changeUserNameHandler}/>
                      </div>

                      <div className = "form-group" style={{paddingLeft:'20px'}}>
                        <label>age: </label>
                        <input type='number' min='18' max='70' placeholder="age" name="age" className="form-control" 
                          value={this.state.age} onChange={this.changeageHandler}/>
                      </div>

                      <div className = "form-group" style={{paddingLeft:'20px'}}>
                        <label>sex: </label>
                        <select placeholder="sex" name="sex" className="form-control" 
                          value={this.state.sex} onChange={this.changesexHandler}>
                            <option>Male</option>
                            <option>Female</option>
                          </select>
                      </div>
                      
                      <div className = "form-group" style={{paddingLeft:'20px'}}>
                          <label> address: </label>
                          <input placeholder="address" name="address" className="form-control" 
                            value={this.state.address} onChange={this.changeaddressHandler}/>
                      </div>
                      
                      <div className = "form-group" style={{paddingLeft:'20px'}}>
                          <label> Email Id: </label>
                          <input type="email" placeholder="email" name="email" className="form-control" 
                              value={this.state.email} onChange={this.changeEmailHandler}/>
                      </div>

                      <div className = "form-group" style={{paddingLeft:'20px'}}>
                          <label> password: </label>
                          <input type="password" placeholder="password" name="password" className="form-control" 
                              value={this.state.password} onChange={this.changepasswordHandler}/> 
                       </div>
                      
                       <div className="col" style={{paddingLeft:'50px'}}>
                       <button type="submit" className="btn btn-success"  onClick={this.saveuser}>Save</button>
                      <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px",paddingTop:"10px"}}>Cancel</button>
                      </div>
                      
                    </form>
                </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

