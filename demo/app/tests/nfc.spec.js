const { Nfc } = require("nativescript-nfc");

describe("Nfc", () => {
  const nfc = new Nfc();

  it("exposes available()", () => {
    expect(typeof nfc.available).toBe("function");
  });

  it("available() resolves to a boolean", (done) => {
    nfc.available().then((result) => {
      expect(typeof result).toBe("boolean");
      done();
    });
  });

  it("exposes enabled()", () => {
    expect(typeof nfc.enabled).toBe("function");
  });

  it("enabled() resolves to a boolean", (done) => {
    nfc.enabled().then((result) => {
      expect(typeof result).toBe("boolean");
      done();
    });
  });
});
