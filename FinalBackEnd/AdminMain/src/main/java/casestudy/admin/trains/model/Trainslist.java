package casestudy.admin.trains.model;

import java.util.List;

public class Trainslist {
	private List<Train> train;
	
	

	public Trainslist() {
	}

	public Trainslist(List<Train> train) {
		this.train = train;
	}

	public List<Train> getTrain() {
		return train;
	}

	public void setTrain(List<Train> train) {
		this.train = train;
	}

}
