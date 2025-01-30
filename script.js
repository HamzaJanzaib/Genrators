

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
            Skills2: document.getElementById('Skills2')?.value || "",
            Matriculation: document.getElementById('Matriculation')?.value || "",
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
            <h3 class='information-contaner-h3'><span class='green-left-bottom-h3-span'>phone</span> ${data.PhoneNumber}</h3>
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
function seventhdesign() {
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

    let topgreenmain = document.createElement('div');
    topgreenmain.classList.add('topgreenmain');
    topgreenmain.innerHTML = `  `;
    page.appendChild(topgreenmain);

    let topgreenfirst = document.createElement('div');
    topgreenfirst.classList.add('topgreenfirst');
    topgreenfirst.innerHTML = ` <h1 class='topgreenfirsth1'>personal resume</h1> `;
    topgreenmain.appendChild(topgreenfirst);

    let topgreensecond = document.createElement('div');
    topgreensecond.classList.add('topgreensecond');
    topgreensecond.innerHTML = `  `;
    topgreenmain.appendChild(topgreensecond);

    let topgreensecondimagebox = document.createElement('div');
    topgreensecondimagebox.classList.add('topgreensecondimagebox');
    topgreensecondimagebox.innerHTML = ` <img src="${data.imageFile}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover;"> `;
    topgreensecond.appendChild(topgreensecondimagebox);

    let topgreensecondnamebox = document.createElement('div');
    topgreensecondnamebox.classList.add('topgreensecondnamebox');
    topgreensecondnamebox.innerHTML = ` <h1 class='topgreensecondnameboxh1'>${data.FirstName} ${data.LastName}</h1>
    <h4 class='topgreensecondnameboxh4'>${data.Feild}</h4>
     `;
    topgreensecond.appendChild(topgreensecondnamebox);

    let topgreensecondpersonalbox = document.createElement('div');
    topgreensecondpersonalbox.classList.add('topgreensecondpersonalbox');
    topgreensecondpersonalbox.innerHTML = `
    <li class='topgreensecondpersonalboxh4'> <span class='dots'> Email</span>  ${data.Email}</li>
    <li class='topgreensecondpersonalboxh4'> <span class='dots'> Phone</span>  ${data.PhoneNumber}</li>
    <li class='topgreensecondpersonalboxh4'> <span class='dots'> Cnic No</span>  ${data.Cnicno}</li>
    <li class='topgreensecondpersonalboxh4'> <span class='dots'> Address</span> ${data.Address}</li>
    <li class='topgreensecondpersonalboxh4'> <span class='dots'>City </span> ${data.City}</li>
    `;
    topgreensecond.appendChild(topgreensecondpersonalbox);

    let topgreenthird = document.createElement('div');
    topgreenthird.classList.add('topgreenthird');
    topgreenthird.innerHTML = `  `;
    topgreenmain.appendChild(topgreenthird);


    let topgreenthirdeaductaionbox = document.createElement('div');
    topgreenthirdeaductaionbox.classList.add('topgreenthirdeaductaionbox');
    topgreenthirdeaductaionbox.innerHTML = `  
    <h1 class='topgreenmainheading1'>education</h1>
    <h4 class='topgreenthirdeaductaionboxh4'>${data.Matriculation}</h4>
    <h4 class='topgreenthirdeaductaionboxh4'>${data.intermediate}</h4>
    `;
    topgreenthird.appendChild(topgreenthirdeaductaionbox);

    let topgreenfour = document.createElement('div');
    topgreenfour.classList.add('topgreenfour');
    topgreenfour.innerHTML = `  `;
    topgreenmain.appendChild(topgreenfour);

    let topgreenfourthexperience = document.createElement('div');
    topgreenfourthexperience.classList.add('topgreenfourthexperience');
    topgreenfourthexperience.innerHTML = `  
    <h1 class='topgreenmainheading1'> working experience</h1>
    <h4 class='topgreenfourthexperienceh4'>${data.WorkingExperience}</h4>
    `;
    topgreenfour.appendChild(topgreenfourthexperience);

    let topgreenfive = document.createElement('div');
    topgreenfive.classList.add('topgreenfive');
    topgreenfive.innerHTML = `  `;
    topgreenmain.appendChild(topgreenfive);

    let topgreenfiveskills = document.createElement('div');
    topgreenfiveskills.classList.add('topgreenfiveskills');
    topgreenfiveskills.innerHTML = `  
    <h1 class='topgreenmainheading2'> skills</h1>
    <h4 class='topgreenfiveskillsh4'>${data.Skills} <br> ${data.Skills2}</h4>
    `;
    topgreenfive.appendChild(topgreenfiveskills);

    let topgreensix = document.createElement('div');
    topgreensix.classList.add('topgreensix');
    topgreensix.innerHTML = `  `;
    topgreenmain.appendChild(topgreensix);

    let topgreensixobjectiveactivity = document.createElement('div');
    topgreensixobjectiveactivity.classList.add('topgreensixobjectiveactivity');
    topgreensixobjectiveactivity.innerHTML = `  
    <h1 class='topgreenmainheading3'> objective</h1>
    <p class='topgreensixobjectiveactivityp'>${data.Objective}</p> <p class='topgreensixobjectiveactivityp'>${data.Activities}</p>
    `;
    topgreensix.appendChild(topgreensixobjectiveactivity);
}
// seventh resume design 7 completed

// eighth resume design 8 and onclick function topblack

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
// ninth resume design 9 completed

// tenth resume design 10 and onclick function topblue
function tenthdesign() {
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

    let proficationalmain = document.createElement('div');
    proficationalmain.classList.add('proficationalmain');
    proficationalmain.innerHTML = `  `;
    page.appendChild(proficationalmain);

    let proficationalleft = document.createElement('div');
    proficationalleft.classList.add('proficationalleft');
    proficationalleft.innerHTML = `  `;
    proficationalmain.appendChild(proficationalleft);

    let proficationalleftimage = document.createElement('div');
    proficationalleftimage.classList.add('proficationalleftimage');
    proficationalleftimage.innerHTML = ` `;
    proficationalleft.appendChild(proficationalleftimage);


    let proficationalleftimagebox = document.createElement('div');
    proficationalleftimagebox.classList.add('proficationalleftimagebox');
    proficationalleftimagebox.innerHTML = ` <img src="${data.imageFile}" alt="Profile Image" style="width: 100%; height: 100%; object-fit: cover;">`;
    proficationalleftimage.appendChild(proficationalleftimagebox);

    let proficationalleftinfo = document.createElement('div');
    proficationalleftinfo.classList.add('proficationalleftinfo');
    proficationalleftinfo.innerHTML = ` <h1 class='proficationalleftinfoh1'>personal details</h1>
    <h4 class='proficationalleftinfoh4'> email: ${data.Email}</h4>
    <h4 class='proficationalleftinfoh4'> phone number: ${data.PhoneNumber}</h4>
    <h4 class='proficationalleftinfoh4'> location:${data.Address}</h4>
    <h4 class='proficationalleftinfoh4'> city: ${data.City}</h4>
    <h4 class='proficationalleftinfoh4'> cnic no: ${data.Cnicno}</h4>
    <h4 class='proficationalleftinfoh4'> feild: ${data.Feild}</h4>
    `;
    proficationalleft.appendChild(proficationalleftinfo);

    let proficationalleftskills = document.createElement('div');
    proficationalleftskills.classList.add('proficationalleftskills');
    proficationalleftskills.innerHTML = ` <h1 class='proficationalleftskillsh1'>skills</h1>
    <h4 class='proficationalleftskillsh4'>${data.Skills}</h4>
    <h4 class='proficationalleftskillsh4'>${data.Skills2}</h4>
    `;
    proficationalleft.appendChild(proficationalleftskills);

    let proficationallefteducation = document.createElement('div');
    proficationallefteducation.classList.add('proficationallefteducation');
    proficationallefteducation.innerHTML = ` <h1 class='proficationallefteducationh1'>education</h1>
    <h4 class='proficationallefteducationh4'>${data.Matriculation}</h4>
    <h4 class='proficationallefteducationh4'>${data.intermediate}</h4>
    `;
    proficationalleft.appendChild(proficationallefteducation);


    let proficationalleftgap = document.createElement('div');
    proficationalleftgap.classList.add('proficationalleftgap');
    proficationalleftgap.innerHTML = ` `;
    proficationalleft.appendChild(proficationalleftgap);


    let proficationalleftlanguage = document.createElement('div');
    proficationalleftlanguage.classList.add('proficationalleftlanguage');
    proficationalleftlanguage.innerHTML = ` <h1 class='proficationalleftlanguageh1'>language</h1>
    <h4 class='proficationalleftlanguageh4'>${data.Language}</h4>
    `;
    proficationalleft.appendChild(proficationalleftlanguage);


    let proficationalright = document.createElement('div');
    proficationalright.classList.add('proficationalright');
    proficationalright.innerHTML = `  `;
    proficationalmain.appendChild(proficationalright);

    let proficationalrightblanck = document.createElement('div');
    proficationalrightblanck.classList.add('proficationalrightblanck');
    proficationalrightblanck.innerHTML = `  `;
    proficationalright.appendChild(proficationalrightblanck);

    let proficationalrightname = document.createElement('div');
    proficationalrightname.classList.add('proficationalrightname');
    proficationalrightname.innerHTML = ` <h1 class='proficationalrightnameh1'>${data.FirstName} ${data.LastName}</h1>
    <h4 class='proficationalrightnameh4'>${data.Feild}</h4>
    `;
    proficationalright.appendChild(proficationalrightname);

    let proficationalrightobjective = document.createElement('div');
    proficationalrightobjective.classList.add('proficationalrightobjective');
    proficationalrightobjective.innerHTML = ` <h1 class='proficationalrightobjectiveh1'>Objective</h1>
    <h4 class='proficationalrightobjectiveh4'>${data.Objective}</h4>
    `;
    proficationalright.appendChild(proficationalrightobjective);

    let proficationalrightworkingexperience = document.createElement('div');
    proficationalrightworkingexperience.classList.add('proficationalrightworkingexperience');
    proficationalrightworkingexperience.innerHTML = ` <h1 class='proficationalrightworkingexperienceh1'>WorkingExperience</h1>
    <h4 class='proficationalrightworkingexperienceh4'>${data.WorkingExperience}</h4>
    `;
    proficationalright.appendChild(proficationalrightworkingexperience);

    let proficationalrightactivities = document.createElement('div');
    proficationalrightactivities.classList.add('proficationalrightactivities');
    proficationalrightactivities.innerHTML = ` <h1 class='proficationalrightactivitiesh1'>Activities</h1>
    <h4 class='proficationalrightactivitiesh4'>${data.Activities}</h4>
    `;
    proficationalright.appendChild(proficationalrightactivities);

    let proficationalrightinterest = document.createElement('div');
    proficationalrightinterest.classList.add('proficationalrightinterest');
    proficationalrightinterest.innerHTML = ` <h1 class='proficationalrightinteresth1'>Interest</h1>
    <h4 class='proficationalrightinteresth4'>${data.interest}</h4>
    `;
    proficationalright.appendChild(proficationalrightinterest);

    console.log("Resume generated successfully.");
}
// tenth resume design 10 completed



// Check if we're on the templates page or resume page
// Get all CV template buttons
const simpleCvBtn = document.getElementById('simple-cv-btn');
const brownCvBtn = document.getElementById('brown-cv-btn');
const imageCvBtn = document.getElementById('image-cv-btn');
const rightCvBtn = document.getElementById('right-cv-btn');
const greenCvBtn = document.getElementById('green-cv-btn');
const blueCvBtn = document.getElementById('blue-cv-btn');
const topgreenCvBtn = document.getElementById('topgreen-cv-btn');
const topblackCvBtn = document.getElementById('topblack-cv-btn');
const gridCvBtn = document.getElementById('grid-cv-btn');
const professionalCvBtn = document.getElementById('professional-cv-btn');


if (simpleCvBtn || brownCvBtn || imageCvBtn || rightCvBtn || greenCvBtn || blueCvBtn || topgreenCvBtn || topblackCvBtn || gridCvBtn || professionalCvBtn) {
    // On templates page - add click handlers to buttons
    if (simpleCvBtn) {
        simpleCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=first';
        });
    }
    if (brownCvBtn) {
        brownCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=second';
        });
    }
    if (imageCvBtn) {
        imageCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=third';
        });
    }
    if (rightCvBtn) {
        rightCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=fourth';
        });
    }
    if (greenCvBtn) {
        greenCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=fifth';
        });
    }
    if (blueCvBtn) {
        blueCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=sixth';
        });
    }
    if (topgreenCvBtn) {
        topgreenCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=seventh';
        });
    }
    if (topblackCvBtn) {
        topblackCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=eighth';
        });
    }
    if (gridCvBtn) {
        gridCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=ninth';
        });
    }
    if (professionalCvBtn) {
        professionalCvBtn.addEventListener('click', function() {
            window.location.href = 'resume.html?template=tenth';
        });
    }
} else {
    const urlParams = new URLSearchParams(window.location.search);
    const template = urlParams.get('template');
    console.log(template);
    
    switch(template) {
        case 'first':
            firstdesign();
            break;
        case 'second':
            secounddesign();
            break;
        case 'third':
            thirddesign();
            break;
        case 'fourth':
            fourthdesign();
            break;
        case 'fifth':
            fifthdesign();
            break;
        case 'sixth':
            sixthdesign();
            break;
        case 'seventh':
            seventhdesign();
            break;
        case 'eighth':
            eighthdesign();
            break;
        case 'ninth':
            ninthdesign();
            break;
        case 'tenth':
            tenthdesign();
            break;
        default:
            firstdesign(); // Default to first design if no template specified
    }
}


// download resume using html2pdf
function dowloand() {
    html2pdf(document.querySelector("#page")).then(canvas => {
        let link = document.createElement("a");
        link.download = "your_cv.pdf";
        link.href = canvas.toDataURL("image/png");
        link.click();
    });
}
