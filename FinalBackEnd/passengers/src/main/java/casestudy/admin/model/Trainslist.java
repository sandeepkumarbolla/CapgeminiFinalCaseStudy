package casestudy.admin.model;

import java.util.List;

public class Trainslist {
	private List<Train> train;
	
	
	
	
//	@Override
//	public String toString() {
//		return train + ", getTrain()=" + getTrain() + ", getClass()=" + getClass()
//				+ ", hashCode()=" + hashCode() + ", toString()=" + super.toString();
//	}

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
