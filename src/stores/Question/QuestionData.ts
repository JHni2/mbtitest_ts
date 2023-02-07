import { IQuestion } from './types';

export const QuestionData: IQuestion[] = [
  {
    id: 1,
    title: '새로운 고양이를 데려왔다! 나의 반응은?',
    answera: '뭐해? 이름은 뭐로 해주지? 자꾸 말 걸고 싶다.',
    answerb: '혼자만의 시간이 필요하겠지? 적응할 시간을 준다. ',
    type: 'EI',
  },
  {
    id: 2,
    title: '고양이에 대한 모든 것이 궁금해졌다. 나의 행동은?',
    answera:
      '고양이 관련 커뮤니티에 들어 다른 집사들과 소통하며 지식을 쌓는다.',
    answerb: '혼자 검색하여 정보를 찾아본다. ',
    type: 'EI',
  },
  {
    id: 3,
    title: '아무리 봐도 우리 고양이가 정말 예쁜 것 같다. 나의 행동은?',
    answera:
      '사람들한테 자랑해야지..! 인스타를 만들고 사진을 공유하고 소통한다.',
    answerb: '사진을 찍어서 사진첩에 간직하고 나만 본다.',
    type: 'EI',
  },
  {
    id: 4,
    title: '고양이 유튜브를 시작하려고 한다. 나는 어떤 유튜브를 만들고 싶을까?',
    answera: '다른 유튜버들을 가이드 삼아 비슷하게 만든다.',
    answerb: '새롭거나 자유로운 방식으로 만든다. ',
    type: 'SN',
  },
  {
    id: 5,
    title:
      '고양이에 대해서 모르는 부분들을 검색하고 있다. 내가 글을 읽는 방법은?',
    answera: '꼼꼼하게 정독한다.',
    answerb: '전체적인 의미를 파악해 읽는다. ',
    type: 'SN',
  },
  {
    id: 6,
    title: '고양이 밥을 주려고 한다. 나의 방법은?',
    answera: '손, 눈대중으로 대충 이정도면 되겠지? 하고 급여한다.',
    answerb: '칼로리를 정확히 맞추고 계량해서 급여한다. ',
    type: 'SN',
  },
  {
    id: 7,
    title: '같은 집사 친구가 고양이가 아픈 것 같아 슬퍼하고 있다. 나의 반응은?',
    answera:
      '"이렇게 하면 어때?" 해결책을 함께 생각하며 정보들을 같이 찾아본다.',
    answerb: '"어쩌면 좋아.." 위로를 해준다. ',
    type: 'TF',
  },
  {
    id: 8,
    title: '고양이를 키우는데 가족과의 마찰이 생겼다. 나의 행동은?',
    answera: '나의 생각과 논리를 가족에게 우선적으로 설명한다.',
    answerb:
      '가족의 기분을 상하지 않게 하기 위해서 나의 의견을 말하기 전에 생각부터 한다. ',
    type: 'TF',
  },
  {
    id: 9,
    title: '고양이가 아파서 병원을 고르기 위해 리뷰를 보았다. 내가 갈 병원은?',
    answera: '성과가 중요하지! 좋은 성과를 낸 병원.',
    answerb: '사람이 중요해! 원장님 성격이 좋은 병원. ',
    type: 'TF',
  },
  {
    id: 10,
    title: '고양이의 화장실 청소 주기를 정한다면?',
    answera: '매일 고양이가 볼 일을 볼 때마다 바로 청소한다.',
    answerb: '하루에 한 번씩 화장실을 청소한다. ',
    type: 'JP',
  },
  {
    id: 11,
    title: '고양이 사료가 우연히 여러 종류가 생겼다. 급여 방법은?',
    answera:
      '사료를 조금식 급여해서 고양이의 기호를 테스트해보고 질리지 않도록 번갈아 급여한다.',
    answerb: '집히는 대로 무작위로 급여한다. ',
    type: 'JP',
  },
  {
    id: 12,
    title: '자기 전의 나는?',
    answera: '내일 할 일을 미리미리 정해놓고 잔다.',
    answerb: '누우면 장땡! 일단 눕고 생각한다. ',
    type: 'JP',
  },
];
