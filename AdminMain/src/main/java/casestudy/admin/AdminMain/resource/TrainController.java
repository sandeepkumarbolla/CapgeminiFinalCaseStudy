package casestudy.admin.AdminMain.resource;

import casestudy.admin.AdminMain.model.Train;
import casestudy.admin.AdminMain.repository.TrainRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @GetMapping("/findAllTrains")
    public List<Train> getTrains(){
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
    public ResponseEntity<Map<String,Boolean>> deleteTrain(@PathVariable int id){
        Train train=trainRepository.findById(id)
                .orElseThrow(()->new ResourceNotFoundException("train not exists"));

        trainRepository.delete(train);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
