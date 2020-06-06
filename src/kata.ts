function next(numberString: string): string {
  const value = numberString.split('').reduce((p, c) => p * +c, 1);
  return `${value}`;
}

export function persistence(number: number): number {
  let nextResult = `${number}`;
  let count = 0;
  while (nextResult.length > 1) {
    count++;
    nextResult = next(nextResult);
  }

  return count;
}
