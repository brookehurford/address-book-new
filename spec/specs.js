describe('Contact', function() {
  it('will create a new contact with the following properties', function(){
    var testContact = new Contact("Marigold", "Beech");
    expect(testContact.firstName).to.equal("Marigold");
    expect(testContact.lastName).to.equal("Beech");
    expect(testContact.addresses).to.eql([]);
  });
  it('will add the fullName method to a contact', function() {
    var testContact = new Contact("Delia", "Hackberry");
    expect(testContact.fullName()).to.equal("Delia Hackberry");
  });
});
