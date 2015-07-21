/* 
* @Author: Mark Bennett
* @Date:   2015-07-20 17:32:26
* @Last Modified by:   Mark Bennett
* @Last Modified time: 2015-07-21 14:43:29
*/

'use strict';

/////////////////////////////////////////////////////////////////////////////////////////////////////
///           
///    THIS IS JAVASCRIPT! 
///           
/////////////////////////////////////////////////////////////////////////////////////////////////////

function searchExperience (keywords) {

  candidateInfo.experience.forEach(function(job) {
    if (job.description.toLowerCase().indexOf(keywords.toLowerCase()) < 0) {
      $('#'+job.identifier).hide();
    }
  });

  
}

function search () {
  var searchText = $('#searchText').val();
  searchExperience(searchText);
}

function showAll () {
  $('.exp').show()
}
//////////////////////////////////////////////
//               ADDING TO HTML             //
//////////////////////////////////////////////  

// This function ensures that the HTML on a page loads before the javascript gets executed.
// Read more here: https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
  
  // Let's start embedding our data into the HTML. We'll start by adding the name.
  // Notice that we're pulling the HTML element with the class "name" and populating the text within it. 
  // This will result in the following element: <h1 class="name">Andrew Yang</h1>
  $(document.getElementsByClassName("name")[0]).text(candidateInfo.name);

  // Next we'll add come contect info. Notice that here we want the string we're passing to be 
  // interpreted as HTML, so we use the $().html() function rather than $().text()
  $(document.getElementsByClassName("contact-info")[0]).html("<div class='phone'><b>Phone: </b>" + candidateInfo.phone + "</div><div class='email'><b>Email: </b>" + candidateInfo.email + "</div><div class='address'><b>Address: </b>" + candidateInfo.address + "</div>");

  candidateInfo.experience.forEach(function(job) {
    // open a div to hold the job data 
    var jobInfo = "<div class='exp' id='" + job.identifier + "'>";
    // add the title for each jobInfo 
    jobInfo += "<h3 class='job-title'>" + job.title + "</h3>";
    // add the company name 
    jobInfo += "<h4 class='job-company clearfix'>" + job.company + "</h4>";
    // add description 
    jobInfo += "<p class='job-description'>" + job.description + "</p>";

    ////////////////////////////////////////////////////////////////////////////////////////////
    // NOW YOU TRY - add some stringified HTML with the startDate and endDate data for each job 
    ////////////////////////////////////////////////////////////////////////////////////////////

    // close the div that holds data for each jobInfo 
    jobInfo += "</div>";
    // append the new stringified html to our page
    $(".experience").append(jobInfo);
  });

  ////////////////////////////////////////////////////////////////////////////////////////////
  // NOW YOU TRY - Use the looping structure that was used for jobs above as a template for 
  // adding Andrew's education and activities data to his resume. Loop through each element 
  // in the education array and add the related data. 
  ////////////////////////////////////////////////////////////////////////////////////////////
});
