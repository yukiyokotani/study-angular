import { MiliLiterPipe } from './mili-liter.pipe';

describe('MiliLiterPipe', () => {
  const pipe = new MiliLiterPipe();
  describe('空文字が与えられた場合', () => {
    it('そのまま空文字が表示される', () => {
      expect(pipe.transform('')).toBe('');
    });
  });

  describe('数字が与えられた場合', () => {
    it('数字にmlが付いた空文字が表示される', () => {
      expect(pipe.transform(500)).toBe('500 ml');
    });
  });
});
