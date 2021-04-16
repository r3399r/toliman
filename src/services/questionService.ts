import { uploadFile } from './dropboxService';
import { addRow } from './googleService';

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
