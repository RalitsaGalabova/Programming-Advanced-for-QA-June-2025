import { workforceManagement } from '../workforceManagement.js'
import { expect } from 'chai'
import { describe } from 'mocha';


describe('WorkforceManagment', () =>{
    describe('Test if recruitStaff method works as expected', () =>{
        it('should sucessfully recruit with valid data', () => {

            //Arrange
            let name = "Ivan";
            let role = "Developer";
            let experiance = 5;

            let expected = "Ivan has been successfully recruited for the role of Developer.";

            //Act

            let result = workforceManagement.recruitStaff(name, role, experiance);

            //Assert
            expect(result).to.equal(expected);

        })
        it('should return error if the experience is <4', () => {

            //Arrange
            let name = "Ivan";
            let role = "Developer";
            let experiance = 3;

            let expected = "Ivan is not suitable for this role.";

            //Act

            let result = workforceManagement.recruitStaff(name, role, experiance);

            //Assert
            expect(result).to.equal(expected);

        })
        it('should return error if the role is != from Developer', () => {

            //Arrange
            let name = "Ivan";
            let role = "QA";
            let experiance = 4;

            //Act

            let result = () => workforceManagement.recruitStaff(name, role, experiance);

            //Assert
            expect(result).to.throw('We are not currently hiring for this role.');

        })
        describe('Test if computeWages method works as expected', () => {

            it('should successfully computed salary with valid data', () => {

            //Arrange
            let hoursWorked = 180;
            let expected = (18 * hoursWorked) + 1500;

            //Act
            let result = workforceManagement.computeWages(hoursWorked);

            //Assert
            expect(result).to.equal(expected);
        
            })
            it('should return error if hoursWorked is not a number', () => {

            //Arrange
            let hoursWorked = "h";

            //Act
            let result = () => workforceManagement.computeWages(hoursWorked);

            //Assert
            expect(result).to.throw('Invalid hours');
        
            })
            it('should return error if hoursWorked is negative number number', () => {

            //Arrange
            let hoursWorked = -6;

            //Act
            let result = () => workforceManagement.computeWages(hoursWorked);

            //Assert
            expect(result).to.throw('Invalid hours');
        
            })

        })
    })
    describe('dismissEmployee', () => {
        it('should remove the employee at the given index', () => {
            // Arrange
            let workforce = ['John', 'Alice', 'Bob'];
            let employeeIndex = 1;
            let expected = 'John, Bob';

            // Act
            let result = workforceManagement.dismissEmployee(workforce, employeeIndex);

            // Assert
            expect(result).to.equal(expected);
        });
        it('should remove the first employee when index is 0', () => {
            // Arrange
            let workforce = ['John', 'Alice', 'Bob'];
            let employeeIndex = 0;
            let expected = 'Alice, Bob';

            // Act
            let result = workforceManagement.dismissEmployee(workforce, employeeIndex);

            // Assert
            expect(result).to.equal(expected);
        });
        it('should remove the last employee', () => {
            // Arrange
            let workforce = ['John', 'Alice', 'Bob'];
            let employeeIndex = 2;
            let expected = 'John, Alice';

            // Act
            let result = workforceManagement.dismissEmployee(workforce, employeeIndex);

            // Assert
            expect(result).to.equal(expected);
        });
        it('should throw error when employeeIndex is negative', () => {
            // Arrange
            let workforce = ['John', 'Alice', 'Bob'];
            let employeeIndex = -1;

            // Act
            let result = () => workforceManagement.dismissEmployee(workforce, employeeIndex);
            
            //Assert
            expect(result).to.throw('Invalid input')
        });
        it('should throw error when employeeIndex exceeds array length', () => {
            // Arrange
            let workforce = ['John', 'Alice', 'Bob'];
            let employeeIndex = 3;

            // Act
            let result = () => workforceManagement.dismissEmployee(workforce, employeeIndex);
            
            //Assert
            expect(result).to.throw('Invalid input')
        });
        it('should throw error when workforce is not an array', () => {
            // Arrange
            let workforce = 'not an array';
            let employeeIndex = 0;

            // Act
            let result = () => workforceManagement.dismissEmployee(workforce, employeeIndex);
            
            //Assert
            expect(result).to.throw('Invalid input')
        });
        it('should throw error when employeeIndex is not an integer', () => {
            // Arrange
            let workforce = ['John', 'Alice', 'Bob'];
            let employeeIndex = 1.5;

            // Act
            let result = () => workforceManagement.dismissEmployee(workforce, employeeIndex);
            
            //Assert
            expect(result).to.throw('Invalid input')
        });
    });
})