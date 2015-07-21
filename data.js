//////////////////////////////////////////////
//               RESUME DATA                //
//////////////////////////////////////////////

// This is our data object. An object is istelf a data type, which stores key/value pairs. 
// If you are brand new to programming and are unfamiliar with data types, you can read more at 
// http://www.w3schools.com/js/js_datatypes.asp OR at http://eloquentjavascript.net/01_values.html if you 
// want more of a narrative.

var candidateInfo = {

  // The name value is a string - as evidenced by the use of quotation marks. 
  "name": "Andrew Yang",
  // The phone value is a number - notice that it does not require quotes. Also note that unlike other languages, JavaScript 
  // does not treat integers and floats (decimals) as distinct data types - they are both numbers. 
  "phone": 6467366460,
  // email is also a string 
  "email": "andrew@ventureforamerica.org",
  // and another string 
  "address": "40 West 29th St., Suite 301, New York, NY 10001",

  // The experience value is an array - sometimes known in other languages as a list
  "experience": [
    // Each element in this array is an object that holds data for one of Andrew's old jobs... 
    {
      "title": "CEO and Founder",
      "company": "Venture for America",
      "startDate": "May 2011",
      "endDate": "Present",
      "description": "Founder and President of non-profit organization that provides a Fellowship Program for top college graduates to work for 2 years in start-up and early stage companies in lower-cost U.S. cities (e.g., Detroit, New Orleans, Providence)."
    },
    {
      "title": "Director",
      "company": "ProPhase, LLC",
      "startDate": "July 2010",
      "endDate": "Present",
      "description": "Member of Board of Directors of ProPhase, an innovative rater training and data monitoring company serving the pharmaceutical industry."
    },
    {
      "title": "Vice President",
      "company": "MMF Systems",
      "startDate": "April 2002",
      "endDate": "November 2005",
      "description": "Executive at innovative health care software start-up based in New York. Clients included Columbia Presbyterian and Weill Cornell Medical Center."
    },
    {
      "title": "Vice President",
      "company": "Crisp Wireless",
      "startDate": "April 2001",
      "endDate": "April 2002",
      "description": "Executive at mobile software platform provider for top-tier content publishers. Clients included Sony and Time Inc."
    },
    {
      "title": "Co-founder, President",
      "company": "Stargiving.com",
      "startDate": "February 2000",
      "endDate": "March 2001",
      "description": "Co-founder of Internet fund-raising company for celebrity-affiliated non-profits. Clients included Magic Johnson and MTV Networks."
    }
  ],

  education: [
    {
      "school": "Brown University",
      "degree": "B.A., Economics",
      "years": "1992-1996"
    },
    {
      "school": "Columbia University School of Law",
      "degree": "J.D.",
      "years": "1996-1999"
    }
  ],

  activities: [
    {
      "title": "Hanging out with my kid",
      "description": "He's two years old and adorable."
    },
    {
      "title": "Kicking it with team VFA",
      "description": "They're cool cats."
    }
  ]
};