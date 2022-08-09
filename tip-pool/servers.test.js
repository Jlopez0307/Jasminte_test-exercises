describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    serverNameInput.value = '';
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});

describe('Update server table test', () => {
  beforeEach(() => {
    //initialization logic
    serverNameInput.value = 'Alice';
    billAmtInput.value = 50;
    tipAmtInput.value = 5;
  })
  it('should update the server table and calculate how much that server has made', () => {
    submitServerInfo();
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(sumPaymentTotal('tipAmt') / Object.keys(allServers).length).toEqual(5.00);
  })
  afterEach(() => {
    //Clears server input
    serverNameInput.value = '';
    //Clears servers array and payments array
    allServers = {};
    allPayments = {}
    //Clears ID #'s
    serverId = 0;
    paymentId = 0;
    //Clears table HTML
    serverTbody.innerHTML = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
  })
})
