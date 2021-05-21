package casestudy.admin.trains.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import casestudy.admin.trains.passenger.Passenger;

public interface PassengerRepository extends MongoRepository<Passenger,Integer> {

}
