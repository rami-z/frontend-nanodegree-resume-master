$("#mapDiv").append(googleMap);
var bio = {
    name: "Rami AlZahrani",
    role: "Front End Developer",
    contacts: {
        mobile: "0596720052",
        email: "ra-mi@hotmail.com",
        github: "ramimalzahrani",
        twitter: "kokoshnel",
        location: "Jeddah"
    },
    welcomeMessage: "Welcome To My Resume",
    skills: ["JavaScript", "HTML", "CSS", "jQuery"],
    biopic: "images/me.jpg",
    display: function() {
        var name = HTMLheaderName.replace("%data%", bio.name);
        var role = HTMLheaderRole.replace("%data%", bio.role);
        var mobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var email = HTMLemail.replace("%data%", bio.contacts.email);
        var github = HTMLgithub.replace("%data%", bio.contacts.github);
        var twitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var location = HTMLlocation.replace("%data%", bio.contacts.location);
        var welcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        var biopic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(name, role);
        $("#topContacts,#footerContacts").append(mobile, email, twitter, github, location);
        $("#header").append(welcomeMessage, biopic);
        $("#header").append(HTMLskillsStart);
        for (var r = 0; r < bio.skills.length; r++) {
            var skills = HTMLskills.replace("%data%", bio.skills[r]);
            $("#skills:last").append(skills);
        }
    }
};
var education = {
    schools: [{
            name: "Alahanf Bin Qiys",
            location: "Jeddah",
            degree: "High School",
            majors: ["Natural Science"],
            dates: "2003-2004"
        },
        {
            name: "Saudi Electornic University",
            location: "Jeddah",
            degree: "Bachelor",
            majors: ["Information Technology"],
            dates: "20014-2017"
        }
    ],
    onlineCourses: [{
        title: "HTML onlineCourses",
            school: "Udacity",
            dates: "Dec-Feb",
            url: "https://www.udacity.com"
        },
        {
            title: "CSS onlineCourses",
            school: "Udacity",
            dates: "Dec-Feb",
            url: "https://www.udacity.com"
        },
        {
            title: "JavaScript onlineCourses",
            school: "Udacity",
            dates: "Dec-Feb",
            url: "https://www.udacity.com"
        }
    ],
    display: function() {
        $("#education").append(HTMLschoolStart);
        for (var r = 0; r < education.schools.length; r++) {
            var name = HTMLschoolName.replace("%data%", education.schools[r].name);
            var degree = HTMLschoolDegree.replace("%data%", education.schools[r].degree);
            var dates = HTMLschoolDates.replace("%data%", education.schools[r].dates);
            var location = HTMLschoolLocation.replace("%data%", education.schools[r].location);
            var majors = HTMLschoolMajor.replace("%data%", education.schools[r].majors);
            $(".education-entry:last").append(name + degree, dates, location, majors);
        }
        $("#education").append(HTMLonlineClasses);
        for (var t = 0; t < education.onlineCourses.length; t++) {
            $("#education").append(HTMLschoolStart);
            var title = HTMLonlineTitle.replace("%data%", education.onlineCourses[t].title);
            var school = HTMLonlineSchool.replace("%data%", education.onlineCourses[t].school);
            var dates = HTMLonlineDates.replace("%data%", education.onlineCourses[t].dates);
            var url = HTMLonlineURL.replace("%data%", education.onlineCourses[t].url);
            $(".education-entry:last").append(title + school, dates, url);
        }

    }
};
var work = {
    jobs: [{
            employer: "PetroRabigh Company",
            title: "Plant Operator",
            location: "Rabigh",
            dates: "2005 - 2009",
            description: "Working in PetroRabigh Company as Operator in PP Plant"
        },
        {
            employer: "PetroRabigh Company",
            title: "Console Operator",
            location: "Rabigh",
            dates: "2009 - in progress",
            description: "Working in PetroRabigh Company as Console Operator in PP Plant for controling quality and run the plant"
        }
    ],
    display: function() {
        $("#workExperience").append(HTMLworkStart);
        for (var r = 0; r < work.jobs.length; r++) {
            var employer = HTMLworkEmployer.replace("%data%", work.jobs[r].employer);
            var title = HTMLworkTitle.replace("%data%", work.jobs[r].title);
            var location = HTMLworkLocation.replace("%data%", work.jobs[r].location);
            var dates = HTMLworkDates.replace("%data%", work.jobs[r].dates);
            var description = HTMLworkDescription.replace("%data%", work.jobs[r].description);
            $(".work-entry:last").append(employer + title, dates, location, description);
        }

    }
};

var projects = {
    projects: [{
            title: "Animal Trading Cards",
            dates: "7 Dec - 14 Dec",
            description: "Use what I've learned about CSS to convert a design prototype into a functional webpage!",
            images: ["images/AnimalTradingCards.jpg"]
        },
        {
            title: "Build a Portfolio Site",
            dates: "21 Dec - 27 Dec",
            description: "develop a responsive website that will display images, descriptions and links to each of the portfolio projects",
            images: ["images/PortfolioSite.png"]
        }
    ],
    display: function() {
        $("#projects").append(HTMLprojectStart);
        for (var r = 0; r < projects.projects.length; r++) {
            var title = HTMLprojectTitle.replace("%data%", projects.projects[r].title);
            dates = HTMLprojectDates.replace("%data%", projects.projects[r].dates);
            var description = HTMLprojectDescription.replace("%data%", projects.projects[r].description);
            var images = HTMLprojectImage.replace("%data%", projects.projects[r].images);
            $(".project-entry").append(title, dates, description, images);
        }
    }
};
bio.display();
education.display();
work.display();
projects.display();
