function fatchdata() {
    window.location.href = "templates.html";
}


let page = document.getElementById('page');
function simplecv() {
    window.location.href = "resume.html";
    let section = document.createElement('section');
    section.innerHTML = `
    <h1>Simple CV</h1>
    <p>This is a simple CV section created with JavaScript.</p>
`;
    page.appendChild(section);

}
