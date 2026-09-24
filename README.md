# Workplace Contact Form

## Description

This project is a simple interactive workplace contact form built using HTML, CSS, and JavaScript.

The form allows an employee to submit a workplace issue by providing their name, department, email address, issue category, and a message.

## Features

* Name validation
* Department selection
* Email format validation
* Issue category selection
* Message validation
* Specific error messages
* Success message for valid input
* DOM manipulation
* Form submit event handling
* Prevents submission when required information is missing

## Technologies Used

* HTML
* CSS
* JavaScript

## Project Structure

```text
workplace-contact-form/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How to Run

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Complete the contact form.
5. Click **Submit Request**.

## Validation

The form checks that:

* The name is not empty.
* A department has been selected.
* The email address has a reasonable format.
* An issue category has been selected.
* The message is not empty.
* The message contains at least 10 characters.

## Testing

The following cases can be tested:

### Valid input

```text
Name: Victor Ndou
Department: IT
Email: victor@example.com
Issue Category: Software
Message: I cannot access the application.
```

Expected result:

```text
Your workplace contact request was submitted successfully.
```

### Invalid input

Leave required fields empty and submit the form.

Expected result:

Specific error messages are displayed for each missing field.

### Invalid email

Example:

```text
victor@
```

Expected result:

```text
Please enter a valid email address.
```

### Boundary test

Enter a message containing exactly 10 characters.

Expected result:

The message should be accepted.

Enter a message containing fewer than 10 characters.

Expected result:

The form should display an error.

## Learning Outcomes

This activity demonstrates how JavaScript can be used to:

* Handle browser events.
* Validate user input.
* Manipulate the DOM.
* Display feedback to users.
* Prevent invalid form submissions.
* Handle valid and invalid input cases.
