package casestudy.admin.AdminMain.repository;

import casestudy.admin.AdminMain.passenger.Passenger;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PassengerRepository extends MongoRepository<Passenger,Integer> {

}
