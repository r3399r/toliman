import lodash from 'lodash';
import { bank, Question } from 'src/model/bank';

export const getAllQuestions = (): { [key: string]: Question } => {
  return lodash.keyBy(bank, 'id');
};

export const getQuestion = (id: string): Question => {
  const allQuestions = getAllQuestions();

  return allQuestions[id];
};
