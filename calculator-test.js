describe('Loan Calculator', function () {
  let testValues;
  let desiredMonthlyPayment;

  beforeEach(function () {
    testValues = {
      amount: 15000,
      years: 5,
      rate: 5,
    };
    desiredMonthlyPayment = '283.07';
  });

it('should calculate the monthly rate correctly', function () {
  const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
  expect(calculatedMonthlyPayment).toEqual(desiredMonthlyPayment);
});


it("should return a result with 2 decimal places", function() {
  const calculatedMonthlyPayment = calculateMonthlyPayment(testValues);
  expect(calculatedMonthlyPayment.toString()).toContain('.');
  expect(calculatedMonthlyPayment).toMatch(/\.\d{2}$/);
});

it('should calculate monthly payment for different loans correctly', function () {
  expect(calculateMonthlyPayment({ amount: 10000, years: 5, rate: 6 })).toBeCloseTo(193.33, 2);
  expect(calculateMonthlyPayment({ amount: 20000, years: 10, rate: 4.5 })).toBeCloseTo(207.28, 2);
  expect(calculateMonthlyPayment({ amount: 16940, years: 5, rate: 7 })).toBeCloseTo(335.43, 2);
})
  
})
