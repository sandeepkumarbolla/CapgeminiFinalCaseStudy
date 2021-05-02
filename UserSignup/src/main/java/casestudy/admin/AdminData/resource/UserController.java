package casestudy.admin.AdminData.resource;

import casestudy.admin.AdminData.model.UserSignUp;
import casestudy.admin.AdminData.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin()
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @PostMapping("/signup")
    public String saveUser(@RequestBody UserSignUp userSignUp){
        userRepository.save(userSignUp);
        return "added user with Id :"+ userSignUp.getUserName();
    }

    @GetMapping("/getUser")
    public List<UserSignUp> getUser(){
        return userRepository.findAll();
    }

    @GetMapping("/getUser/{id}")
    public Optional<UserSignUp> getUser(@PathVariable String id){
        return userRepository.findById(id);
    }

    @PutMapping("/updateUser/{id}")
    public String updateUser(@PathVariable String id,@RequestBody UserSignUp userSignUp) throws NotFoundException {

        Optional<UserSignUp> saved =userRepository.findById(id);
        if(!saved.isPresent()){
            throw new NotFoundException("AddOn with the id"+id+" not exist");
        }
        userRepository.save(userSignUp);
        return "User updated successfully";
    }

    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id){
        userRepository.deleteById(id);
        return "Train deleted with Id: "+ id;
    }
}
