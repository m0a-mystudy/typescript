export type Action =
{
  type:'COUNT_UP'
}|
{
  type: 'COUNT_DOWN'
};



export function countUp():Action{
  return {
    type: 'COUNT_UP'
  };
}

export function countDown():Action {
  return {
    type: 'COUNT_DOWN'
  };
}

