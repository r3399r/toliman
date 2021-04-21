export type Question = {
  id: string;
  chapter: string[];
  question: string;
  answer: string;
  hasImage: boolean;
};

export const chapterList: string[] = [
  '數與式',
  '多項式函數',
  '空間向量',
  '空間中的平面與直線',
  '機率',
  '矩陣',
];

export const bank: Question[] = [
  {
    id: '178f3d73349',
    chapter: ['數與式'],
    question: 'sds \\n asd',
    answer: 'asda',
    hasImage: false,
  },
  {
    id: '178f3bsds9de',
    chapter: ['數與式'],
    question: 'ssss',
    answer: 'asda',
    hasImage: false,
  },
  {
    id: '178f3d7c9f1',
    chapter: ['數與式'],
    question: 'sds\\n$$a$$ sd',
    answer: 'asda',
    hasImage: false,
  },
  {
    id: '178f3e607ce',
    chapter: ['多項式函數', '機率', '矩陣'],
    question: 'sda',
    answer: 'dsa',
    hasImage: false,
  },
];
