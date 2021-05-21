package casestudy.security.models;

public class TrainTiers {
    public int ac;
    public int sleeper;

    protected TrainTiers(){}

    public int getAc() {
        return ac;
    }

    public void setAc(int ac) {
        this.ac = ac;
    }

    public int getSleeper() {
        return sleeper;
    }

    public void setSleeper(int sleeper) {
        this.sleeper = sleeper;
    }
}
