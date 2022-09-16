"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const hello_1 = require("../src/utils/hello");
describe("Typescript + Babel usage suite", () => {
    it("should return string correctly", () => {
        (0, chai_1.expect)((0, hello_1.hello)("mocha"), "Hello mocha");
    });
});
//# sourceMappingURL=index.spec.js.map