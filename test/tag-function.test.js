function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test("tag function", () => {
  const name = "Dani";
  const lastName = "Yudistira";

  tagFunction`Hello ${name} ${lastName}!, How are you?`;
  tagFunction`By ${name} ${lastName}!, see you later`;
});

test("tag function sql", () => {
  const name = "Dani";
  const age = 30;

  tagFunction`SELECT * FROM users WHERE name = ${name} AND age = ${age}`;
});
