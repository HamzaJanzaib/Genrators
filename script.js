
// form dom content loaded function and form submit event listener
document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('form');

    // check if form is loaded or not
    if (!form) {
        console.error("Error: Form element not found.");
        return;
    }

    // form submit event listener
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

        // Handle image input and store data after image is loaded
        let imageInput = document.getElementById('image');
        if (imageInput?.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                formValues.imageFile = e.target.result;
                window.localStorage.setItem('data', JSON.stringify(formValues));
                proceedWithSubmit();
            };
            reader.readAsDataURL(imageInput.files[0]);
        } else {
            formValues.imageFile = '';
            window.localStorage.setItem('data', JSON.stringify(formValues));
            proceedWithSubmit();
        }

        //  function to check for blank/empty inputs
        function proceedWithSubmit() {
            console.log("Data saved to local storage");

            //  required inputs
            let requiredFields = {
                'First Name': formValues.FirstName,
                'Last Name': formValues.LastName,
                'Field': formValues.Feild,
                'Email': formValues.Email,
                'Phone Number': formValues.PhoneNumber,
                'Address': formValues.Address,
                'City': formValues.City,
                'CNIC Number': formValues.Cnicno,
                'Skills': formValues.Skills,
                'Intermediate': formValues.intermediate,
                'Objective': formValues.Objective,
                'Working Experience': formValues.WorkingExperience,
                'Activities': formValues.Activities,
                'Language': formValues.Language,
                'Interests': formValues.interest
            };

            //   chacking empty inputs 
            let emptyFields = [];
            for (let field in requiredFields) {
                if (!requiredFields[field] || requiredFields[field].trim() === '') {
                    emptyFields.push(field);
                }
            }

            //  if empty inputs are found then alert the user
            if (emptyFields.length > 0) {
                alert(`Please fill in the following required fields:\n${emptyFields.join(' / ')}`);
                return;
            }

            if (!imageInput?.files[0]) {
                alert('Please select a profile image');
                return;
            }

            //  switch to templates page
            window.location.href = 'templates.html';
        }
    });
});

//  switch to first design page and call firstdesign function
function simplecv() {
    window.location.href = 'resume.html';
    firstdesign()
}

// first  resume design 
function firstdesign() {
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

    //  clear the page
    page.innerHTML = ""

    //  create heading elements 
    let topdiv = document.createElement('div');
    topdiv.classList.add('topdiv');
    topdiv.textContent = `curriculum vitae`;
    page.appendChild(topdiv);

    //  create details elements 
    let details = document.createElement('div');
    details.classList.add('details');
    details.innerHTML = ` <h4>1. <span class='dots'>first Name</span> ${data.FirstName}</h4>
            <h4>2.<span class='dots'> last Name</span> ${data.LastName}</h4>
            <h4>3. <span class='dots'>email</span> ${data.Email}</h4>
          `
    page.appendChild(details);

    //  create personal elements 
    let personal = document.createElement('div');
    personal.classList.add('personal');
    personal.innerHTML = `<h1 class='heading'>personal details</h1><br>
        <h4>1.<span class='dots'> Address</span> ${data.Address}</h4>
        <h4>2. <span class='dots'>City </span> ${data.City}</h4>
        <h4>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
        <h4>4.<span class='dots'> Feild</span>  ${data.Feild}</h4>`;
    page.appendChild(personal);

    //  create Objective elements 
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


    //  create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                            <p class='paragraph'>${data.Activities}</p>`;
    page.appendChild(Activities);

    //  create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                            <p class='paragraph'>${data.interest}</p>`;
    page.appendChild(interest);

    console.log("Resume generated successfully.");
}

// first design completed

// secound design template 2 and onclick function brown
function Brown() {
    window.location.href = 'resume.html';
    secounddesign();
}
// secounddesign function   
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
// secound design completed

// third resume design 3 and onclick function image

function image() {
    window.location.href = 'resume.html';
    thirddesign();
}

// image resume design 3
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

    let image = document.createElement('div');
    image.classList.add('image-box');
    image.innerHTML = `  `;
    page.appendChild(image);

    let top = document.createElement('div');
    top.classList.add('image-top');
    top.innerHTML = ` `;
    image.appendChild(top);

    let topleft = document.createElement('div');
    topleft.classList.add('image-top-left');
    topleft.innerHTML = ``;
    top.appendChild(topleft);

    let imagebox = document.createElement('div');
    imagebox.classList.add('image-box-image-set');
    imagebox.innerHTML = `<img src="${data.imageFile}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover;">`;
    topleft.appendChild(imagebox);


    let topright = document.createElement('div');
    topright.classList.add('image-top-right');
    topright.innerHTML = `
    <h4 class='image-top-right-h4'> ${data.FirstName} ${data.LastName}</h4>
    `;
    top.appendChild(topright);

    // Create personal elements 
    let personal = document.createElement('div');
    personal.classList.add('personal');
    personal.innerHTML = `<h1 class='heading'>personal details</h1><br>
         <h4>1.<span class='dots'>Email </span> ${data.Email}</h4>
         <h4>1.<span class='dots'> Address</span> ${data.Address}</h4>
         <h4>2. <span class='dots'>City </span> ${data.City}</h4>
         <h4>3.<span class='dots'> Cnic No</span>  ${data.Cnicno}</h4>
         <h4>4.<span class='dots'> Feild</span>  ${data.Feild}</h4>`;
    image.appendChild(personal);

    // Create Objective elements 
    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='heading'>Objective</h1>
                             <p class='paragraph'>${data.Objective}</p>`;
    image.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='heading'>WorkingExperience</h1>
                             <p class='paragraph'>${data.WorkingExperience}</p>`;
    image.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='heading'>Activities</h1>
                             <p class='paragraph'>${data.Activities}</p>`;
    image.appendChild(Activities);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='heading'>interest</h1>
                             <p class='paragraph'>${data.interest}</p>`;
    image.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");
}
// image resume design 3 completed

// fourth resume design 4 and onclick function right
function right() {
    window.location.href = 'resume.html';
    fourthdesign();
}
function fourthdesign() {
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

    let right = document.createElement('div');
    right.classList.add('right-box');
    right.innerHTML = `  `;
    page.appendChild(right);

    let rightleft = document.createElement('div');
    rightleft.classList.add('right-left');
    rightleft.innerHTML = ` `;
    right.appendChild(rightleft);

    let rightright = document.createElement('div');
    rightright.classList.add('right-right');
    rightright.innerHTML = ``;
    right.appendChild(rightright);

    let righttopimage = document.createElement('div');
    righttopimage.classList.add('right-top-image');
    righttopimage.innerHTML = ``;
    rightright.appendChild(righttopimage);

    let imagebox = document.createElement('div');
    imagebox.classList.add('right-right-image');
    imagebox.innerHTML = `<img src="${data.imageFile}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover;">`;
    righttopimage.appendChild(imagebox);

    let topright = document.createElement('div');
    topright.classList.add('name-box');
    topright.innerHTML = `
    <h4 class='image-top-right'>${data.FirstName} ${data.LastName}</h4>
    `;
    rightright.appendChild(topright);

    // Create personal elements 
    let personal = document.createElement('div');
    personal.classList.add('personal');
    personal.innerHTML = `<h1 class='right-heading'>personal details</h1><br>
         <h4 class='righth4'>1.<span >Email </span> ${data.Email}</h4>
         <h4 class='righth4'>1.<span > Address</span> ${data.Address}</h4>
         <h4 class='righth4'>2. <span >City </span> ${data.City}</h4>
         <h4 class='righth4'>3.<span > Cnic No</span>  ${data.Cnicno}</h4>
         <h4 class='righth4'>4.<span > Feild</span>  ${data.Feild}</h4>
         <h4 class='righth4'>5.<span > Phone Number</span> ${data.PhoneNumber}</h4>
         `;
    rightright.appendChild(personal);

    let language = document.createElement('div');
    language.classList.add('Activities');
    language.innerHTML = `<h1 class='right-heading'> language</h1>
                            <h4 class='righth4'>${data.Language}</h4>`;
    rightright.appendChild(language);

    let black = document.createElement('div');
    black.classList.add('black-box');
    black.innerHTML = `  `;
    rightleft.appendChild(black);
    // Create Objective elements 
    let Objective = document.createElement('div');
    Objective.classList.add('Objective');
    Objective.innerHTML = `<h1 class='right-heading'>Objective</h1>
                             <p class='righth4''>${data.Objective}</p>`;
    rightleft.appendChild(Objective);

    // Create WorkingExperience elements 
    let WorkingExperience = document.createElement('div');
    WorkingExperience.classList.add('WorkingExperience');
    WorkingExperience.innerHTML = `<h1 class='right-heading'>WorkingExperience</h1>
                             <p class='righth4'>${data.WorkingExperience}</p>`;
    rightleft.appendChild(WorkingExperience);


    // Create Activities elements 
    let Activities = document.createElement('div');
    Activities.classList.add('Activities');
    Activities.innerHTML = `<h1 class='right-heading'>Activities</h1>
                             <p class='righth4'>${data.Activities}</p>`;
    rightleft.appendChild(Activities);

    let skills = document.createElement('div');
    skills.classList.add('Activities');
    skills.innerHTML = `<h1 class='right-heading'>Skills</h1>
                             <p class='righth4'>${data.Skills}</p>`;
    rightleft.appendChild(skills);


    // Create interest elements 
    let interest = document.createElement('div');
    interest.classList.add('interest');
    interest.innerHTML = `<h1 class='right-heading'>interest</h1>
                             <p class='righth4'>${data.interest}</p>`;
    rightleft.appendChild(interest);


    // ... (Add similar elements for other fields) ...

    console.log("Resume generated successfully.");
}
// fourth resume design 4 completed

// fifth resume design 5 and onclick function green
function green() {
    window.location.href = 'resume.html';
    fifthdesign();
}
function fifthdesign() {
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


    let green = document.createElement('div');
    green.classList.add('green');
    green.innerHTML = `  `;
    page.appendChild(green);

    let greenleft = document.createElement('div');
    greenleft.classList.add('green-left');
    greenleft.innerHTML = ``;
    green.appendChild(greenleft);

    let greenlefttop = document.createElement('div');
    greenlefttop.classList.add('green-left-top');
    greenlefttop.innerHTML = ``;
    greenleft.appendChild(greenlefttop);

    let greenimage = document.createElement('div');
    greenimage.classList.add('green-image');
    greenimage.innerHTML = `<img src="${data.imageFile}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover;">`;
    greenlefttop.appendChild(greenimage);

    let greenleftbottom = document.createElement('div');
    greenleftbottom.classList.add('green-left-bottom');
    greenleftbottom.innerHTML = ``;
    greenleft.appendChild(greenleftbottom);

    let textcontaner = document.createElement('div');
    textcontaner.classList.add('text-contaner');
    textcontaner.innerHTML = `
    <h1 class='green-left-bottom-h1'>about me</h1>
    <p class='information-contaner-p'>${data.Objective}</p>
    `;
    greenleftbottom.appendChild(textcontaner);

    let informationcontaner = document.createElement('div');
    informationcontaner.classList.add('information-contaner');
    informationcontaner.innerHTML = `
            <h1 class='information-contaner-h1'>personal information</h1>
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>name</span> ${data.FirstName} ${data.LastName}</h3>
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>email</span> ${data.Email}</h3>
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>phone</span> ${data.Phone}</h3>
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>address</span> ${data.Address}</h3>
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>city</span> ${data.City}</h3>
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>Cnic No</span> ${data.Cnicno}</h3>
    `;
    greenleftbottom.appendChild(informationcontaner);

    let languagecontaner = document.createElement('div');
    languagecontaner.classList.add('language-contaner');
    languagecontaner.innerHTML = `
    <h1 class='language-contaner-h1'>language</h1>
    <h3 class='language-contaner-h3'>${data.Language}</h3>
    `;
    greenleftbottom.appendChild(languagecontaner);

    let greenright = document.createElement('div');
    greenright.classList.add('green-right');
    greenright.innerHTML = ``;
    green.appendChild(greenright);

    let greenrighttopblack = document.createElement('div');
    greenrighttopblack.classList.add('green-right-top-black');
    greenrighttopblack.innerHTML = `<h1 class='green-right-top-black-h1'>additional information</h1>`;
    greenright.appendChild(greenrighttopblack);

    // Create WorkingExperience elements 
    let greenexperience = document.createElement('div');
    greenexperience.classList.add('green-experience');
    greenexperience.innerHTML = `<h1 class='green-right-heading'>WorkingExperience</h1>
                             <p class='green-right-p'>${data.WorkingExperience}</p>`;
    greenright.appendChild(greenexperience);


    // Create Activities elements 
    let greenactivities = document.createElement('div');
    greenactivities.classList.add('green-activities');
    greenactivities.innerHTML = `<h1 class='green-right-heading'>Activities</h1>
                             <p class='green-right-p'>${data.Activities}</p>`;
    greenright.appendChild(greenactivities);

    let greenskills = document.createElement('div');
    greenskills.classList.add('greenskills');
    greenskills.innerHTML = `<h1 class='green-right-heading'>Skills</h1>
                             <p class='green-right-p'>${data.Skills}</p>`;
    greenright.appendChild(greenskills);


    // Create interest elements 
    let greeninterest = document.createElement('div');
    greeninterest.classList.add('green-interest');
    greeninterest.innerHTML = `<h1 class='green-right-heading'>interest</h1>
                             <p class='green-right-p'>${data.interest}</p>`;
    greenright.appendChild(greeninterest);
}
// fifth resume design 5 completed

// sixth resume design 6 and onclick function blue

function blue() {
    window.location.href = 'resume.html';
    sixthdesign();
}

// sixth resume design 6
function sixthdesign() {
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
// sixth resume design 6 completed
// seventh resume design 7 and onclick function top
// seventh resume design 7 completed

// eighth resume design 8 and onclick function topblack
function topblack() {
    window.location.href = 'resume.html';
    eighthdesign();
}
// black resume design 8    
function eighthdesign() {
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
// eighth resume design 8 completed

// ninth resume design 9 and onclick function grid
function grid() {
    window.location.href = 'resume.html';
    ninthdesign();
}
// ninth resume design 9
function ninthdesign() {
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

document.addEventListener("DOMContentLoaded", function () {
    fifthdesign();
});

// download resume using html2pdf
function dowloand() {
    html2pdf(document.querySelector("#page")).then(canvas => {
        let link = document.createElement("a");
        link.download = "your_cv.pdf";
        link.href = canvas.toDataURL("image/jpg");
        link.click();
    });
}
