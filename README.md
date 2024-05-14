* SURVEY FORM


This repository contains the HTML, CSS, and JavaScript code for a university survey form specifically designed for freshers. The form is intended to gather information about new students' backgrounds, interests, and expectations, in order to better support their transition to university life.


* Project Description
  
The survey form includes various input elements such as text fields, email fields, number fields, a dropdown menu, a textarea, and a submit button. The form is designed to be user-friendly and easy to use, with clear labels and error messages for invalid input.

The survey form includes questions about the student's personal information, academic background, extracurricular activities, and career goals. The form also includes questions about the student's expectations for university life and any concerns they may have.

The survey form is designed to be responsive and adapt to different screen sizes, making it accessible to students on a variety of devices.


* HTML

The HTML file (index.html) contains the structure of the survey form. It includes various input elements such as text fields, email fields, number fields, a dropdown menu, a textarea, and a submit button.

* CSS
 
The CSS file (styles.css) contains the styling for the survey form. It includes styles for various input elements, as well as general styles for the body and container of the form.

1. The body selector sets the font family to Arial and applies a background image to the body of the page. It also sets the background color to a light gray (#f5f5f5) and removes the margin and padding.
2. The .survey-container selector sets the styles for the container of the form. It includes a white background color, a background image, and a background size of cover. It also sets the maximum width of the container to 400px, centers it on the page, and adds padding and a border radius. A box shadow is also added to give the container a subtle 3D effect.
3. The h1 selector sets the styles for the heading of the form. It centers the text and sets the color to red.
4. The form selector sets the styles for the form itself. It includes left-aligned text and padding.
5. The label selector sets the styles for the labels of the input elements. It displays the labels as blocks and adds margin to the top of each label.
6. The input[type="text"], input[type="email"], input[type="number"], select, and textarea selectors set the styles for the various input elements. They include a width of 100%, padding, margin, and a border. The border radius is set to 3px.
7.The textarea selector sets the styles for the textarea input element. It includes a resize property set to vertical, which allows the user to resize the textarea vertically but not horizontally.
8. The button selector sets the styles for the submit button. It includes a background color of blue (#007BFF), white text, and no border. The padding and margin are set, and the border radius is set to 3px. The cursor is set to a pointer when hovering over the button.
9. The button:hover selector sets the styles for the submit button when the user hovers over it. It includes a background color of a darker blue (#0056b3).


* JAVASCRIPT

The JavaScript file (script.js) contains the functionality for the survey form. It includes code to validate the input fields and display error messages if the input is invalid.

1. The validateForm function is called when the user clicks the submit button. It validates the input fields and displays error messages if the input is invalid.
2. The checkEmpty function is called by the validateForm function to check if an input field is empty. It takes the input field as a parameter and returns true if the field is empty and false otherwise.
3. The checkEmail function is called by the validateForm function to check if an email input field contains a valid email address. It takes the email input field as a parameter and returns true if the email is valid and false otherwise.
4. The displayError function is called by the validateForm function to display an error message for an invalid input field. It takes the input field and the error message as parameters and adds the error message to the page.

* Usage

To use the survey form, simply open the index.html file in a web browser. The form should be displayed in the center of the page, with a background image and a white container. The form should be responsive and adapt to different screen sizes.

* Contributing
  
Contributions are welcome! To contribute, please fork this repository, make your changes, and submit a pull request.

* License
  
This project is licensed under the MIT License. See the LICENSE file for details.

* Contact
  
If you have any questions or comments, please contact [Your Name] at [Your Email].
