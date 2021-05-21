package casestudy.admin.controller;

 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import casestudy.admin.model.Train;
import casestudy.admin.repository.TrainRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin()
public class TicketBooking {

    @Autowired
    private TrainRepository trainRepository;

    @GetMapping("/search/{trainOrigin}/{TrainDestination}/{date}")
    public List<Train> getListBy(@PathVariable String trainOrigin, String TrainDestination, String date) {
        List<Train> saved = trainRepository.getListBy(trainOrigin, TrainDestination);
        ArrayList<Train> result =new ArrayList<Train>();
        for (Train trains : saved) {

            if (trains.getDate().equals(date)) {
                result.add(trains);
            }
        }
        return result;
    }

}