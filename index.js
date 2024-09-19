document.addEventListener("DOMContentLoaded", () => {
    // Form and Resume elements
    const form = document.getElementById("resume-form");
    const resumeContent = document.getElementById("resume-content");
   
    // Event listener for form submission
    form.addEventListener("submit", function (event) {
    event.preventDefault();
   
    // Collect user input data
    const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    degree: document.getElementById("degree").value,
    school: document.getElementById("school").value,
    gradYear: parseInt(document.getElementById("gradYear").value),
    jobTitle: document.getElementById("jobTitle").value,
    company: document.getElementById("company").value,
    years: parseInt(document.getElementById("years").value),
    skills: document
    .getElementById("skills")
    .value.split(",")
    .map((skill) => skill.trim()),
    };
   
    // Generate the resume dynamically
    generateResume(formData);
    });
   
    // Function to generate and display the resume
    function generateResume(data) {
    resumeContent.innerHTML = `
    <h3 contenteditable="true">${data.name}</h3>
    <p contenteditable="true">Email: ${data.email}</p>
    <h4>Education</h4>
    <p contenteditable="true">${data.degree} from ${data.school} (Class of ${data.gradYear})</p>
    <h4>Work Experience</h4>
    <p contenteditable="true">${data.jobTitle} at ${data.company} (${data.years} years)</p>
    <h4>Skills</h4>
    <ul>
    ${data.skills
    .map(skill => `<li contenteditable="true">${skill}</li>`)
    .join('')}
    </ul>
    `;
    }
   });