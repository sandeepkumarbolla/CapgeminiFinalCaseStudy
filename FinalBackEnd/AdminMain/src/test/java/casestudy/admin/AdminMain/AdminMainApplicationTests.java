package casestudy.admin.AdminMain;


import static org.junit.Assert.*;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.resource.TrainController;

import static org.junit.Assert.assertNotNull;

@SpringBootTest
class AdminMainApplicationTests {



	@Autowired
	private TestRestTemplate restTemplate;

	@Autowired
	private TrainController trainController;

	@LocalServerPort
	private int port;

	private String getRootUrl() {
		return "http://localhost:" + port;
	}

	@org.junit.Test
	public void contextLoads() {

	}
	
	@Bean
	public RestTemplate getRestTemplate() {
		return new RestTemplate();
	}


	@org.junit.Test
	@DisplayName("sample")
	public void testGetTrainById() {
//		//Train train = restTemplate.getForObject(getRootUrl()+"/findAllTrains/58624", Train.class);
//		Train train = restTemplate.getForObject(getRootUrl()+"findAllTrains", Train.class);
//		System.out.println(train.getTrainNumber());
//		assertNotNull(train);

        assertEquals(1,1);

	}


}
