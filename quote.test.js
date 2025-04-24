const getQuote = require('./quote');

test('returns correct quote', () => {
  expect(getQuote()).toBe("The only limit is your mind.");
});