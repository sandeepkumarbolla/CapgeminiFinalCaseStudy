package casestudy.security.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import casestudy.security.models.ERole;
import casestudy.security.models.Role;

public interface RoleRepository extends MongoRepository<Role, String> {
  Optional<Role> findByName(ERole name);
}
