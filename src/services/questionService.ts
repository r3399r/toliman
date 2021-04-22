import lodash from 'lodash';
import { bank, Question } from 'src/model/bank';

let questionsByKey: { [key: string]: Question };

export const getAllQuestions = (): { [key: string]: Question } => {
  if (questionsByKey === undefined) questionsByKey = lodash.keyBy(bank, 'id');

  return questionsByKey;
};

export const getQuestion = (id: string): Question | undefined => {
  const allQuestions = getAllQuestions();

  return allQuestions[id];
};

export const getQuestions = (ids: string[]): Question[] => {
  const allQuestions = getAllQuestions();

  return ids.map((id: string) => allQuestions[id]);
};
