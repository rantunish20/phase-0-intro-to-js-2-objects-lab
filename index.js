// Write your solution in this file!
const employee = {
    name: 'Lilo',
    streetaddress: '123 Melrose pl'

}


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee.name = `Sam`;
    newEmployee.streetAddress = `11 Broadway`; 
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = '12 Broadway';
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const {name, ...employee2} = employee;
    return employee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
}