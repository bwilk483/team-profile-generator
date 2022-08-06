const Intern = require("../lib/Intern");

test("create intern object", () => {
  const intern = new Intern("Bryan", 1, "bryan@email.com", "KU");
  expect(intern.name).toBe("Bryan");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("get intern role", () => {
  const intern = new Intern("Bryan", 1, "bryan@email.com", "KU");
  expect(intern.getRole()).toBe("Intern");
});

test("get intern school", () => {
  const intern = new Intern("Bryan", 1, "bryan@email.com", "KU");
  expect(intern.getSchool()).toBe("KU");
});
