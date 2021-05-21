package casestudy.admin.hystrix;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import casestudy.admin.model.Train;

@Service
public class HystrixGetTrain {
	

    @Autowired
    private RestTemplate restTemplate;

    public String getFallBackAddpassenger(Train g){
        return "faild";
    }

    // this is circute breaker for the getTrainSeats
    @HystrixCommand(fallbackMethod = "getFallBackAddpassenger",commandProperties = {
        @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds",value="2000"),
        @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold",value = "5"),
        @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage",value = "50"),
        @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds",value = "5000"),
   })
   //this is the method which will fetch the data from the passenger microservice 
    public Train getTrainseats(int x){
        // String a="http://localhost:8092/passenger/traindate/"+trainno+"/"+date+"/"+si+"/"+di;
        // System.out.println("$$$$$$$$$$$$$$$$$$$$$$ "+a);
        Train train= restTemplate.getForObject("http://trains/findAllTrains/"+x, Train.class);
        return train;
    }

    

}
