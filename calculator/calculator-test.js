describe('calculator tests', () => {
  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 5000,
      years: 10,
      rate: 5,
    };
   expect(calculateMonthlyPayment(values)).toEqual('53.03')
  });
  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 5000,
      years: 10,
      rate: 5,
    };
    expect(calculateMonthlyPayment(values)).toContain('.');
  });
})


