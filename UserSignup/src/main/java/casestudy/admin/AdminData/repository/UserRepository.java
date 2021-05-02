package casestudy.admin.AdminData.repository;

import casestudy.admin.AdminData.model.UserSignUp;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<UserSignUp,String> {
}
