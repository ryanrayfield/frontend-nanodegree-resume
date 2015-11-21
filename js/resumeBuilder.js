
/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
$("#main").append("Ryan Rayfield");
var awesomeThoughts = "I am Ryan and I am AWESOME";
console.log(awesomeThoughts);

var funThoughts = awesomeThoughts.replace("AWESOME", "fun");

console.log(funThoughts);
$("#main").append(funThoughts);
*/
var formattedName = HTMLheaderName.replace("%data%", "Ryan Rayfield");
$("#header").prepend(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%", "CTO");
$("#header").append(formattedRole);

//var skills = ["VB Script", "T-SQL", "html", "css", "Javascript"];


//$("#main").append(bio.welcomeMessage);


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
		}
		, {
			"employer": "US Squash",
			"title": "Director of Technology",
			"location": "New York, NY",
			"dates": "2012-present",
			"description": "Head of product and leader of engineering teams",
			"images": ["http://placeimg.com/150/150/", "http://placeimg.com/150/150/", "http://placeimg.com/150/150/"]
		}
	]
};

var projects = {
	"projects": [{
		"title": "Portfolio",
		"dates": "Oct",
		"description": "Great Portfolio",
		"images": "http://placeimg.com/640/480/tech"
	}
		, {
			"title": "Resume",
			"dates": "Nov",
			"description": "Great Resume",
			"images": "http://placeimg.com/640/480/nature"

		}]
};

projects.display = function () {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		console.log(projects.projects[project]);
		var fomattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(fomattedTitle);
		var fomattedDate = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(fomattedDate);
		var fomattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(fomattedDescription);
		var fomattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
		$(".project-entry:last").append(fomattedImage);
	}
}


projects.display();

var bio = {
	"name": "Ryan Rayfield",
	"role": "CTO",
	"contacts": {
		"mobile": "609-555-5555",
		"email": "r***@gmail.com",
		"location": "Philadelphia",
		"github": "ryanrayfield",
		"twitter": "koaray"
	},
	"biopic": "images/ryan.jpg",
	"welcomeMessage": "A man with a plan",
	"skills": ["VB Script", "T-SQL", "html", "css", "Javascript"]
};


var education = {
	"schools": [
		{
			"name": "University of Pennsylvania",
			"location": "Philadeliphia",
			"degree": "BA",
			"majors": ["Material Science", "Mathematics"]
		},
		{
			"name": "Udacity",
			"location": "San Fran",
			"degree": "Nano",
			"majors": ["Front End Developer", "Full Stack Engineer"]
		}
	],
	"onlineCourses": [{
		"title": "Into to HTML",
		"school": "Udacity",
		"dates": "October - December 2015",
		"url": "www.udacity.com"
	}, {
			"title": "Intro to Electrical Engineering",
			"school": "MIT",
			"dates": "October - December 2013",
			"url": "www.edx.org"

		}]
};


if (bio.skills.length > 0) {

	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
};


function displaywork() {
	$("#workExperience").append(HTMLworkStart);

	for (job in work.jobs) {
		console.log(work.jobs[job]);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	};
}
displaywork();



function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[0] = name[0].slice(0, 1).toUpperCase() +
	name[0].slice(1).toLowerCase();


	return name[0] + " " + name[1];
	/*
	var fullName = name.trim().split(" ");
	console.log(fullName);
	var firstIn=fullName[0].slice(0,1).toUpperCase();
	firstIn.slice(1).toLowerCase();
	var lastIn = fullName[1].toUpperCase();
	var internationalName = firstIn+" "+lastIn;
	return internationalName;
	*/
};
$('#main').append(internationalizeButton);
//inName(bio.name);

$('#mapDiv').append(googleMap);