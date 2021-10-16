const rewire = require("rewire")
const data_element = rewire("./data.element")
const Data = data_element.__get__("Data")

// @ponicode
describe("componentDidMount", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Pierre Edouard", "Pierre Edouard"], ["Anas", "George", "Edmond"], ["Edmond", "George", "Michael"]]
        inst = new Data(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentDidMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("getData", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["George", "Anas", "Edmond"], ["Edmond", "Michael", "Michael"], ["Michael", "Edmond", "Michael"]]
        inst = new Data(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.getData()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("closeDailog", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Pierre Edouard", "Edmond", "George"], ["Anas", "George", "Pierre Edouard"], ["Michael", "Edmond", "Edmond"]]
        inst = new Data(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.closeDailog()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("closeSnack", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Pierre Edouard", "Anas"], ["Pierre Edouard", "Anas", "Pierre Edouard"], ["Pierre Edouard", "Jean-Philippe", "Pierre Edouard"]]
        inst = new Data(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.closeSnack()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("deleteRow", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Michael", "Michael", "Michael"], ["George", "Anas", "Pierre Edouard"], ["Jean-Philippe", "George", "Pierre Edouard"]]
        inst = new Data(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.deleteRow("Pierre Edouard")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            inst.deleteRow("George")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            inst.deleteRow("Michael")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            inst.deleteRow("Anas")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            inst.deleteRow("Jean-Philippe")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            inst.deleteRow(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("confirmDelete", () => {
    let object
    let inst

    beforeEach(() => {
        object = [["Edmond", "Michael", "Pierre Edouard"], ["Edmond", "Pierre Edouard", "Pierre Edouard"], ["Michael", "George", "Michael"]]
        inst = new Data(object)
    })

    test("0", () => {
        let callFunction = () => {
            inst.confirmDelete()
        }
    
        expect(callFunction).not.toThrow()
    })
})
