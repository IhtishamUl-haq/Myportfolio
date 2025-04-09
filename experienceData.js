// experienceData.js
const experienceData = [
    {
        logo: "images/Exprinces/MSPL.png",
        company: "Metropolitan Warehouse & Delivery Corp",
        title: "Full Stack Developer",
        date: "Jan-2024 - Present",
        responsibilities: [
            "Development of enterprise-scale Angular and .NET applications",
            "Optimized system performance by 40% through code refactoring",
            "Designed and maintained database operations using ADO.NET and Entity Framework, utilizing stored procedures, functions, transactions, and LINQ queries for data manipulation",
             "Implemented authentication and authorization mechanisms using JWT tokens and custom role management."
        ]
    },
    {
        logo: "images/Exprinces/estrats.png",
        company: "E-Strats",
        title: "Junior Full Stack Developer",
        date: "Aug-2022 - Jan-2024",
        responsibilities: [
            "Built web applications using ASP.NET MVC framework",
            "Developed responsive UI components with Bootstrap",
            "Collaborated in Agile development environment",
            "Resolved critical bugs across multiple projects",
            "Managed version control using Git"
        ]
    }
];

// Export the data if using modules, or make it globally available
// For module usage:
// export default experienceData;

// For global usage:
window.experienceData = experienceData;