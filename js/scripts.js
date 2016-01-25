function Contact(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}





// User Logic //
$(document).ready(function() {
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
