package casestudy.admin.AdminData.resource;

import casestudy.admin.AdminData.model.User;
import casestudy.admin.AdminData.repository.UserRepository;
import casestudy.admin.AdminData.repository.UserloginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin()
public class AdminController {
    @Autowired
    private UserloginRepository userloginRepository;

    @PostMapping("/addUser")
    public String saveUser(@RequestBody User user){
        userloginRepository.save(user);
        return "added Train with Id :"+ user.getEmail();
    }

    @GetMapping("/findAllUser")
    public List<User> getUser(){
        return userloginRepository.findAll();
    }

    @GetMapping("/findAllUser/{id}")
    public Optional<User> getUser(@PathVariable String id){
        return userloginRepository.findById(id);
    }

    @PutMapping("/update/{id}")
    public String updateUser(@PathVariable String id,@RequestBody User user) throws NotFoundException {

        Optional<User> saved =userloginRepository.findById(id);
        if(!saved.isPresent()){
            throw new NotFoundException("AddOn with the id not exist");
        }
        userloginRepository.save(user);
        return "User updated successfully";
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id){
        userloginRepository.deleteById(id);
        return "Train deleted with Id: "+ id;
    }
}
