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

    const role = document.getElementById("role").value;
    const result = document.getElementById("result");

    let roadmap = "";

    if(role === "AI Engineer") {
        roadmap = `
        <h3>AI Engineer Roadmap</h3>

        <p><b>Beginner</b></p>
        <ul>
            <li>Python</li>
            <li>Git & GitHub</li>
            <li>SQL</li>
        </ul>

        <p><b>Intermediate</b></p>
        <ul>
            <li>Machine Learning</li>
            <li>Pandas</li>
            <li>TensorFlow</li>
        </ul>

        <p><b>Advanced</b></p>
        <ul>
            <li>Deep Learning</li>
            <li>LLMs</li>
            <li>MLOps</li>
        </ul>
        `;
    }

    else if(role === "Frontend Developer") {
        roadmap = `
        <h3>Frontend Developer Roadmap</h3>

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Deployment</li>
        </ul>
        `;
    }

    else if(role === "Backend Developer") {
        roadmap = `
        <h3>Backend Developer Roadmap</h3>

        <ul>
            <li>Java</li>
            <li>Spring Boot</li>
            <li>SQL</li>
            <li>REST APIs</li>
            <li>Docker</li>
            <li>AWS</li>
        </ul>
        `;
    }

    else if(role === "Cybersecurity Analyst") {
        roadmap = `
        <h3>Cybersecurity Roadmap</h3>

        <ul>
            <li>Networking</li>
            <li>Linux</li>
            <li>Ethical Hacking</li>
            <li>Burp Suite</li>
            <li>OWASP</li>
            <li>Penetration Testing</li>
        </ul>
        `;
    }

    else {
        roadmap = `
        <h3>Data Scientist Roadmap</h3>

        <ul>
            <li>Python</li>
            <li>Statistics</li>
            <li>Pandas</li>
            <li>Machine Learning</li>
            <li>Data Visualization</li>
            <li>Deep Learning</li>
        </ul>
        `;
    }

    result.innerHTML = roadmap;
}
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