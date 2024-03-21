
export function buildArr<T>(
  size: number, 
  getItem: (i: number, xs: T[]) => T,
  skip: (i: number, xs: T[]) => boolean = () => false
): T[] {
  const rtnArr: T[] = [];

  for(let i = 0; i < size; i++)
    if(!skip(i, rtnArr))
      rtnArr.push(getItem(i, rtnArr))

  return rtnArr;
}