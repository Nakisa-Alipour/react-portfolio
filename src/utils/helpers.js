// Function to validate an email address
export function validateEmail(email) {
	// Regular expression pattern to validate the email format
	var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	// Test the email against the regular expression pattern
	return re.test(String(email).toLowerCase());
}