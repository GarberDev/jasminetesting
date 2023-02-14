

describe("createCurPayment()", function () {
    it("should return an object with billAmt, tipAmt, and tipPercent properties when valid inputs are provided", function () {
      // set up input fields with valid values
      billAmtInput.value = '50';
      tipAmtInput.value = '10';
  
      // call function and check if returned object has expected properties and values
      expect(createCurPayment()).toEqual({
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20,
      });
    });
  
    it("should return undefined when billAmt input is not positive or tipAmt input is negative", function () {
      // set up input fields with invalid values
      billAmtInput.value = '-20';
      tipAmtInput.value = '-5';
  
      // call function and check if it returns undefined
      expect(createCurPayment()).toBeUndefined();
    });
  
    it("should return undefined when billAmt or tipAmt input is empty", function () {
      // set up input fields with empty values
      billAmtInput.value = '';
      tipAmtInput.value = '';
  
      // call function and check if it returns undefined
      expect(createCurPayment()).toBeUndefined();
  
      // set up input fields with valid billAmt but empty tipAmt
      billAmtInput.value = '60';
      tipAmtInput.value = '';
  
      // call function and check if it returns undefined
      expect(createCurPayment()).toBeUndefined();
    });
  });
  

  describe("appendPaymentTable()", function () {
    it("should add a row with the correct values to the payment table", function () {
      // create a sample payment object
      let samplePayment = {
        billAmt: '50',
        tipAmt: '10',
        tipPercent: 20,
      };
  
      // call the function with the sample payment object
      appendPaymentTable(samplePayment);
  
      // check if the payment table has a row with the expected values
      let paymentRows = paymentTbody.querySelectorAll('tr');
      let lastPaymentRow = paymentRows[paymentRows.length - 1];
  
      expect(lastPaymentRow.cells[0].innerHTML).toBe('$50');
      expect(lastPaymentRow.cells[1].innerHTML).toBe('$10');
      expect(lastPaymentRow.cells[2].innerHTML).toBe('20%');
    });
  });

  
  describe("updateSummary()", function () {
    it("should calculate and update the summary table with the correct total bill amount, total tip amount, and average tip percentage based on the payments in allPayments object", function () {
      // add sample payment objects to allPayments object
      allPayments = {
        payment1: {
          billAmt: '50',
          tipAmt: '10',
          tipPercent: 20,
        },
        payment2: {
          billAmt: '30',
          tipAmt: '6',
          tipPercent: 20,
        },
      };
  
      // call the function
      updateSummary();
  
      // check if the summary table has the expected values
      expect(summaryTds[0].innerHTML).toBe('$80');
      expect(summaryTds[1].innerHTML).toBe('$16');
      expect(summaryTds[2].innerHTML).toBe('20%');
    });
  
    it("should display 0 for average tip percent in the summary table when there are no payments", function () {
      // clear allPayments object
      allPayments = {};
  
      // call the function
      updateSummary();
  
      // check if the summary table displays 0
    });
});
