package casestudy.admin.trains.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.model.Trainslist;
import casestudy.admin.trains.repository.TrainRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class TrainController {



    @Autowired
    private TrainRepository trainRepository;

    @PostMapping("/addTrain")
    public String saveTrain(@RequestBody Train train){
        trainRepository.save(train);
        return "added Train with Id :"+train.getTrainNumber();
    }

    @GetMapping("/findAllTrains1")
    public Trainslist getTrains1(){
    	System.out.print("hell$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    	
    	Trainslist trainslist= new Trainslist(trainRepository.findAll());
        return trainslist;
    }
    
    
    @GetMapping("/findAllTrains")
    public List<Train> getTrains(){
    	System.out.print("hell$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    	
        return trainRepository.findAll();
    }

    @GetMapping("/findAllTrains/{id}")
    public ResponseEntity<Train> getTrain(@PathVariable int id){
        Train train= trainRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Train not found with id"+id));
        return ResponseEntity.ok(train);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Train> updateTrain(@PathVariable int id,Train traindetails){
        Train train= trainRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Train not found with id"+id));

        train.setTrainName(traindetails.getTrainName());
        train.setTrainOrigin(traindetails.getTrainOrigin());
        train.setTrainDestination(traindetails.getTrainDestination());
        train.setTime(traindetails.getTime());
        train.setDate(traindetails.getDate());
        train.setTrainTiers(traindetails.getTrainTiers());

        Train updatedTrain = trainRepository.save(train);
        return ResponseEntity.ok(updatedTrain);
    }



//    public String updateTrain(@PathVariable int id,@RequestBody Train train) throws ResourceNotFoundException {
//
//
//        Optional<Train> saved = trainRepository.findById(id);
//        if(!saved.isPresent()){
//            throw new ResourceNotFoundException("AddOn with the id not exist");}
//        trainRepository.save(train);
//        return "User Updated Successfully!!";
//    }

    @DeleteMapping("/deletetrain/{id}")
    public String deleteTrain(@PathVariable int id){
        Train train=trainRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("train not exists"));

        trainRepository.delete(train);
//        Map<String,Boolean> response=new HashMap<>();
//        response.put("deleted",Boolean.TRUE);
        return "deleted";
    }


}
