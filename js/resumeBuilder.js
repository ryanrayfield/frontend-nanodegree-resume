
var work = {
    "jobs": [{
        "employer": "Accenture",
        "title": "Analyst",
        "location": "Chicago, IL",
        "dates": "2007-2009",
        "description": "Power Point Monkey",
        "images": ["http://placeimg.com/150/150/", "http://placeimg.com/150/150/", "http://placeimg.com/150/150/"]
    }, {
        "employer": "Proscape",
        "title": "Reporting and Anlytics lead",
        "location": "Horsham, PA",
        "dates": "2009-2012",
        "description": "Led reporting team",
        "images": ["http://placeimg.com/150/150/", "http://placeimg.com/150/150/", "http://placeimg.com/150/150/"]
    }, {
        "employer": "US Squash",
        "title": "Director of Technology",
        "location": "New York, NY",
        "dates": "2012-present",
        "description": "Head of product and leader of engineering teams",
        "images": ["http://placeimg.com/150/150/", "http://placeimg.com/150/150/", "http://placeimg.com/150/150/"]
    }]
};

work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    work.jobs.forEach(function(job) {

        console.log(job);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        $(".work-entry:last").append(formattedLocation);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        $(".work-entry:last").append(formattedDates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedDescription);
    }, this);
}
work.display();


var projects = {
    "projects": [{
        "title": "Portfolio",
        "dates": "Oct",
        "description": "Great Portfolio",
        "images": ["http://placeimg.com/350/350/nature", "http://placeimg.com/350/350/nature", "http://placeimg.com/350/350/nature"]
    }, {
        "title": "Resume",
        "dates": "Nov",
        "description": "Great Resume",
        "images": ["http://placeimg.com/350/350/nature", "http://placeimg.com/350/350/nature", "http://placeimg.com/350/350/nature"]

    }]
};


projects.display = function() {
    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        console.log(projects.projects[project]);
        var fomattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(fomattedTitle);
        var fomattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(fomattedDate);
        var fomattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(fomattedDescription);
        var fomattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[0]);
        $(".project-entry:last").append(fomattedImage);
        var fomattedImageTwo = HTMLprojectImage.replace("%data%", projects.projects[project].images[1]);
        $(".project-entry:last").append(fomattedImageTwo);
        var fomattedImageThree = HTMLprojectImage.replace("%data%", projects.projects[project].images[2]);
        $(".project-entry:last").append(fomattedImageThree);
    }
};
projects.display();

var bio = {
    "name": "Ryan Rayfield",
    "role": "CTO",
    "contacts": {
        "mobile": "609-555-5555",
        "email": "r***@gmail.com",
        "github": "ryanrayfield",
        "twitter": "koaray",
        "location": "Philadelphia PA"
    },
    "welcomeMessage": "A man with a plan",
    "skills": ["VB Script", "T-SQL", "html", "css", "Javascript"],
    "biopic": "http://placeimg.com/150/150"

};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedbioPic);
    var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedwelcomeMsg);



    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts,#footerContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts,#footerContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts,#footerContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts,#footerContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts,#footerContacts").append(formattedLocation);

    console.log(bio.contacts.location);
    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]).replace("%id%", "s0");
        $("#skills").append(formattedSkill);
        //$("#s0").append("<paper-tooltip for=\"s0\">Sweet skill description</paper-tooltip>")
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]).replace("%id%", "s1");
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]).replace("%id%", "s2");
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]).replace("%id%", "s3");
        $("#skills").append(formattedSkill);
    }

};
bio.display();



var education = {
    "schools": [{
        "name": "University of Pennsylvania",
        "location": "Philadeliphia",
        "degree": "BA",
        "majors": ["Material Science", "Mathematics"],
        "dates": 2008,
        "url": "www.UPenn.edu"
    }, {
        "name": "Udacity",
        "location": "San Fran",
        "degree": "Nano",
        "majors": ["Front End Developer", "Full Stack Engineer"],
        "dates": 2015,
        "url": "wwww.udacity.com"
    }],
    "onlineCourses": [{
        "title": "Into to HTML",
        "school": "Udacity",
        "date": 2015,
        "url": "www.udacity.com"
    }, {
        "title": "Intro to Electrical Engineering",
        "school": "MIT",
        "date": 2013,
        "url": "www.edx.org"

    }]
};


education.display = function() {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {

        console.log(education.schools[school]);
        var formattedschoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
        $(".education-entry:last").append(formattedschoolName);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedDegree);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var fomattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(fomattedSchoolLocation);
        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedMajor);
    }

    $("#education:last").append(HTMLonlineClasses);

    for (var titles in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        console.log(education.onlineCourses[titles]);
        var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[titles].title);
        $(".education-entry:last").append(formattedOnlineTitle);
        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[titles].school);
        $(".education-entry:last").append(formattedOnlineSchool);
        var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[titles].date);
        $(".education-entry:last").append(formattedOnlineDate);
        var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[titles].url);
        $(".education-entry:last").append(formattedOnlineURL);

    }
};


education.display();




$('#mapDiv').append(googleMap);

//Added functionality

var el = document.getElementById('skills');
var sortable = Sortable.create(el);

// List with handle
var elm = document.getElementById('projects');
Sortable.create(elm, {
    handle: '.project-entry',
    animation: 150
});

//shine on you crazy text
// all parameters are optional and can be changed later
var config = new shinejs.Config({
    numSteps: 8,
    opacity: 1,
    shadowRGB: new shinejs.Color(255, 255, 255)
});


// pass the config in the constructor
//var shine = new shinejs.Shine(document.getElementById('your-shine-object'), config);

var shine = new shinejs.Shine(document.getElementById('name'), config);
window.addEventListener('mousemove', function(event) {
    shine.light.position.x = event.clientX;
    shine.light.position.y = event.clientY;
    shine.draw();
}, false);