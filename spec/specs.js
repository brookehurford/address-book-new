describe('Contact', function() {
  it('will create a new contact with the following properties', function(){
    var testContact = new Contact("Marigold", "Beech");
    expect(testContact.firstName).to.equal("Marigold");
    expect(testContact.lastName).to.equal("Beech");
    expect(testContact.addresses).to.eql([]);
  });
});
