import { persistence } from './kata';

describe('Initial Tests', function () {
  it('should return expected result', () => {
    expect(persistence(39)).toEqual(3);
    expect(persistence(4)).toEqual(0);
    expect(persistence(25)).toEqual(2);
    expect(persistence(999)).toEqual(4);
  });
});
