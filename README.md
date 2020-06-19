# EdAnalytics_Assessment

Project Description:

This is a skills assessment from Devin Knight for the Junior Full Stack Web Developer opening with Education Analytics.

Tasks requested from assessment are below. They have been separated according to the name of the component where they're located and feature a note of where each is viewable on the page.

SchoolOverview Component:

* School name - Name is rendered just below the navbar (in SchoolInfo component) and in a bulleted overview
* School website - Website is rendered in a bulleted overview
* School city & state - City & State are rendered in a single line within the bulleted overview
* School zip - Zip code is rendered in a bulleted overview
* Total # of students - Total number of students is rendered in a bulleted overview (it's also visible in a line chart of student enrollment)

ProgramsChart Component:

* A donut chart of program percentages out of 100 (only values of not null) - This donut chart from the recharts library showcases percentage breakdowns of programs at the queried school for the latest academic year. (Note: all null values have been filtered out).

RaceEthnicityChart Component:

* A donut chart of race/ethnicity (only values of not null) - This is a donut chart from the recharts library that displays the percentage of different Ethnicities / Races that made up the queried school's student body during the latest academic year. (Note: all null values have been filtered out).

EnrollmentChart Component:

* Any one graph of your choosing for any other metrics in the API call - A line chart from the recharts library features the last ten years of student enrollment. The graph features graduate students and undergraduate students and displays total number of enrolled students for each displayed year.

SchoolInfo Component:

* A button to save the page as a pdf - A button to print the page as a pdf on the upper right of the screen under the navbar can be used to save the page as a pdf in the print preview screen.
* (NOTE =====>>> WORKING ON THIS NOW) A button to download the data that populated the page - A button to download the page as a PDF is on the upper right corner under the navbar. (Note: next to it is a button to download a PNG of the file instead)
* (NOTE =====>>> WORKING ON THIS NOW) A button to print the page - A button to print the page as a pdf is available on the upper right of the screen under the navbar.

As outlined in the directions, an API.DATA.GOV key was obtained and incorporated into this project. The key has been secured in a secrets folder and will be made available through an email to company recruiters / hiring managers. If you have any questions, please feel free to contact me at:

* Email: knightdevin@hotmail.com
* LinkedIn: linkedin.com/in/devinknight/

Installation Instructions:

Please Fork and clone this repo to your local machine
To install the package json, type this command: npm install
Then createdb EdAnalytics_Assessment (or if you don't have the createdb utility, simply create a database called EdAnalytics_Assessment via Postico or your preferred means). Please note, a backend was not built out for this assessment. The boilermaker code base used for this assessment may require that database to function.

This site was created by Devin Knight in June 2020.
