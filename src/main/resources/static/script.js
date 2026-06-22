function generateRoadmap() {

    const role = document.getElementById("role").value;

    alert(role);

    window.location.href =
        "/roadmap?role=" + encodeURIComponent(role);
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