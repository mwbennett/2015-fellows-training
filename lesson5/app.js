/* 
* @Author: Mark Bennett
* @Date:   2015-07-20 17:32:26
* @Last Modified by:   Mark Bennett
* @Last Modified time: 2015-07-21 17:57:23
*/

'use strict';


// This function ensures that the HTML on a page loads before the javascript gets executed.
// Read more here: https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
  
  var candidateName = candidateInfo.name;
  $(".name").text(candidateName);

  $(".contact-info").html("<div class='phone'><b>Phone: </b>" + candidateInfo.phone + "</div><div class='email'><b>Email: </b>" + candidateInfo.email + "</div><div class='address'><b>Address: </b>" + candidateInfo.address + "</div>");

  candidateInfo.experience.forEach(function(job) {
    console.log(job.title);

    // opens a div to hold the job data 
    var jobInfo = "<div class='exp'>";
    // YOUR CODE BELOW: change the title variable to be the correct title for each job in the data object 
    
    var title = job.title;
    // add the title for each jobInfo 
    jobInfo += "<h3 class='job-title'>" + title + "</h3>";
    // add the company name 
    jobInfo += "<h4 class='job-company clearfix'>" + job.company + "</h4>";
    // add description 
    jobInfo += "<p class='job-description'>" + job.description + "</p>";
    // closes the div that holds data for each jobInfo 
    jobInfo += "</div>";
    // appends the new stringified html to our page
    $(".experience").append(jobInfo);
  });

  candidateInfo.education.forEach(function(edu) {
    console.log(edu.title);

    // opens a div to hold the job data 
    var schoolInfo = "<div class='school'>";
    // YOUR CODE BELOW: change the title variable to be the correct title for each job in the data object 
    
    var school = edu.school;
    schoolInfo += "<h3 class='job-title'>" + school + "</h3>";
    schoolInfo += "<h4 class='job-company clearfix'>" + edu.degree + "</h4>";
    schoolInfo += "<p class='job-description'>" + edu.years + "</p>";
    schoolInfo += "</div>";
    $(".education").append(schoolInfo);
  });

  candidateInfo.activities.forEach(function(activity) {
    console.log(activity.title);

    // opens a div to hold the job data 
    var activityInfo = "<div class='activity'>"; 
    var title = activity.title;
    activityInfo += "<h3 class='job-title'>" + title + "</h3>";
    activityInfo += "<h4 class='job-company clearfix'>" + activity.description + "</h4>";

    // closes the div that holds data for each activityInfo 
    activityInfo += "</div>";
    // appends the new stringified html to our page
    $(".activities").append(activityInfo);
  });


});