import React from 'react';
 

const Home = () => {
  return (
    <div className="bg-image"
    style={{  
      backgroundImage: "url(" + "https://i.pinimg.com/originals/96/a9/6a/96a96a15ff3fa14336de2aa456539b85.jpg" + ")",
      height: '100vh',
      backgroundRepeat:'no-repeat',
      backgroundAttachment:'fixed',
      backgroundPosition:'center',
      backgroundSize:'100%'
    }}
    >
      
      <h1 style={{paddingTop:'200px',color:'white',paddingLeft:'300px',fontFamily:'cursive'}}>Welcome to indian Railways</h1>
     <h4 style={{color:'yellow',paddingTop:'100px',paddingLeft:'300px',paddingRight:'100px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<p></p> 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,<br></br> 
     when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>
     It has survived not only five centuries, but also the leap into electronic<br></br> 
     typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</h4>
      
    
    </div>
  );
};

export default Home;
