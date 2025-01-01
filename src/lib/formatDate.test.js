import formatUnixTimestamp from "./formatDate";

describe("formatUnixTimestamp", () => {
  it("should return a formatted date", () => {
    const unixTimestamp = 1609459200;
    const formattedDate = formatUnixTimestamp(unixTimestamp);
    expect(formattedDate).toBe("1 January 2021");
  });
});
