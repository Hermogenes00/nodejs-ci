const math = require("./math.js")
const assert = require("assert");

describe("Math tests",()=>{
           
    it("sum",()=>{
        const result = math.sum(10,10)    
        assert(result == 20)
    })

    it("division",()=>{
        const result = math.division(10,10)    
        assert(result == 1)
    })
})

