import { Category } from '../types';

export interface ListState {
  categories: Category[];
}

const initailState: ListState = {
  categories: [
    {
      type: '콜드 브루 커피',
      products: [
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001272]_20180409150901440.jpg',
          name: '나이트로 쇼콜라',
          price: 6100,
        },
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000001275]_20180409150826087.jpg',
          name: '나이트로 쇼콜라 클라우드',
          price: 6100,
        },
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2017/03/[9200000000479]_20170328134443491.jpg',
          name: '나이트로 콜드 브루',
          price: 5800,
        },
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2019/04/[9200000002081]_20190409153909754.jpg',
          name: '돌체 콜드 브루',
          price: 5800,
        },
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2017/04/[9200000000487]_20170405152830656.jpg',
          name: '바닐라 크림 콜드 브루',
          price: 5500,
        },
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2016/04/[9200000000038]_20160408135802583.jpg',
          name: '콜드 브루',
          price: 4500,
        },
        {
          src:
            'http://image.istarbucks.co.kr/upload/store/skuimg/2018/04/[9200000000949]_20180410163003570.jpg',
          name: '콜드 폼 콜드 브루',
          price: 5800,
        },
      ],
    },
  ],
};

const GET_LIST = 'GET_LIST';

interface GetAction {
  type: typeof GET_LIST;
  payload: Category[];
}

export function getList(payload: Category[]) {
  return {
    type: GET_LIST,
    payload,
  };
}

type Action = GetAction;

export function listReducer(state = initailState, action: Action): ListState {
  switch (action.type) {
    case GET_LIST:
      return {
        categories: action.payload,
      };
    default:
      return state;
  }
}
