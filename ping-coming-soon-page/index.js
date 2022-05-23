
// Assigns Email form container to variable
const form = $(".email-form");
// Assigns Email input  to variable
const email = $(".email-input");
// Regular expression used to validate email input
const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


// Event listener that validates email that was inputted
// Error message is shown if input is invalid
$(".notify-button").click(function  () {
    let text = email.val();
    let errorMessage = $(".error-message");
    if (text.match(pattern)) {
        email.css("border", "1px solid hsl(var(--clr-pale-blue))");
        errorMessage.css("display", "none");
    } else {
        email.css("border", "2px solid hsl(var(--clr-light-red))");
        errorMessage.css("display", "block");
    }
    
});

