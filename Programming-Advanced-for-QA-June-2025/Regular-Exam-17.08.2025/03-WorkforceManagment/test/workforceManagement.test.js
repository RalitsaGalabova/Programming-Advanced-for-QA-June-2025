import { workforceManagement } from '../workforceManagement.js'
import { describe } from 'mocha'
import { expect, assert } from 'chai'

describe('Tests for workforceManagment', () => {

    describe('Test recruitStaff', () => {
        it('should should throw an error on invalid role', () => {
            expect(() => workforceManagement.recruitStaff("Petar", "QA", 10))
            .to.throw("We are not currently hiring for this role.")
        });

        it('should hire worker', () => {
            expect(workforceManagement.recruitStaff("Petar", "Developer", 10))
            .to.equal("Petar has been successfully recruited for the role of Developer.")
            expect(workforceManagement.recruitStaff("Petar", "Developer", 4))
            .to.equal("Petar has been successfully recruited for the role of Developer.")
        });

        it('should not hire workers with less than 4 years experience', () => {
            expect(workforceManagement.recruitStaff("Petar", "Developer", 3))
            .to.equal("Petar is not suitable for this role.")
            expect(workforceManagement.recruitStaff("Petar", "Developer", 0))
            .to.equal("Petar is not suitable for this role.")
        });
    });

    describe('Test computeWages', () => {
        it('should return totalPayment with less than or equal to 160 hours', () => {
            expect(workforceManagement.computeWages(160)).to.equal(2880)
            expect(workforceManagement.computeWages(140)).to.equal(2520)
        });

        it('should return totalPayment with bonus over 160 hours', () => {
            expect(workforceManagement.computeWages(162)).to.equal(4416)
        });

        it('should throw an error on invalid hours worked', () => {
            expect(() => workforceManagement.computeWages("20")).to.throw("Invalid hours")
            expect(() => workforceManagement.computeWages(-2)).to.throw("Invalid hours")
        });
    });

    describe('Test dismissEmployee', () => {
        it('should remove employee', () => {
            expect(workforceManagement.dismissEmployee(["Ivan", "Petar", "Vasil"], 2))
            .to.equal("Ivan, Petar")
        });

        it('should throw an error on invalid workforce', () => {
            expect(() => workforceManagement.dismissEmployee("Ivan, Petar", 3))
            .to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(55, 3))
            .to.throw("Invalid input")
            
        });

        it('should throw an error on invalid employee index', () => {
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Petar"], "2"))
            .to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Petar"], -2))
            .to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Petar"], 2.5))
            .to.throw("Invalid input")
            expect(() => workforceManagement.dismissEmployee(["Ivan", "Petar"], 5))
            .to.throw("Invalid input")
        });
    });
}); 