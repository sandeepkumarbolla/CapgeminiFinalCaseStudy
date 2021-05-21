package casestudy.admin.AdminMain;


import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.web.client.HttpClientErrorException;

import casestudy.admin.trains.AdminMainApplication;
import casestudy.admin.trains.model.Train;
import casestudy.admin.trains.passenger.Passenger;
import casestudy.admin.trains.resource.TrainController;

import static org.junit.Assert.*;
@SpringBootTest(classes = AdminMainApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)

public class PassengerControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;



    @LocalServerPort
    private int port;

    private String getRootUrl() {
        return "http://localhost:" + port;
    }

    @Test
    public void contextLoads() {

    }

    @Test
    public void testGetAllPassengers() {
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findAllPassengers",
                HttpMethod.GET, entity, String.class);
        assertNotNull(response.getBody());
    }

    @Test
    public void testGetTrainById() {
        Passenger passenger = restTemplate.getForObject(getRootUrl() + "pnrsearch/pnr", Passenger.class);
        System.out.println(passenger.getPnr());
        assertNotNull(passenger);
    }

    @Test
    public void testDeletePassenger() {
        int id = 54795;
        Passenger passenger= restTemplate.getForObject(getRootUrl() + "/deletePassenger/" + id, Passenger.class);
        assertNotNull(passenger);
        restTemplate.delete(getRootUrl() + "/deletePassenger/" + id);
        try {
            passenger = restTemplate.getForObject(getRootUrl() + "/deletePassenger/" + id, Passenger.class);
        } catch (final HttpClientErrorException e) {
            assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
        }
    }
}
