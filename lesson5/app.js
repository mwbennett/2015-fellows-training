/* 
* @Author: Mark Bennett
* @Date:   2015-07-20 17:32:26
* @Last Modified by:   Mark Bennett
* @Last Modified time: 2015-07-21 17:45:05
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

  // NOW YOU TRY - Use the looping structure that was used for jobs above as a template for 
  // adding Andrew's education and activities data to his resume. Loop through each element 
  // in the education array and add the related data. 

});