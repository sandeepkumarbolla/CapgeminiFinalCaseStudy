package casestudy.admin.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import casestudy.admin.model.Passengers;

public interface PassengerRepository extends MongoRepository<Passengers,Integer> {

}
