var hello = artifacts.require("HelloWorld");

contract("HelloWorld", (account) => {
  it("should be same as constructor argument", () => {
    hello.deployed().then((instance) => {
      instance.say().then((greeting) => {
        assert.equal(greeting, "Hello, World!");
      });
    });
  });

  it("should change the greeting value by setGreeting", () => {
    hello.deployed().then((instance) => {
      instance
        .setGreeting("Helllo, Blackchain!", { from: account[0] })
        .then(() => {
          instance.say().then(function (greeting) {
            assert.equal(greeting, "Hello, Blackchain!");
          });
        });
    });
  });
});
