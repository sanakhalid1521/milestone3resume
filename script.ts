document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
  event?.preventDefault();
  
  // Type assertions
  const profilepictureElement = document.getElementById('profilepicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const lastnameElement = document.getElementById('lastname') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement; 
  const mobilenumberElement = document.getElementById('mobilenumber') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillElement = document.getElementById('skill') as HTMLInputElement;

  if (profilepictureElement && nameElement && lastnameElement && emailElement && mobilenumberElement && addressElement && educationElement && experienceElement && skillElement) {
    
    const name = nameElement.value;
    const lastname = lastnameElement.value;
    const email = emailElement.value;
    const mobilenumber = mobilenumberElement.value;
    const address = addressElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skill = skillElement.value;

    // Get profile picture file and generate URL
    const profilepicture = profilepictureElement?.files?.[0];
    const profilepictureURL = profilepicture ? URL.createObjectURL(profilepicture) : '';

    // Create the resume output
    const resumeOutput = `
      <h2>Resume</h2>
      ${profilepictureURL ? `<img src="${profilepictureURL}" alt="Profile Picture" class="profilepicture">` : ''}
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Last Name:</strong> ${lastname}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${mobilenumber}</p>
      <p><strong>Address:</strong> ${address}</p>

      <h3>Education</h3>
      <p>${education}</p>

      <h3>Experience</h3>
      <p>${experience}</p>

      <h3>Skills</h3>
      <p>${skill}</p>
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');

    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error('The resume output element is missing');
    }
  } else {
    console.error('One or more input elements are missing');
  }
});
