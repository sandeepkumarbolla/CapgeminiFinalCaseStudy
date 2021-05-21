import axios from 'axios';

const PASSENGER_BASE_API_URL='http://localhost:8089/findallpassenger';
const ADD_PASSENGER_BASE_API_URL='http://localhost:8089/bookticket';
const DELETE_PASSENGER_BASE_API_URL='http://localhost:8089/deletepassenger';
const PNR_URL="http://localhost:8089/pnrsearch"
 
class passengerService{
    addPassenger(data){
        return axios.post(ADD_PASSENGER_BASE_API_URL,data);
    }
    getPassengers(){
        return axios.get(PASSENGER_BASE_API_URL);
    }

    getPassengersbyid(id){
        console.log(PNR_URL+'/'+id);
        return axios.get(PNR_URL+'/'+id);
    }
    deletePassenger(pnr){
        return axios.delete(DELETE_PASSENGER_BASE_API_URL+'/'+pnr);
    }

}
export default new passengerService()