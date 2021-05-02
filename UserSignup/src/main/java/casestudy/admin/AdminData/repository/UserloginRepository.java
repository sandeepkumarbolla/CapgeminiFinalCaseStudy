package casestudy.admin.AdminData.repository;

import casestudy.admin.AdminData.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserloginRepository extends MongoRepository<User,String> {
}
