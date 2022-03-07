export interface IResult {
  user1: string;
  score1: number;
  user2:string;
  score2: number;
  isEmpty: boolean;
}

export type TwitterBattleContextType = {
  result: IResult;
  isLoading: boolean;
  errorMessage: string;
  getResult: (username1: string, username2: string) => void;
  clearResult: () => void;
  clearErrorMessage: () => void;
};