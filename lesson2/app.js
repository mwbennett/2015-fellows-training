/* 
* @Author: Mark Bennett
* @Date:   2015-07-20 17:32:26
* @Last Modified by:   Mark Bennett
* @Last Modified time: 2015-07-21 17:25:43
*/

// This function ensures that the HTML on a page loads before the javascript gets executed.
// Read more here: https://learn.jquery.com/using-jquery-core/document-ready/
$(document).ready(function(){
  
  // Let's start embedding our data into the HTML. We'll start by adding the name.
  
  // To start, pull Andrew's name from the candidateInfo object and set it equal to a new variable named candidateName
  var candidateName = // Add your code here!;

  // Next, we'll add Andrew's name to the resume. 
  // Notice that we're pulling the HTML element with the class "name" and populating the text within it. 
  // This will result in the following element: <h1 class="name">Andrew Yang</h1>
  $(".name").text(candidateName);

  // Try following this model to add his phone, email, and address to the page as well 

});
