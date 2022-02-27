package sk.opontes.simplejavareactexample;

public class TwitterAuthorizationException extends RuntimeException {
    public TwitterAuthorizationException(String message, Throwable error) {
        super(message, error);
    }
}
