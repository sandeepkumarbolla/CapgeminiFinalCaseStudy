package casestudy.admin.trains.resource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.passenger.Passenger;
import casestudy.admin.trains.repository.PassengerRepository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PassengerController {
    @Autowired
    private PassengerRepository passengerRepository;

    @PostMapping("/addpassenger")
    public String savePassenger(@RequestBody Passenger passenger) {
        passengerRepository.save(passenger);
        return "added passenger with pnr :" + passenger.getPnr();
    }
    @GetMapping("pnrsearch/{pnr}")
    public Optional<Passenger> getPnr(@PathVariable int pnr){
        return passengerRepository.findById(pnr);
    }

    @GetMapping("/findallpassenger")
    public List<Passenger> getPassenger(){
        return passengerRepository.findAll();
    }

    @DeleteMapping("/deletepassenger/{pnr}")
    public ResponseEntity<Map<String,Boolean>> deletePassenger(@PathVariable int pnr){
        Passenger passenger=passengerRepository.findById(pnr)
                .orElseThrow(()->new ResourceNotFoundException("pnr not exists"));
        passengerRepository.deleteById(pnr);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


}
