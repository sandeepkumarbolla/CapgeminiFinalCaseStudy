package casestudy.admin.AdminData.resource;

public class NotFoundException extends Throwable {
    public NotFoundException(String s) {
        System.out.println("file not found"+s);
    }
}
