package sk.opontes.simplejavareactexample;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
@RequiredArgsConstructor
public class MainController {

    private final BattleService battleService;

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseBody
    public Result getFightResults(@RequestParam(defaultValue = "BarackObama") String userName1,
                                  @RequestParam(defaultValue = "justinbieber") String userName2) {
        return battleService.getWinner(userName1, userName2);
    }
}
