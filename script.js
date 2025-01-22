document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById('form');

    if (!form) {
        console.error("Error: Form element not found.");
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Getting form values
        let FirstName = document.getElementById('FirstName')?.value || "";
        let LastName = document.getElementById('LastName')?.value || "";
        let Feild = document.getElementById('Feild')?.value || "";
        
        // Fix for image input
        let imageInput = document.getElementById('image');
        let imageFile = imageInput?.files[0] ? URL.createObjectURL(imageInput.files[0]) : '';

        let Email = document.getElementById('Email')?.value || "";
        let PhoneNumber = document.getElementById('PhoneNumber')?.value || "";
        let Address = document.getElementById('Address')?.value || "";
        let City = document.getElementById('City')?.value || "";
        let Cnicno = document.getElementById('Cnicno')?.value || "";
        let Skills = document.getElementById('Skills')?.value || "";
        let intermediate = document.getElementById('intermediate')?.value || "";
        let Objective = document.getElementById('Objective')?.value || "";
        let WorkingExperience = document.getElementById('Working-Experience')?.value || "";
        let Activities = document.getElementById('Activities')?.value || "";
        let Language = document.getElementById('Language')?.value || "";
        let interest = document.getElementById('interest')?.value || "";

        // Storing data in local storage
        let data = {
            FirstName,
            LastName,
            Feild,
            imageFile,  
            Email,
            PhoneNumber,
            Address,
            City,
            Cnicno,
            Skills,
            intermediate,
            Objective,
            WorkingExperience,
            Activities,
            Language,
            interest
        };

        window.localStorage.setItem('data', JSON.stringify(data));
        console.log("Data saved to local storage");

        // Delay before redirect
        setTimeout(() => {
            window.location.href = 'templates.html';
        }, 300);
    });
});


function simplecv() {
    window.location.href = 'resume.html';

    setTimeout(() => {
        document.addEventListener("DOMContentLoaded", function () {
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

            let topdiv = document.createElement('div');
            topdiv.classList.add('topdiv');
            topdiv.textContent = `${data.FirstName} ${data.LastName}`;
            page.appendChild(topdiv);
            console.log("Resume generated successfully.");
        });
    }, 50);
}

