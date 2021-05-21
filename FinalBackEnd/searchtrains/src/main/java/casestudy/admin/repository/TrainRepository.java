package casestudy.admin.repository;
 
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import casestudy.admin.model.Train;

import java.util.List;

public interface TrainRepository extends MongoRepository<Train, Integer> {

    @Query(value = "{$and:[{'trainOrigin':?0},{'trainDestination':?1}]}")
    List<Train> getListBy(String trainOrigin,String trainDestination);

}
