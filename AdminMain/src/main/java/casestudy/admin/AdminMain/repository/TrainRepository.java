package casestudy.admin.AdminMain.repository;

import casestudy.admin.AdminMain.model.Train;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface TrainRepository extends MongoRepository<Train, Integer> {

    @Query(value = "{$and:[{'trainOrigin':?0},{'trainDestination':?1}]}")
    List<Train> getListBy(String trainOrigin,String trainDestination);


}
