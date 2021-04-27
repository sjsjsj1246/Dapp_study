var hello = artifacts.require("HelloWorld");

contract("HelloWorld", (account) => {
  it("should be same as constructor argument", async () => {
    let instance = await hello.deployed();
    let greeting = await instance.say.call();
    assert.equal(greeting, "Hello, World!");
  });

  it("should change the greeting value by setGreeting", async () => {
    let instance = await hello.deployed();
    await instance.setGreeting("Hello, Blackchain!", { from: account[0] });
    let greeting = await instance.say.call();
    assert.equal(greeting, "Hello, Blackchain!");
  });
});
