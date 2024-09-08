var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event === null || event === void 0 ? void 0 : event.preventDefault();
    // Type assertions
    var profilepictureElement = document.getElementById('profilepicture');
    var nameElement = document.getElementById('name');
    var lastnameElement = document.getElementById('lastname');
    var emailElement = document.getElementById('email');
    var mobilenumberElement = document.getElementById('mobilenumber');
    var addressElement = document.getElementById('address');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillElement = document.getElementById('skill');
    if (profilepictureElement && nameElement && lastnameElement && emailElement && mobilenumberElement && addressElement && educationElement && experienceElement && skillElement) {
        var name_1 = nameElement.value;
        var lastname = lastnameElement.value;
        var email = emailElement.value;
        var mobilenumber = mobilenumberElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skill = skillElement.value;
        // Get profile picture file and generate URL
        var profilepicture = (_a = profilepictureElement === null || profilepictureElement === void 0 ? void 0 : profilepictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureURL = profilepicture ? URL.createObjectURL(profilepicture) : '';
        // Create the resume output
        var resumeOutput = "\n      <h2>Resume</h2>\n      ".concat(profilepictureURL ? "<img src=\"".concat(profilepictureURL, "\" alt=\"Profile Picture\" class=\"profilepicture\">") : '', "\n      <p><strong>Name:</strong> ").concat(name_1, "</p>\n      <p><strong>Last Name:</strong> ").concat(lastname, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(mobilenumber, "</p>\n      <p><strong>Address:</strong> ").concat(address, "</p>\n\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n\n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n\n      <h3>Skills</h3>\n      <p>").concat(skill, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element is missing');
        }
    }
    else {
        console.error('One or more input elements are missing');
    }
});
