package casestudy.admin.hystrix;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.client.RestTemplate;

import com.netflix.hystrix.contrib.javanica.annotation.HystrixCommand;
import com.netflix.hystrix.contrib.javanica.annotation.HystrixProperty;

import casestudy.admin.model.Train;

@Service
public class HystrixUpdateTrain {

    @Autowired
    private RestTemplate rt;

    public String getFallBackUpdateTrain(Train g){
        return "updation failed due to server down";
    }

    // this is circute breaker for the GetUpdateTrain method
    @HystrixCommand(fallbackMethod = "getFallBackUpdateTrain",commandProperties = {
        @HystrixProperty(name = "execution.isolation.thread.timeoutInMilliseconds",value="2000"),
        @HystrixProperty(name = "circuitBreaker.requestVolumeThreshold",value = "5"),
        @HystrixProperty(name = "circuitBreaker.errorThresholdPercentage",value = "50"),
        @HystrixProperty(name = "circuitBreaker.sleepWindowInMilliseconds",value = "5000"),
   })
   
    public String getUpdateTrain(@RequestBody Train train){
         
        String result= rt.postForObject("http://trains/addTrain",train, String.class);
        return result;
    }

}
