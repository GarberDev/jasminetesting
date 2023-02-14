
describe("sumPaymentTotal()", function() {
    it("should return the correct sum of 'tipAmt' values", function() {
      allPayments = {
        payment1: {tipAmt: 2.50},
        payment2: {tipAmt: 5.00},
        payment3: {tipAmt: 3.75}
      };
      expect(sumPaymentTotal("tipAmt")).toEqual(11.25);
    });
  });
  


  describe("calculateTipPercent()", function() {
    it("should return the correct tip percentage", function() {
      expect(calculateTipPercent(50, 10)).toEqual(20);
    });
  });
  


  describe("appendTd()", function() {
    it("should append a new td element to a table row", function() {
      let tr = document.createElement("tr");
      let value = "test";
      appendTd(tr, value);
      expect(tr.childNodes.length).toEqual(1);
    });
  });
  

  