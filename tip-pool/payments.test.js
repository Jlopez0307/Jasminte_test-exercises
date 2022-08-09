describe('Test for submiting payment info', () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    })
    it('should update payment id', () => {
        createCurPayment();
        submitPaymentInfo();

        expect(paymentId).toEqual(1);
        expect(Object.values(allPayments)).toEqual([Object({
            billAmt: '50',
            tipAmt: '5',
            tipPercent: 10
        })]);
    })
})