import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserService from "../services/user.service";
import trainService from "../services/trainService";
import { TableRow } from "@material-ui/core";
import {withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import Button from '@material-ui/core/Button';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead'; 
import Paper from '@material-ui/core/Paper';   
import { Redirect } from 'react-router-dom';
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from 'react-router-dom'; 
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import UpdateOutlinedIcon from '@material-ui/icons/UpdateOutlined';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
    fontFamily:'Times New Roman", Times, serif',
    fontWeight:'bold',
     
    color:'black',
    background:'grey'
    
  },
}))(TableCell);

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  root: {
    color: theme.palette.text.secondary,
  },
}));

const BoardAdmin = () => {
  const history=useHistory()
  const [deleted,setdeleted]= useState(false)

  const classes = useStyles();
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);
 
  const [traindata, settraindata] = useState([])
  useEffect(() => {
   
    
   
    axios.get("http://localhost:8100/trains/findAllTrains").then((res) => {
      settraindata(res.data)
      console.log(res.data)
      console.log(traindata)
      
     
      
    })

}, [])

   
const updatehandler =(id) =>{
  history.push(`/updateTrain/`+id)
}


const deletehandler =(id) =>{
  trainService.deleteTrain(id).then((res)=>{
    alert('deleted')
      if(res.data==="deleted"){
          setdeleted(true)
      }
  })


}
const alerts =() =>{
  if(deleted){
  return(
      <div class="alert alert-warning" role="alert">
    Successfully delete 
  </div>)}
}
 

  if(content==="Admin Board."){
      return (
      <div
      style={{
        //background:'black',
        fontFamily:'sanSerif',
        
        display: 'flex',
        position:'static',
        justifyContent: 'center',
        paddingTop:'40px',
        alignItems: 'top',
        height: '90vh',
        paddingTop:'10px',
        paddingLeft:'80px',
        paddingRight:'80px',
        
      }}
    > 
     <TableContainer component={Paper}>
             <Table className={classes.table} stickyHeader aria-label="sticky table">
             <TableHead>
          <TableRow> 
                  <StyledTableCell><strong>Train number</strong></StyledTableCell>
                  <StyledTableCell><strong>Train name</strong></StyledTableCell>
                  <StyledTableCell><strong>Source</strong></StyledTableCell>
                  <StyledTableCell><strong>Destination</strong></StyledTableCell> 
                  <StyledTableCell><strong>ACfare</strong></StyledTableCell>
                  <StyledTableCell><strong>SleeperFare</strong></StyledTableCell>
                  <StyledTableCell><strong>Date of Journey</strong></StyledTableCell>
                  <StyledTableCell><strong>time</strong></StyledTableCell>
                  <StyledTableCell><strong>AC</strong></StyledTableCell>
                  <StyledTableCell><strong>sleeper</strong></StyledTableCell>
                  <StyledTableCell><strong><center>update</center></strong></StyledTableCell>
                  <StyledTableCell><strong>delete</strong></StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  traindata.map(
                    trains =>
                    <TableRow key={trains.id}>
                      <StyledTableCell>{trains.trainNumber}</StyledTableCell>
                      <StyledTableCell>{trains.trainName}</StyledTableCell>
                      <StyledTableCell>{trains.trainOrigin}</StyledTableCell>
                      <StyledTableCell>{trains.trainDestination}</StyledTableCell> 
                      <StyledTableCell>{trains.trainFares.acFare}</StyledTableCell>
                      <StyledTableCell>{trains.trainFares.sleeperFare}</StyledTableCell>
                      <StyledTableCell>{trains.date}</StyledTableCell>
                      <StyledTableCell>{trains.time}</StyledTableCell>
                      <StyledTableCell>{trains.trainTiers.ac}</StyledTableCell>
                      <StyledTableCell>{trains.trainTiers.sleeper}</StyledTableCell>
                      <StyledTableCell>
                      <UpdateOutlinedIcon className={classes.root} variant="contained" color="primary" onClick={() =>updatehandler(trains.trainNumber)}>Update</UpdateOutlinedIcon>
                      {/* <Button variant="contained" color="primary" onClick={handleClick(trains.trainNumber)}>Update</Button> */}
                      {/* onClick={()=>this.props.history.push(`/updatetrain/${trains.trainNumber}`)} */}
                      {/* <button onClick={ () => this.editTrain(trains.trainNumber)} className="btn btn-info">Update </button> */}
                      </StyledTableCell>
                      <StyledTableCell>
                       <DeleteOutlinedIcon className={classes.root} color="secondary" variant="contained" color="secondary"  onClick={ () => deletehandler(trains.trainNumber)}>Delete </DeleteOutlinedIcon>
                      </StyledTableCell>
                    </TableRow>
                  )
                }
              </TableBody>
            </Table>
          
    </TableContainer>
    </div>
    );
              }
              else
              {
                return(
                  <div
                  style={{
                    background:'grey',
                     
                    
                    justifyContent: 'center',
                    paddingTop:'200px',
                     color:'white',
                    height: '90vh',
                    
                    
                  }}><center><h5>SORRY</h5></center>
                  <center>You ARE not authorized to access this content</center></div>
                )
               
              }
                
  }


export default BoardAdmin

