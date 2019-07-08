const hello = require('./hello-world');

describe('Hello World', () => {
  it('Say Hi!', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
