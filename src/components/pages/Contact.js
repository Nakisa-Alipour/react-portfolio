// Import the necessary module
import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

// Define the ontact component
const Contact = () => {
    // State variables for form inputs and error message
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
 
    const [errorMessage, setErrorMessage] = useState("");

    const { name, email, message } = formState;

    // Function to handle input changes
    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage("");
            }
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    // Function to handle blank fields
    const handleBlank = (e) => {
        if (e.target.name === "Name" || e.target.name === "Message") {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
        } else {
            setErrorMessage("");
        }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            setErrorMessage("Name is required.");
            return;
        }
    
        if (!validateEmail(email)) {
            setErrorMessage("Invalid email address.");
            return;
        }
    
        if (!message.trim()) {
            setErrorMessage("Message is required.");
            return;
        }
    
        setErrorMessage("");
    
        setFormState({ name: "", email: "", message: "" });
    }


    return (
        <section id="contact">
        <h1 className="h1-class">Contact me</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="Name">Name:</label>
            <br />
            <input
                type="text"
                value={name}
                onBlur={handleBlank}
                onChange={handleChange}
                name="name"
            />
            </div>
            <div>
            <label htmlFor="email">Email address:</label>
            <br />
            <input
                type="email"
                value={email}
                onBlur={handleChange}
                onChange={handleChange}
                name="email"
            />
            </div>
            <div>
            <label htmlFor="Message">Message:</label>
            <br />
            <textarea
                name="message"
                value={message}
                onBlur={handleBlank}
                onChange={handleChange}
                rows="5"
            />
            </div>
            {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
            <button type="submit">Submit</button>
        </form>
        </section>
    );
};

// Export the Contact component as the default export
export default Contact;
