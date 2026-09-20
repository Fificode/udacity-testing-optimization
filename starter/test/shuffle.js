import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

// shuffles the indexes of an array
describe("Shuffle Function", () => {
    it("Should shuffle the index of an array", () => {
        const originalArray = [1, 2, 3, 4];
        const shuffledArray = shuffle(originalArray);
        expect(originalArray).to.not.deep.equal(shuffledArray);
    });

    it("Should contain the same length", () => {
        const originalArray = [1, 2, 3, 4];
        const shuffledArray = shuffle(originalArray);
        expect(originalArray).to.have.lengthOf(shuffledArray.length);
    });

    it("Should be an array", () => {
        const originalArray = [];
        const shuffledArray = shuffle(originalArray);
        expect(shuffledArray).to.be.an("array");
    });
});
