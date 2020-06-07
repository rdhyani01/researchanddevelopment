console.log("My first Jest Unit Test File for Jenkins & Github integration");
const app = require ('../src/app.js');
test('multiplies 2 and 3 to be equal to 6', () => {
  expect(app(2, 3)).toBe(6);
});
