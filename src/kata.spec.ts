import { kata } from './kata';

describe('Test here', () => {
  it('should return obj', () => {
    const result = kata({ 123: 321 });

    expect(result).toEqual({ 123: 321 });
  });
});
