describe("taxes formula", function () {
  it("should calculate the monthly rate correctly", function () {
    const values = {
      amount: 240000,
      years: 30,
      rate: 2.3,
    };

    expect(calculateMonthlyPayment(values)).toEqual(923.52);
  });

  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 240000,
      years: 30,
      rate: 0,
    };

    expect(calculateMonthlyPayment(values)).toEqual(NaN);
  });
});
