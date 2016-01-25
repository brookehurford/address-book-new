// Business Logic //

function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function Address(street, village, countyorstate, country) {
  this.street = street;
  this.village = village;
  this.countyorstate = countyorstate;
  this.country = country;
}

Address.prototype.fullAddress = function() {
  return this.street + ", " + this.village + ", " + this.countyorstate + ", " + this.country;
}





// User Logic //
$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                '<div class="form-group">' +
                                  '<label for="new-street">Street</label>' +
                                  '<input type="text" class="form-control new-street">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-village">Village or City</label>' +
                                  '<input type="text" class="form-control new-village">' +
                                '</div>' +
                                  '<div class="form-group">' +
                                    '<label for="new-countyorstate">County or State</label>' +
                                    '<input type="text" class="form-control new-countyorstate">' +
                                '</div>' +
                                '<div class="form-group">' +
                                  '<label for="new-country">Country</label>' +
                                  '<input type="text" class="form-control new-country">' +
                                '</div>' +
                              '</div>');
  });





  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input#new-first-name").val();
    var userLastName = $("input#new-last-name").val();
    var newContact = new Contact(userFirstName, userLastName);

    $(".new-address").each(function(){
      var userStreet = $(this).find("input.new-street").val();
      var userVillage = $(this).find("input.new-village").val();
      var userCountyorState = $(this).find("input.new-countyorstate").val();
      var userCountry = $(this).find("input.new-country").val();
      var newAddress = new Address(userStreet, userVillage, userCountyorState, userCountry)
      newContact.addresses.push(newAddress)
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");


    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h3").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address){
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });

    $("#new-contact")[0].reset();
  });
});
