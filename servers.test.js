describe("Servers test (with setup and tear-down)", function () {

  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';

  });


  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice')
  });



  //function updateServerTable() {
  //

  it('test for updateServerTable()', function () {

    submitServerInfo();
    updateServerTable();

  })


//test that serverNameInput is an HTML input element
  describe('serverNameInput', function() {
    it('should be an HTML input element', function() {
      expect(serverNameInput.tagName).toEqual('INPUT');
    });
  });
  

//Test that serverForm is an HTML form element

describe('serverForm', function() {
  it('should be an HTML form element', function() {
    expect(serverForm.tagName).toEqual('FORM');
  });
});


//Test that allServers is an object

describe('allServers', function() {
  it('should be an object', function() {
    expect(typeof allServers).toEqual('object');
  });
});

// Test that the updateServerTable function calculates the correct tip average

describe('updateServerTable', function() {
  it('should calculate the correct tip average', function() {
    allServers = {
      server1: { serverName: 'Test Server 1', tipAmt: 2 },
      server2: { serverName: 'Test Server 2', tipAmt: 3 }
    };
    updateServerTable();
    const tipAverage = (2 + 3) / 2;
    const tipAverageCell = serverTbody
  })});

  //Clean up the dom after the test is run using afterEach
  afterEach(function () {
    allServers = {};
    serverId = 0;
    serverName = [];
    serverTbody.innerHTML = '';
  });


});
