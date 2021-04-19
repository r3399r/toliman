import { GoogleSpreadsheetRow } from 'google-spreadsheet';
import { AnySrvRecord } from 'node:dns';
import { uploadFile } from './dropboxService';
import { addRow, getRows } from './googleService';

export type Chapter = {
  id: string;
  chapter: string;
};

export type Question = {
  id: string;
  chapterId: string;
  question: string;
  answer: string;
  hasImage: boolean;
};

export const uploadQuestion = async (
  question: Question,
  author: string,
  image: File | undefined,
) => {
  if (image !== undefined)
    await uploadFile({ contents: image, path: `/toliman/${question.id}.jpg` });

  await addRow(question.chapterId, { id: question.id, json: JSON.stringify(question), author });
};

export const getAllQuestions = async (): Promise<GoogleSpreadsheetRow[]> => {
  const chapterList = await getRows('372130198');
  let questions: GoogleSpreadsheetRow[] = [];
  await Promise.all(
    chapterList.map(async (chapter: any) => {
      const rows = await getRows(chapter.id);
      questions = questions.concat(rows);
    }),
  );

  return questions;
};
