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
// simple resume design 1
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

    page.innerHTML = ""

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
    brownresume();
});


document.addEventListener('DOMContentLoaded', createResume);

function grid() {
    window.location.href = 'resume.html';
    secounddesign();
}

// grid resume design 9
function secounddesign() {
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

    page.innerHTML = ""

    let grid = document.createElement('div');
    grid.classList.add('grid');
    grid.innerHTML = `  `;
    page.appendChild(grid);

    let topdiv = document.createElement('div');
    topdiv.classList.add('topdiv');
    topdiv.textContent = `curriculum vitae`;
    grid.appendChild(topdiv);

    let details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = ` <h4>1. <span class='dots'>first Name</span> ${data.FirstName}</h4>
            <h4>2.<span class='dots'> last Name</span> ${data.LastName}</h4>
            <h4>3. <span class='dots'>email</span> ${data.Email}</h4>
          `
    grid.appendChild(details);

    // Create personal elements 
    let personal = document.createElement('div');
    personal.classList.add('personal');
    personal.innerHTML = `<h1 class='heading'>personal details</h1><br>
        <h4>1.<span class='dots'> Address</span> ${data.Address}</h4>
        <h4>2. <span class='dots'>City </span> ${data.City}</h4>
        <h4>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
        <h4>4.<span class='dots'> Feild</span>  ${data.Feild}</h4>`;
    grid.appendChild(personal);

    // Create Objective elements 
    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='heading'>Objective</h1>
                            <p class='paragraph'>${data.Objective}</p>`;
    grid.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='heading'>WorkingExperience</h1>
                            <p class='paragraph'>${data.WorkingExperience}</p>`;
    grid.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                            <p class='paragraph'>${data.Activities}</p>`;
    grid.appendChild(Activities);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                            <p class='paragraph'>${data.interest}</p>`;
    grid.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");

    let box = document.createElement('div');
    box.classList.add('blue-grid');
    box.innerHTML = ``;
    grid.appendChild(box);

    let box2 = document.createElement('div');
    box2.classList.add('blue-grid2');
    box2.innerHTML = ``;
    grid.appendChild(box2);


}

function topblack() {
    window.location.href = 'resume.html';
    thirddesign();
}
// black resume design 8    
function thirddesign() {
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

    page.innerHTML = ""

    let black = document.createElement('div');
    black.classList.add('black');
    black.innerHTML = `  `;
    page.appendChild(black);

    let blacktopbox = document.createElement('div');
    blacktopbox.classList.add('blacktopbox');
    blacktopbox.innerHTML = `<h1 class='blackheading'>curriculum vitae</h1>
    <br>
    <div class="info">
    <h4>1. <span class='dots'>first Name</span> ${data.FirstName}</h4>
    <h4>2.<span class='dots'> last Name</span> ${data.LastName}</h4>
    <h4>3. <span class='dots'>email</span> ${data.Email}</h4>
    </div>`;
    ;
    black.appendChild(blacktopbox);

    let personal = document.createElement('div');
    personal.classList.add('personal');
    personal.innerHTML = `<h1 class='heading'>personal details</h1><br>
        <h4>1.<span class='dots'> Address</span> ${data.Address}</h4>
        <h4>2. <span class='dots'>City </span> ${data.City}</h4>
        <h4>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
        <h4>4.<span class='dots'> Feild</span>  ${data.Feild}</h4>`;
    black.appendChild(personal);

    // Create Objective elements 
    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='heading'>Objective</h1>
                            <p class='paragraph'>${data.Objective}</p>`;
    black.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='heading'>WorkingExperience</h1>
                            <p class='paragraph'>${data.WorkingExperience}</p>`;
    black.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                            <p class='paragraph'>${data.Activities}</p>`;
    black.appendChild(Activities);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                            <p class='paragraph'>${data.interest}</p>`;
    black.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");
   
}

function blue() {
    window.location.href = 'resume.html';
    blueresume();
}

// blue resume design 6
function blueresume() {
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

    page.innerHTML = ""

    let blue = document.createElement('div');
    blue.classList.add('blue');
    blue.innerHTML = `  `;
    page.appendChild(blue);

    let left = document.createElement('div');
    left.classList.add('left');
    left.innerHTML = ``;
    blue.appendChild(left);

    let right = document.createElement('div');
    right.classList.add('right');
    right.innerHTML = `
    <h1 class='blueheading'> details</h1><br>
    <h4 class='blueh4'>1. <span class='dots'>first Name</span> ${data.FirstName}</h4>
    <h4 class='blueh4'>2.<span class='dots'> last Name</span> ${data.LastName}</h4>
    <h4 class='blueh4'>3. <span class='dots'>email</span> ${data.Email}</h4>
    <br>
    <h1 class='blueheading'>personal details</h1><br>
    <h4 class='blueh4'>1.<span class='dots'> Address</span> ${data.Address}</h4>
    <h4 class='blueh4'>2. <span class='dots'>City </span> ${data.City}</h4>
    <h4 class='blueh4'>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
    <h4 class='blueh4'>4.<span class='dots'> Feild</span>  ${data.Feild}</h4> `;
    blue.appendChild(right);

    let topdesign = document.createElement('div');
    topdesign.classList.add('topdesign');
    topdesign.innerHTML = `<h1 class='cvname'>curriculum vitae</h1>`;
    left.appendChild(topdesign);
 // Create Objective elements 
    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='heading'>Objective</h1>
                            <p class='paragraph'>${data.Objective}</p>`;
    left.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='heading'>WorkingExperience</h1>
                            <p class='paragraph'>${data.WorkingExperience}</p>`;
    left.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                            <p class='paragraph'>${data.Activities}</p>`;
    left.appendChild(Activities);

    let language = document.createElement('div');
    language.classList.add('Activities');
    language.innerHTML = `<h1 class='heading'>language</h1>
                            <p class='paragraph'>${data.Language}</p>`;
    left.appendChild(language);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                            <p class='paragraph'>${data.interest}</p>`;
    left.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");

}
function Brown(){
    window.location.href = 'resume.html';
    brownresume();
}
// brown resume design 2
function brownresume(){
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

    page.innerHTML = ""

    let brown = document.createElement('div');
    brown.classList.add('brown');
    brown.innerHTML = `  `;
    page.appendChild(brown);

    let line = document.createElement('div');
    line.classList.add('line');
    line.innerHTML = ` <h1 class='broentoph'>curriculum vitae</h1> `;
    brown.appendChild(line);

    let left = document.createElement('div');
    left.classList.add('brownleft');
    left.innerHTML = `
    <h1 class='brownheading  '>details</h1><br>
    <h4 class='brownh4'>1. <span class='dots'>first Name</span> ${data.FirstName}</h4>
    <h4 class='brownh4'>2.<span class='dots'> last Name</span> ${data.LastName}</h4>
    <h4 class='brownh4'>3. <span class='dots'>email</span> ${data.Email}</h4>
    <br>
    <h1 class='brownheading'>personal details</h1><br>
    <h4 class='brownh4'>1.<span class='dots'> Address</span> ${data.Address}</h4>
    <h4 class='brownh4'>2. <span class='dots'>City </span> ${data.City}</h4>
    <h4 class='brownh4'>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
    <h4 class='brownh4'>4.<span class='dots'> Feild</span>  ${data.Feild}</h4>
    <br>
    <h1 class='brownheading'>language</h1>
    <h4 class='brownh4'>${data.Language}</h4>
    `;
    brown.appendChild(left);

    let right = document.createElement('div'); 
    right.classList.add('brownright');
    right.innerHTML = ``;
    brown.appendChild(right);

    let topdesign = document.createElement('div');
    topdesign.classList.add('spacer');
    topdesign.innerHTML = `<h1 class='cvname'>curriculum vitae</h1>`;
    right.appendChild(topdesign);

    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='heading'>Objective</h1>
                            <p class='paragraph'>${data.Objective}</p>`;
    right.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='heading'>WorkingExperience</h1>
                            <p class='paragraph'>${data.WorkingExperience}</p>`;
    right.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                            <p class='paragraph'>${data.Activities}</p>`;
    right.appendChild(Activities);

    let language = document.createElement('div');
    language.classList.add('Activities');
    language.innerHTML = `<h1 class='heading'>language</h1>
                            <p class='paragraph'>${data.Language}</p>`;
    right.appendChild(language);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                            <p class='paragraph'>${data.interest}</p>`;
    right.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");
}

function dowloand() {
    html2canvas(document.querySelector("#page")).then(canvas => {
        let link = document.createElement("a");
        link.download = "your_cv.jpg";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}

