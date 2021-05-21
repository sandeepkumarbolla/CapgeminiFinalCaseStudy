package casestudy.admin.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="TrainDetails")
public class Train {
    @Id
    private int trainNumber;
    private String trainName;
    private String trainOrigin;
    private String trainDestination;
    private String date;
    private String time;
    private TrainFares trainFares;
    private TrainTiers trainTiers;
    public Train(){

    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Train(int trainNumber, String trainName, String trainOrigin, String trainDestination, String date, String time, TrainFares trainFares, TrainTiers trainTiers) {
        this.trainNumber = trainNumber;
        this.trainName = trainName;
        this.trainOrigin = trainOrigin;
        this.trainDestination = trainDestination;
        this.time = time;
        this.date = date;
         this.trainFares=trainFares;
        this.trainTiers = trainTiers;
    }

    public int getTrainNumber() {
        return trainNumber;
    }

    public void setTrainNumber(int trainNumber) {
        this.trainNumber = trainNumber;
    }

    public String getTrainName() {
        return trainName;
    }

    public void setTrainName(String trainName) {
        this.trainName = trainName;
    }

    public String getTrainOrigin() {
        return trainOrigin;
    }

    public void setTrainOrigin(String trainOrigin) {
        this.trainOrigin = trainOrigin;
    }

    public String getTrainDestination() {
        return trainDestination;
    }

    public void setTrainDestination(String trainDestination) {
        this.trainDestination = trainDestination;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    
    
    
    
     

	  
	public TrainFares getTrainFares() {
		return trainFares;
	}

	public void setTrainFares(TrainFares trainFares) {
		this.trainFares = trainFares;
	}

	public TrainTiers getTrainTiers() {
        return trainTiers;
    }

    public void setTrainTiers(TrainTiers trainTiers) {
        this.trainTiers = trainTiers;
    }
}
