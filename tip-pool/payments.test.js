describe('Test for submiting payment info', () => {
    beforeEach(() => {
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    });
    it('should update allPayments keys values', () => {
        submitPaymentInfo()

        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('50');
        expect(allPayments['payment1'].tipAmt).toEqual('5');
        expect(allPayments['payment1'].tipPercent).toEqual(10);
        
    });
    it('should append current payment values to table', () => {
        let curPayment = createCurPayment();

        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');
        
        expect(curTdList.length).toEqual(3);
        expect(curTdList[0].innerText).toEqual('$50');
        expect(curTdList[1].innerText).toEqual('$5');
        expect(curTdList[2].innerText).toEqual('10%');
    })
    it('should update bill,tip and tip percent amounts', () => {
        const amount= {
            billAmt: '50',
            tipAmt: '5',
            tipPercent: 10
        };

        expect(createCurPayment()).toEqual(amount)
    })
    
    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });
})