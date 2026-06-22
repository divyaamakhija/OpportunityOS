function generateRoadmap() {
    alert("Roadmap button clicked!");
}

function analyzeSkills() {

    const skills =
        document.getElementById("skills").value;

    const role =
        document.getElementById("skillRole").value;

    window.location.href =
        "/skill-gap?skills=" +
        encodeURIComponent(skills) +
        "&role=" +
        encodeURIComponent(role);
}