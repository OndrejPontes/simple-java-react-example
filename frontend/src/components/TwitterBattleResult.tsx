import * as React from 'react';
import { TwitterBattleContext } from '../context/TwitterBattleContext';
import { TwitterBattleContextType, IResult } from '../@types/TwitterBattle';

const TwitterBattleResult: React.FC = () => {
    const { result, clearResult } = React.useContext(TwitterBattleContext) as TwitterBattleContextType;

    const winnerMessage = result.score1 == result.score2 ?
        <label>Draw. Both users have same score.</label> :
        <label>Winner is: {result.score1 > result.score1 ? result.user1 : result.user2}</label>;

    return (
        <div>
            {winnerMessage}
            <div>
                <div>
                    <label>{result.user1}</label>
                    {result.score1}
                </div>
                <div>
                    <label>{result.user2}</label>
                    {result.score2}
                </div>
            </div>
            <button onClick={clearResult}>Start again</button>
        </div>
    );
};

export default TwitterBattleResult;