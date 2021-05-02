import React, { Component } from 'react'

export default class signIn extends Component {
  constructor(props){
    super(props)

    this.state={
      UserName:''
    }

    this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
  }
  save(){
    
    if(this.state.UserName="admin"){
      this.props.history.push("/admin");
    }else
    {
      this.props.history.push("/booking");
    }
    
  }

  changeUserNameHandler=(event)=>{
    this.setState({userName: event.target.value});
  }
  render() {
    return (
      <div>
       
    <div className="bg-image"
    style={{  
      backgroundImage: "url(" + "https://i.pinimg.com/originals/96/a9/6a/96a96a15ff3fa14336de2aa456539b85.jpg" + ")",
      height: '100vh',
      backgroundRepeat:'no-repeat',
      color:"white",
      backgroundAttachment:'fixed',
      backgroundPosition:'center',
      backgroundSize:'100%'
    }}
    >
      <div className="container" style={{paddingTop:"80px"}}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3  bg-dark">
          <h2 className="text-center">sign in</h2>  
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>User Name:</label>
                     <input placeholder="FirstName" name="userName" className="form-control"/>

                     <label style={{paddingTop:'20px'}}>Password:</label>
                      <input type="password" placeholder="password" name="password" className="form-control"/>      
                      
                      </div>
                      <button className="btn btn-success" onClick={this.save.bind(this)}>submit</button>
                </form>
            </div>   
          </div>
        </div>
      </div>
    </div>
  );
      </div>
    )
  }
}
