const Employee = require("../lib/Employee");

test("create a employee object", () => {
  const employee = new Employee("Bryan", 1, "bryan@email.com");
  expect(employee.name).toBe("Bryan");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("bryan@email.com");
});

test("get the employees name", () => {
  const employee = new Employee("Bryan", 1, "bryan@email.com");
  expect(employee.getName()).toHaveProperty("name");
});

test("get employee id", () => {
  const employee = new Employee("Bryan", 1, "bryan@email.com");
  expect(employee.getId()).toHaveProperty("id");
});

test("get the employee email", () => {
  const employee = new Employee("Bryan", 1, "bryan@email.com");
  expect(employee.getEmail()).toHaveProperty("email");
});

test("get the employee role", () => {
  const employee = new Employee("Bryan", 1, "bryan@email.com");
  expect(employee.getRole()).toBe("Employee");
});
