import axios from 'axios'


const BOOKING_SEARCH_API='http://localhost:8081/search'


class searchService{
    getsearchtrains(origin,destination,date){
        return axios.get(BOOKING_SEARCH_API+'/'+origin+'/{TrainDestination}/{date}?TrainDestination='+destination+'&date='+date);
    }
}

export default new searchService()