import { findAuthorById } from '@/utils/findAuthorById';

describe('findAuthorById', () => {
  it('should return the author with the given ID', () => {
    const authorId = 0;
    const expectedAuthor = {
      id: 0,
      image: '/assets/images/authors/0.png',
      name: 'Floyd Miles',
      post: 'Content Writer',
      company: '@Company',
      from: 'Paris, France',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
      review:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat., consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      facebook: 'https://www.facebook.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
    };

    const result = findAuthorById(authorId);

    expect(result).toEqual(expectedAuthor);
  });

  it('should return undefined if no author is found', () => {
    const authorId = 10;

    const result = findAuthorById(authorId);

    expect(result).toBeUndefined();
  });
});
