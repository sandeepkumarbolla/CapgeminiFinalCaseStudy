package casestudy.admin.AdminMain;


import casestudy.admin.AdminMain.model.Train;
import casestudy.admin.AdminMain.resource.TrainController;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.http.*;
import org.springframework.web.client.HttpClientErrorException;

import static org.junit.Assert.*;

@SpringBootTest(classes = AdminMainApplication.class, webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class TrainControllerIntegrationTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Autowired
    private TrainController trainController;

    @LocalServerPort
    private int port;

    private String getRootUrl() {
        return "http://localhost:" + port;
    }

    @Test
    public void contextLoads() {

    }

    @Test
    public void testGetAllTrains() {
        HttpHeaders headers = new HttpHeaders();
        HttpEntity<String> entity = new HttpEntity<String>(null, headers);
        ResponseEntity<String> response = restTemplate.exchange(getRootUrl() + "/findAllTrains",
                HttpMethod.GET, entity, String.class);
        assertNotNull(response.getBody());
    }

    @Test
    public void testGetTrainById() {
        //Train train = restTemplate.getForObject(getRootUrl()+"/findAllTrains/58624", Train.class);
        Train train = restTemplate.getForObject(getRootUrl() + "findAllTrains", Train.class);
        System.out.println(train.getTrainNumber());
        assertNotNull(train);
    }

    @Test
    public void testDeleteTrain() {
        int id = 54795;
        Train train = restTemplate.getForObject(getRootUrl() + "/deleteTrain/" + id, Train.class);
        assertNotNull(train);
        restTemplate.delete(getRootUrl() + "/deleteTrain/" + id);
        try {
            train = restTemplate.getForObject(getRootUrl() + "/deleteTrain/" + id, Train.class);
        } catch (final HttpClientErrorException e) {
            assertEquals(e.getStatusCode(), HttpStatus.NOT_FOUND);
        }
    }
}
