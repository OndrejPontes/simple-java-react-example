import * as React from 'react';
import { TwitterBattleContextType } from '../@types/TwitterBattle';
import { TwitterBattleContext } from '../context/TwitterBattleContext';

const TwitterBattleForm: React.FC = () => {
  const { getResult } = React.useContext(TwitterBattleContext) as TwitterBattleContextType;
  const [username1, setUsername1] = React.useState<string>("BarackObama");
  const [username2, setUsername2] = React.useState<string>("justinbieber");

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      getResult(username1, username2);
  }

  return (
    <form className="twitterBattleForm" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <div>
          <label htmlFor="username1">First username:</label>
          <input onChange={(e) => setUsername1(e.currentTarget.value)} type="text" id="username1" value={username1} />
        </div>
        <div>
          <label htmlFor="username2">Second username:</label>
          <input onChange={(e) => setUsername2(e.currentTarget.value)} type="text" id="username2" value={username2} />
        </div>
      </div>
      <button>Fight!</button>
    </form>
  );
};

export default TwitterBattleForm;