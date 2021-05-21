package casestudy.admin.model;

import org.springframework.data.annotation.Id;

public class Passengers {
	@Id
    private int pnr;
    private int trainNumber;
    private String passengerName;
    private String date;
    private String trainName;
    private String source;
    private String destination;
    private String coachType;
    private String seatNumber;
    private double fare;
    private String email;
    private long phone;
    
	public Passengers(int trainNumber, String passengerName, String date, String trainName, String source,
			String destination, String coachType, String seatNumber,double fare, String email, long phone) {
		
		this.trainNumber = trainNumber;
		this.passengerName = passengerName;
		this.date = date;
		this.trainName = trainName;
		this.source = source;
		this.destination = destination;
		this.coachType=coachType;
		this.seatNumber=seatNumber;
		this.fare = fare;
		this.email = email;
		this.phone = phone;
	}

	
	public String getSeatNumber() {
		return seatNumber;
	}


	public void setSeatNumber(String seatNumber) {
		this.seatNumber = seatNumber;
	}


	public String getCoachType() {
		return coachType;
	}

	public void setCoachType(String coachType) {
		this.coachType = coachType;
	}

	public int getPnr() {
		return pnr;
	}

	public void setPnr(int pnr) {
		int min = 2152200;
        int max = 9869899;
        this.pnr = (int)(Math.random()*(max-min+1)+min);
	}

	public int getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}

	public String getPassengerName() {
		return passengerName;
	}

	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public double getFare() {
		return fare;
	}

	public void setFare(double fare) {
		this.fare = fare;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}
}
