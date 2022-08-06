const Engineer = require("../lib/Engineer");

test("create the engineer object", () => {
  const engineer = new Engineer("Bryan", 1, "bryan@email.com", "gituser");
  expect(engineer.name).toBe("Bryan");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer role", () => {
  const engineer = new Engineer("Bryan", 1, "bryan@email.com", "gituser");
  expect(engineer.getRole()).toBe("Engineer");
});

test("get engineer gethub", () => {
  const engineer = new Engineer("Bryan", 1, "bryan@email.com", "gituser");
  expect(engineer.getGithub()).toBe(`https://github.com/gituser`);
});
