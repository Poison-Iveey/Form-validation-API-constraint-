import { validateEmail, validatePassword } from "../script.js";

test('invalid email fails', () => {
  expect(validateEmail('invalidEmail')).toBe(false);
});

test('valid email passes', () => {
  expect(validateEmail('user@test.com')).toBe(true);
});

test('short password fails', () => {
  expect(validatePassword('12345')).toBe(false);
});

test('long password passes', () => {
  expect(validatePassword('12345678')).toBe(true);
});
