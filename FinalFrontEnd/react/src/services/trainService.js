import axios from 'axios'

const TRAIN_API_BASE_URL='http://localhost:8100/trains/findAllTrains'
const ADD_TRAIN_API_BASE_URL='http://localhost:8081/addTrain'
const UPDATE_TRAIN_API_BASE_URL='http://localhost:8081/update'
const DELETE_TRAIN_API_BASE_URL='http://localhost:8081/deletetrain'

class trainService{
    getTrains(){
        return axios.get(TRAIN_API_BASE_URL);
    }
    addTrain(traindata){
        return axios.post(ADD_TRAIN_API_BASE_URL,traindata);
    }
    updateTrain(traindata,trainNumber){
        return axios.put(UPDATE_TRAIN_API_BASE_URL+'/'+trainNumber,traindata);
    }
    getTrainsById(trainNumber){
        console.log(axios.get(TRAIN_API_BASE_URL+'/'+trainNumber))
        return axios.get(TRAIN_API_BASE_URL+'/'+trainNumber);

    }
    deleteTrain(trainNumber){
        return axios.delete(DELETE_TRAIN_API_BASE_URL+'/'+trainNumber);
    }
}
export default new trainService()