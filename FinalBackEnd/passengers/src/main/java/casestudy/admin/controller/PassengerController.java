package casestudy.admin.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import casestudy.admin.hystrix.HystrixGetTrain;
import casestudy.admin.hystrix.HystrixUpdateTrain;
import casestudy.admin.model.Passengers;
import casestudy.admin.model.Train;
import casestudy.admin.model.TrainFares;
import casestudy.admin.model.TrainTiers;
import casestudy.admin.model.Trainslist;
import casestudy.admin.repository.PassengerRepository; 


@CrossOrigin()
@RestController
public class PassengerController {
	@Autowired
	RestTemplate restTemplate;
	
    @Autowired
    private PassengerRepository passengerRepository;
    
    @Autowired
    private HystrixGetTrain hystrixGetTrain;
    
    @Autowired
    private HystrixUpdateTrain hystrixUpdateTrain;

    @PostMapping("/bookticket")
    public Train savePassenger(@RequestBody Passengers passenger) {
    //	System.out.println("hello$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
//    	Trainslist trainslist=restTemplate.getForObject("http://localhost:8081/findAllTrains1",Trainslist.class);
//		System.out.print(trainslist.getTrain());
    	//Train train=restTemplate.getForObject("http://trains/findAllTrains/"+passenger.getTrainNumber(),Train.class);
	
    	
    	
    	
    	Train train;
    	int t=passenger.getTrainNumber();
    	train=hystrixGetTrain.getTrainseats(t);
    	System.out.println(train);
    	String type=passenger.getCoachType();
    	System.out.println("class of coachtype is"+ passenger.getCoachType().getClass());
    	System.out.println("type:"+type);
    // System.out.print(train.getTrainFares().getAcFare());
    	int acfare=train.getTrainFares().getAcFare();
    	int sleeperfare=train.getTrainFares().getSleeperFare();
    	System.out.println("acfare:"+acfare);
    	System.out.println("sleeperfare:"+sleeperfare);
    	if(passenger.getCoachType().equals("sleeper")) {
    		passenger.setFare(sleeperfare);
    		System.out.println("type=sleeper: "+passenger.getFare());
    		System.out.println("type: "+type+"sleeper$$$$$$$$$");
    		int seats=train.getTrainTiers().getSleeper();
    		String seatNumber="s"+seats/70+" "+(seats%70+1);
    		passenger.setSeatNumber(seatNumber);
    		System.out.println(passenger.getSeatNumber());
    		TrainTiers trainTiers=train.getTrainTiers();
    		
    		seats=seats-1;
    		trainTiers.setSleeper(seats);
    		train.setTrainTiers(trainTiers);
    		System.out.println(train.getTrainTiers().getAc());
    	}
    	
    	else {
    		
    		passenger.setFare(acfare);
    		System.out.println("type=ac: "+passenger.getFare());
    		System.out.println("type: "+type+"AC%%%%%%%%%%%%%%%%");
    		
    		int seats=train.getTrainTiers().getAc(); 
    		String seatNumber="B"+seats/70+" "+(seats%70+1);
    		passenger.setSeatNumber(seatNumber);
    		System.out.println(passenger.getSeatNumber());
    		TrainTiers trainTiers=train.getTrainTiers();
    		
    		seats=seats-1;
    		trainTiers.setAc(seats);
    		train.setTrainTiers(trainTiers);
    		System.out.println(train.getTrainTiers().getAc());
    	}
    	 
    	System.out.println(passenger.getFare());
    	
    	int n=passenger.getTrainNumber();
//		if(train.getTrainNumber()==n) {
//			System.out.println("train number exists");
//		}
//		else {
//			System.out.println("False");
//		}
//		System.out.println(n);
		
        passengerRepository.save(passenger);
        
        String v=hystrixUpdateTrain.getUpdateTrain(train);
        
        System.out.print(v);
        
      // ResponseEntity<String> v=restTemplate.postForEntity("http://trains/addTrain", train,String.class);
        //restTemplate.postForEntity("http://trains/addTrain", train, Train.class);
       // ResponseEntity<Long> postResponse = restTemplate.postForEntity("http://localhost:8082/customer/user/add", customer, Long.class);
        //return "added passenger with pnr :" + passenger.getPnr();
        
        return train;
    }
    
    
    
    
    @GetMapping("pnrsearch/{pnr}")
    public Optional<Passengers> getPnr(@PathVariable int pnr){
        return passengerRepository.findById(pnr);
    }

    @GetMapping("/findallpassenger")
    public List<Passengers> getPassenger(){
    	System.out.println("hello$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
		
        return passengerRepository.findAll();
    }

    @DeleteMapping("/deletepassenger/{pnr}")
    public ResponseEntity<Map<String,Boolean>> deletePassenger(@PathVariable int pnr){
     
    	
        Passengers passenger=passengerRepository.findById(pnr)
                .orElseThrow(()->new ResourceNotFoundException("pnr not exists"));
        
        System.out.println(passenger.getTrainNumber());
        Train train;
        int t=passenger.getTrainNumber();
        train=hystrixGetTrain.getTrainseats(t);
        String type=passenger.getCoachType();
        if(passenger.getCoachType().equals("AC")) {
        	int seats=train.getTrainTiers().getAc();
        	seats=seats+1;
        	TrainTiers trainTiers=train.getTrainTiers();
        	trainTiers.setAc(seats);
        	train.setTrainTiers(trainTiers);
        	System.out.println(train.getTrainTiers().getAc());
        }
        else
        {
        	int seats=train.getTrainTiers().getSleeper();
        	seats=seats+1;
        	TrainTiers trainTiers=train.getTrainTiers();
        	trainTiers.setSleeper(seats);
        	train.setTrainTiers(trainTiers);
        	System.out.println(train.getTrainTiers().getSleeper());
        }
        
		
		 String v=hystrixUpdateTrain.getUpdateTrain(train);
		
        
        passengerRepository.deleteById(pnr);
        Map<String,Boolean> response=new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
//    
//    @GetMapping("/showtrains")
//	public ResponseEntity<?> trainsDetails() {
//    	System.out.println("hello$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$4");
//    	
////    	Trainslist trainslist=restTemplate.getForObject("http://localhost:8081/findAllTrains1",Trainslist.class);
//    	Train train=restTemplate.getForObject("http://localhost:8081/findAllTrains/54856",Train.class);
//		 
//		return ResponseEntity.ok(train.getTrainTiers().getSleeper());
//		
//	}

}
