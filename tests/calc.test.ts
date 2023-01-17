import { add, sub } from '../src/calc';

describe("Test CALC add", () => {
   it("should return 15 for add(10,5)", () => {
    expect(add(10,5)).toBe(15)
   });
   it("should return 5 for add(4,1)", () => {
    expect(add(4,1)).toBe(5)
   });
});

// describe('test calc sub', () => {
//   it('é para retornar 5', () => {
//     expect(sub(10,5)).toBe(5)
//    })
// })
