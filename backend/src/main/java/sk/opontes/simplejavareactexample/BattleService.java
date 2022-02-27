package sk.opontes.simplejavareactexample;

import io.github.redouane59.twitter.TwitterClient;
import io.github.redouane59.twitter.dto.user.UserV2;
import io.github.redouane59.twitter.signature.TwitterCredentials;
import java.io.File;
import java.util.Objects;
import org.apache.commons.lang3.SystemUtils;
import org.springframework.stereotype.Service;

@Service
public class BattleService {

    public Result getWinner(String userName1, String userName2) {
        var user1 = TwitterClientSingleton.getInstance().getUserFromUserName(userName1);
        var user2 = TwitterClientSingleton.getInstance().getUserFromUserName(userName2);

        return new Result(user1.getName(), getFinalPoints(user1), user2.getName(), getFinalPoints(user2));
    }

    private Integer getFinalPoints(UserV2 user) {
        return user.getTweetCount() + user.getFollowersCount() * 5 + user.getFollowingCount() * 2;
    }

    // Normally, I would prefer to put this to different class, but for this simple project it is not necessary.
    private static class TwitterClientSingleton {
        private static TwitterClient twitterClient = null;

        public static TwitterClient getInstance() {
            if (Objects.isNull(twitterClient)) {
                try {
                    var separator = SystemUtils.IS_OS_WINDOWS ? "\\" : "/";
                    var path = "target" + separator + "classes" + separator + "twitter.json";
                    twitterClient = new TwitterClient(TwitterClient.OBJECT_MAPPER
                            .readValue(new File(path), TwitterCredentials.class));
                } catch (Exception e) {
                    throw new TwitterAuthorizationException("Problem with parsing twitter.json file.", e);
                }
            }

            return twitterClient;
        }
    }
}
