document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('form');

    if (!form) {
        console.error("Error: Form element not found.");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Getting form values
        let formValues = {
            FirstName: document.getElementById('FirstName')?.value || "",
            LastName: document.getElementById('LastName')?.value || "",
            Feild: document.getElementById('Feild')?.value || "",
            Email: document.getElementById('Email')?.value || "",
            PhoneNumber: document.getElementById('PhoneNumber')?.value || "",
            Address: document.getElementById('Address')?.value || "",
            City: document.getElementById('City')?.value || "",
            Cnicno: document.getElementById('Cnicno')?.value || "",
            Skills: document.getElementById('Skills')?.value || "",
            intermediate: document.getElementById('intermediate')?.value || "",
            Objective: document.getElementById('Objective')?.value || "",
            WorkingExperience: document.getElementById('Working-Experience')?.value || "",
            Activities: document.getElementById('Activities')?.value || "",
            Language: document.getElementById('Language')?.value || "",
            interest: document.getElementById('interest')?.value || ""
        };

        // Fix for image input
        let imageInput = document.getElementById('image');
        formValues.imageFile = imageInput?.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';

        // Storing data in local storage
        window.localStorage.setItem('data', JSON.stringify(formValues));
        console.log("Data saved to local storage");

        // Redirect immediately
        window.location.href = 'templates.html'
    });
});
function simplecv() {
    window.location.href = 'resume.html';
    generateResume()
}

function generateResume() {
    let page = document.getElementById('page');
    if (!page) {
        console.error("Error: Element 'page' not found");
        return;
    }

    let data = window.localStorage.getItem('data');
    if (!data) {
        console.error("Error: No data found in local storage.");
        return;
    }

    data = JSON.parse(data);
    console.log(data);

    // Create heading elements 
    let topdiv = document.createElement('div');
    topdiv.classList.add('topdiv');
    topdiv.textContent = `curriculum vitae`;
    page.appendChild(topdiv);

    // Add more elements for other data fields (example)
    let details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = ` <h4>1. <span class='dots'>first Name</span> ${data.FirstName}</h4>
            <h4>2.<span class='dots'> last Name</span> ${data.LastName}</h4>
            <h4>3. <span class='dots'>email</span> ${data.Email}</h4>
          `
    page.appendChild(details);

    // Create personal elements 
    let personal = document.createElement('div');
    personal.classList.add('personal');
    personal.innerHTML = `<h1 class='heading'>personal details</h1><br>
        <h4>1.<span class='dots'> Address</span> ${data.Address}</h4>
        <h4>2. <span class='dots'>City </span> ${data.City}</h4>
        <h4>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
        <h4>4.<span class='dots'> Feild</span>  ${data.Feild}</h4>`;
    page.appendChild(personal);

    // Create Objective elements 
    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='heading'>Objective</h1>
                            <p class='paragraph'>${data.Objective}</p>`;
    page.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='heading'>WorkingExperience</h1>
                            <p class='paragraph'>${data.WorkingExperience}</p>`;
    page.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                            <p class='paragraph'>${data.Activities}</p>`;
    page.appendChild(Activities);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                            <p class='paragraph'>${data.interest}</p>`;
    page.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");
}

document.addEventListener("DOMContentLoaded", function () {
    generateResume();
});

function dowloand(){
    html2canvas(document.querySelector("#page")).then(canvas => {
        let link = document.createElement("a");
        link.download = "your_cv.jpg";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}