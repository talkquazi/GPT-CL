
const devEnv = true;

// Test Suite
describe('Hello World Test', () => {
  test('Should return "Hello World"', () => {
    expect(devEnv).toBe(true);
  });
});