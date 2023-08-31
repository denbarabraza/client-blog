import { checkPathActive } from '@/utils/checkPathActive';

describe('checkPathActive', () => {
  it('should return true if the path name matches the path', () => {
    const pathName = '/ru/some-page';
    const path = '/some-page';

    const isActive = checkPathActive(pathName, path);

    expect(isActive).toBe(true);
  });

  it('should return false if the path name does not match the path', () => {
    const pathName = '/en/another-page';
    const path = '/some-page';

    const isActive = checkPathActive(pathName, path);

    expect(isActive).toBe(false);
  });
});
