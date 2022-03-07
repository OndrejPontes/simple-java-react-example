import React from "react";
import { TwitterBattleContextType } from "./@types/TwitterBattle";
import "./App.css";
import TwitterBattleForm from "./components/TwitterBattleForm";
import TwitterBattleResult from "./components/TwitterBattleResult";
import TwitterBattleProvider, { TwitterBattleContext } from "./context/TwitterBattleContext";


function App() {
  const { result } = React.useContext(TwitterBattleContext) as TwitterBattleContextType;

  return (
      <div className="App">
        {result.isEmpty ? <TwitterBattleForm/> : <TwitterBattleResult/>}
      </div>
  );
}

export default App;
