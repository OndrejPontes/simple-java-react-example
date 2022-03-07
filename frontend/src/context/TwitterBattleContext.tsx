import axios from 'axios';
import * as React from 'react';
import { IResult, TwitterBattleContextType } from '../@types/TwitterBattle';

export const TwitterBattleContext = React.createContext<TwitterBattleContextType | null>(null);

const TwitterBattleProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [result, setResult] = React.useState<IResult>({user1: "", score1: 0, user2: "", score2: 0, isEmpty: true });
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");

  const getResult = (username1: string, username2: string) => {
    setLoading(true);
    axios
      .create({
        baseURL: "http://localhost/api/twitter_fight",
        headers: {
          "Content-type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost"
        },
      })
      .get<IResult>("/", {
        params: { userName1: username1, username2: username2 },
      })
      .then((response) => setResult({...response.data, isEmpty: false}))
      .catch((error: Error) => setErrorMessage(error.message))
      .finally(() => setLoading(false));
  }
  const clearResult = () => setResult({...result, isEmpty: true});
  const clearErrorMessage = () => setErrorMessage("");

  return (
    <TwitterBattleContext.Provider value={{ result, isLoading, errorMessage, getResult, clearResult, clearErrorMessage }}>
      {children}
    </TwitterBattleContext.Provider>
  );
};

export default TwitterBattleProvider;