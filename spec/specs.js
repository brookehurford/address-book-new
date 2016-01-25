describe('Contact', function() {
  it('will create a new contact with the following properties', function(){
    var testContact = new Contact("Marigold", "Crabapple");
    expect(testContact.firstName).to.equal("Marigold");
    expect(testContact.lastName).to.equal("Crabapple");
    expect(testContact.addresses).to.eql([]);
  });
  it('will add the fullName method to a contact', function(){
    var testContact = new Contact("Delia", "Hackberry");
    expect(testContact.fullName()).to.equal("Delia Hackberry");
  });
});

describe('Address', function() {
  it('will create a new address with the given specifications', function(){
    var testAddress = new Address("Malt House", "Upper-Slaughter", "Oxfordshire", "United Kingdom");
    expect(testAddress.street).to.equal("Malt House");
    expect(testAddress.town).to.equal("Upper-Slaughter");
    expect(testAddress.countyorstate).to.equal("Oxfordshire");
    expect(testAddress.country).to.equal("United Kingdom");
  });
  it('will add fullAddress method to all addresses', function(){
    var testAddress = new Address("Malt House", "Upper-Slaughter", "Oxfordshire", "United Kingdom");
    expect(testAddress.fullAddress()).to.equal("Malt House, Upper-Slaughter, Oxfordshire, United Kingdom");
  });
});
