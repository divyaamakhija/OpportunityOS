function startApp() {

    let role = prompt(
        "Choose a career:\n\nAI\nWeb\nCyber"
    );

    if(role){
        window.location.href =
            "/roadmap?role=" + role;
    }
}
function generateRoadmap() {

    let role = document.getElementById("role").value;

    window.location.href =
        "/roadmap?role=" + role;
}
function analyzeSkills() {

    let skills =
        document.getElementById("skills").value;

    let role =
        document.getElementById("skillRole").value;

    window.location.href =
        "/skill-gap?skills=" + skills +
        "&role=" + role;
}
function analyzeResume(){

    let resume =
        document.getElementById("resume").value;

    window.location.href =
        "/resume-analysis?resume=" +
        encodeURIComponent(resume);
}