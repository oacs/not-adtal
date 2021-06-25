import { add, Stack } from "../src/main"

describe.only("My killer feature :rocket:",() =>  {
        it("Sums of a and b", () => {
                const result = add(2, 2);
                expect(result).toBe(4);
        })
});

/**
describe("My stack implementation", () => {
        it("is created empty", () => {
                const stack = new Stack();
                expect(stack.items).toBe({});
        });
        it.todo("can push to the top");
        it.todo("can pop off");
})
*/
