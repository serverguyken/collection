import { HASPROPERTIES } from "../src/utils/";

describe("HASPROPERTIES", () => {
    let obj = { name: 'John', age: 20 };
    let hours = {
        delivery: {
            monday: {
                status: 'open',
                from: '10:00am',
                to: '10:00pm'
            }
        }
    }
    let obj2: any = null;  
    let props = ['name', 'age'];
    let props2 = ['delivery'];
    let props3 = ['pickup'];
    let props4 = ['status'];
    let props5 = ['from'];
    let props6 = ['tuesday']
    
    it("should return true if the object has the properties", () => {
        expect(HASPROPERTIES(obj, props)).toBe(true);
    });
    it("should return true if the object has the properties", () => {
        expect(HASPROPERTIES(hours, props2)).toBe(true);
    });
    it("should return false if the object does not have the properties", () => {
        expect(HASPROPERTIES(hours, props3)).toBe(false);
    });
    it("should return true if the object has the properties", () => {
        expect(HASPROPERTIES(hours.delivery.monday, props4)).toBe(true);
    });
    it("should return true if the object has the properties", () => {
        expect(HASPROPERTIES(hours.delivery.monday, props5)).toBe(true);
    });
    it("should return false if the object does not have the properties", () => {
        expect(HASPROPERTIES(hours.delivery, props6)).toBe(false);
    });
    it("should return false if the object is null", () => {
        expect(HASPROPERTIES(obj2, props)).toBe(false);
    });

});