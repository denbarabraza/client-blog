import { contactUsSchema, newsLetterFooterSchema } from '@/constants/validation';

describe('Schema Tests', () => {
  it('should pass validation for a valid email in newsLetterFooterSchema', async () => {
    const validData = {
      email: 'test@example.com',
    };

    const isValid = await newsLetterFooterSchema.isValid(validData);

    expect(isValid).toBe(true);
  });

  it('should fail validation for an invalid email in newsLetterFooterSchema', async () => {
    const invalidData = {
      email: 'invalid-email',
    };

    const isValid = await newsLetterFooterSchema.isValid(invalidData);

    expect(isValid).toBe(false);
  });

  it('should pass validation for valid data in contactUsSchema', async () => {
    const validData = {
      email: 'test@example.com',
      fullName: 'John Doe',
      query: 'General',
      message: 'Hello, this is a test message.',
    };

    const isValid = await contactUsSchema.isValid(validData);

    expect(isValid).toBe(true);
  });

  it('should fail validation for missing required fields in contactUsSchema', async () => {
    const invalidData = {
      email: 'test@example.com',
      fullName: '',
      query: 'General',
      message: '',
    };
    const isValid = await contactUsSchema.isValid(invalidData);

    expect(isValid).toBe(false);
  });
});
