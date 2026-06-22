package com.opportunityos.opportunityos.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @GetMapping("/roadmap")
    public String roadmap(@RequestParam String role) {

        if (role.equalsIgnoreCase("AI Engineer")) {
            return pageTemplate(
                    "AI Roadmap",
                    """
                    <h1>🚀 AI Engineer Roadmap</h1>

                    <ul>
                        <li>Learn Java</li>
                        <li>Learn Python</li>
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>LLMs</li>
                        <li>AI Engineer</li>
                    </ul>
                    """
            );
        }

        if (role.equalsIgnoreCase("Web Developer")) {
            return pageTemplate(
                    "Web Roadmap",
                    """
                    <h1>🌐 Web Developer Roadmap</h1>

                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                        <li>Full Stack Developer</li>
                    </ul>
                    """
            );
        }

        if (role.equalsIgnoreCase("Cyber Security")) {
            return pageTemplate(
                    "Cyber Roadmap",
                    """
                    <h1>🔐 Cyber Security Roadmap</h1>

                    <ul>
                        <li>Networking</li>
                        <li>Linux</li>
                        <li>Security Fundamentals</li>
                        <li>Ethical Hacking</li>
                        <li>SOC Analyst</li>
                    </ul>
                    """
            );
        }

        return pageTemplate(
                "Error",
                "<h1>Role not found</h1>"
        );
    }

    @GetMapping("/skill-gap")
    public String skillGap(
            @RequestParam String skills,
            @RequestParam String role) {

        if (role.equalsIgnoreCase("AI Engineer")) {

            return pageTemplate(
                    "Skill Gap Analysis",
                    """
                    <h1>📊 AI Skill Gap Analysis</h1>

                    <h2>Recommended Skills</h2>

                    <ul>
                        <li>Python</li>
                        <li>Machine Learning</li>
                        <li>Deep Learning</li>
                        <li>LLMs</li>
                    </ul>
                    """
            );
        }

        if (role.equalsIgnoreCase("Web Developer")) {

            return pageTemplate(
                    "Skill Gap Analysis",
                    """
                    <h1>📊 Web Development Skill Gap</h1>

                    <ul>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Spring Boot</li>
                    </ul>
                    """
            );
        }

        if (role.equalsIgnoreCase("Cyber Security")) {

            return pageTemplate(
                    "Skill Gap Analysis",
                    """
                    <h1>📊 Cyber Security Skill Gap</h1>

                    <ul>
                        <li>Linux</li>
                        <li>Networking</li>
                        <li>Ethical Hacking</li>
                    </ul>
                    """
            );
        }

        return pageTemplate(
                "Error",
                "<h1>Role not found</h1>"
        );
    }

    private String pageTemplate(String title, String content) {

        return """
                <html>
                <head>

                <title>%s</title>

                <style>

                body{
                    background:#07153a;
                    font-family:Arial,sans-serif;
                    padding:40px;
                }

                .card{
                    max-width:700px;
                    margin:auto;
                    background:white;
                    padding:30px;
                    border-radius:20px;
                    box-shadow:0 0 20px rgba(0,0,0,0.3);
                }

                h1{
                    color:#2563eb;
                }

                ul{
                    font-size:20px;
                    line-height:2;
                }

                a{
                    display:inline-block;
                    margin-top:20px;
                    text-decoration:none;
                    color:white;
                    background:#2563eb;
                    padding:10px 20px;
                    border-radius:10px;
                }

                </style>

                </head>

                <body>

                <div class="card">

                %s

                <br>

                <a href="/">⬅ Back To Home</a>

                </div>

                </body>

                </html>
                """.formatted(title, content);
    }
}