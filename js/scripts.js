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
    $("#new-addresses").append('<div class="new-address">' + '<div class="form-group">' +
      '<label for="new-street">Street</label>' +
      '<input type="text" class="form-control new-street">' + '</div>' + '<div class="form-group">' +
        '<label for="new-village">Village or City</label>' +
        '<input type="text" class="form-control new-village">' + '</div>' + '<div class="form-group">' +
          '<label for="new-countyorstate">County or State</label>' +
          '<input type="text" class="form-control new-country">' + '</div>' + '<div class="form-group">' +
            '<label for="new-country">Country</label>' +
            '<input type="text" class="form-control new-country">' + '</div>' + '</div>');
  });





  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var userFirstName = $("input#new-first-name").val();
    var userLastName = $("input#new-last-name").val();
    var newContact = new Contact(userFirstName, userLastName);

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h3").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });
  });
});
