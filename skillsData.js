// skillsData.js
const skillsData = {
    categories: [
        {
            name: "Backend Development (.NET)",
            skills: [
                { icon: "fab fa-microsoft", name: "C# & .NET Core", type: "backend" },
                { icon: "fas fa-laptop-code", name: "ASP.NET Core MVC", type: "backend" },
                { icon: "fas fa-code", name: "Web API", type: "backend" },
                { icon: "fas fa-database", name: "Entity Framework", type: "backend" },
                { icon: "fas fa-server", name: "SQL Server", type: "backend" },
                { icon: "fas fa-key", name: "JWT/OAuth", type: "backend" },
                { icon: "fas fa-project-diagram", name: "Microservices", type: "backend" }
            ]
        },
        {
            name: "Frontend Development (Angular)",
            skills: [
                { icon: "fab fa-angular", name: "Angular", type: "frontend" },
                { icon: "fab fa-js-square", name: "TypeScript", type: "frontend" },
                { icon: "fas fa-bolt", name: "RxJS", type: "frontend" },
                { icon: "fas fa-boxes", name: "State Management", type: "frontend" },
                { icon: "fab fa-html5", name: "HTML5/CSS3", type: "frontend" },
                { icon: "fab fa-bootstrap", name: "Bootstrap", type: "frontend" }
            ]
        },
        {
            name: " Additional Skills",
            skills: [
                { icon: "fab fa-git-alt", name: "Git", type: "other" },
                //{ icon: "fab fa-docker", name: "Docker", type: "devops" },
               // { icon: "fas fa-ship", name: "Kubernetes", type: "devops" },
                //{ icon: "fas fa-tasks", name: "CI/CD", type: "devops" },
                { icon: "fas fa-users", name: "Agile/Scrum", type: "other" },
                { icon: "fas fa-sync-alt", name: "SignalR", type: "other" }
            ]
        }
    ],
    floatingElements: [
        { width: "120px", height: "120px", background: "var(--primary-color)", top: "15%", left: "10%", delay: "0s", duration: "18s" },
        { width: "180px", height: "180px", background: "var(--accent-color)", top: "65%", left: "75%", delay: "3s", duration: "22s" },
        { width: "90px", height: "90px", background: "var(--secondary-color)", top: "35%", left: "65%", delay: "6s", duration: "20s" },
        { width: "150px", height: "150px", background: "#9b59b6", top: "75%", left: "25%", delay: "9s", duration: "25s" }
    ]
};

// Export the data if using modules, or make it globally available
// For module usage:
// export default skillsData;

// For global usage:
window.skillsData = skillsData;