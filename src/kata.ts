export function bouncingBall(h: number, bounce: number, window: number): number {
  if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
    return -1;
  }

  let viewCount = 0;
  while (h > window) {
    h = h * bounce;
    viewCount += h > window ? 2 : 1;
  }

  return viewCount;
}
