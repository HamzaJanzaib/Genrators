let data;

let form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    // stoping form reload behaviour
    e.preventDefault();

    // getting all the values from the form
    let FirstName = document.getElementById('FirstName').value;
    let LastName = document.getElementById('LastName').value;
    let Feild = document.getElementById('Feild').value;
    let image = document.getElementById('image').value;
    let Email = document.getElementById('Email').value;
    let PhoneNumber = document.getElementById('PhoneNumber').value;
    let Address = document.getElementById('Address').value;
    let City = document.getElementById('City').value;
    let Cnicno = document.getElementById('Cnicno').value;
    let Skills = document.getElementById('Skills').value;
    // let Skills2= document.getElementById('Skills2').value;
    let intermediate = document.getElementById('intermediate').value;
    let Objective = document.getElementById('Objective').value;
    let WorkingExperience = document.getElementById('Working-Experience').value;
    let Activities = document.getElementById('Activities').value;
    let Language = document.getElementById('Language').value;
    let interest = document.getElementById('interest').value;

    // console.log(FirstName
    //     ,LastName
    //     ,Feild
    //     ,image
    //     ,Email
    //     ,PhoneNumber
    //     ,Address
    //     ,City
    //     ,Cnicno
    //     ,Skills
    //     // ,Skills2
    //     ,intermediate
    //     ,Objective
    //     ,WorkingExperience
    //     ,Activities
    //     ,Language
    //     ,interest
    // );


    // set data in local storage

    data = {
        FirstName,
        LastName,
        Feild,
        image,
        Email,
        PhoneNumber,
        Address,
        City,
        Cnicno,
        Skills,
        // Skills2,
        intermediate,
        Objective,
        WorkingExperience,
        Activities,
        Language,
        interest
    }
    let localStorageData = window.localStorage.setItem('data', JSON.stringify(data));
    console.log(localStorageData);

    // redirect to next page
    window.location.href = 'templates.html';
});

let page = document.getElementById('page');

function simplecv() {
    
    window.location.href = 'resume.html';
    
    let data = window.localStorage.getItem('data');
    data = JSON.parse(data);
    console.log(data);
    let topdiv = document.createElement('div');
    topdiv.classList.add('topdiv');
    topdiv.textContent = data.FirstName + ' ' + data.LastName;
    page.appendChild(topdiv);
    console.log(page);
    
}