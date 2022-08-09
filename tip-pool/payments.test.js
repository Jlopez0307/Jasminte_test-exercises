describe('Test for submiting payment info', () => {
    beforeEach(() => {
        serverNameInput.value = 'Alice';
        billAmtInput.value = 50;
        tipAmtInput.value = 5;
    })
    it('should update payment table, and summary table', () => {
        createCurPayment();
        submitPaymentInfo();

        expect(paymentId).toEqual(1);
    })
})