/* 
* @Author: Mark Bennett
* @Date:   2015-07-20 17:32:26
* @Last Modified by:   Mark Bennett
* @Last Modified time: 2015-07-21 17:34:30
*/


// This function ensures that the HTML on a page loads before the javascript gets executed.
// Read more here: https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
  
  var candidateName = candidateInfo.name;
  $(".name").text(candidateName);

  $(".contact-info").html("<div class='phone'><b>Phone: </b>" + candidateInfo.phone + "</div><div class='email'><b>Email: </b>" + candidateInfo.email + "</div><div class='address'><b>Address: </b>" + candidateInfo.address + "</div>");

  candidateInfo.experience.forEach(function(job) {
    console.log(job.title);

    // open a div to hold the job data 
    var jobInfo = "<div class='exp'>";
    // add the title for each jobInfo 
    jobInfo += "<h3 class='job-title'>Job Titles</h3><br>";

    // close the div that holds data for each jobInfo 
    jobInfo += "</div>";
    // append the new stringified html to our page
    $(".experience").append(jobInfo);
  });

});
