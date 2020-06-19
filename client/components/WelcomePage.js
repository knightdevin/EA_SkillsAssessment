import React from 'react'

export default function WelcomePage() {
  return (
    <div className="welcome">
      <div className="welcomePhotoContainer">
        <img
          src="https://www.telecom-sudparis.eu/en/wp-content/uploads/sites/3/2017/08/data-access-bannerv2.jpg"
          className="welcomePhoto"
        />
      </div>
      <div className="rightText">
        <h2>Hi Education Analytics Team!</h2>
        <h4>Welcome to Devin Knight's Skills Assessment</h4>
      </div>
      <div className="welcomeText">
        <h4>Overview:</h4>
        <p>
          As requested, React was used to build front-end components needed for
          this assessment. The Recharts library was used to create some basic
          visuals, each of which are in their own component and populated with
          data from the provided Data.Gov query. My API key has been hidden in a
          secrets file within the root of this project. The key and a screenshot
          of the file was emailed with a link to this project for your review.
        </p>
        <h4>Project Requirements:</h4>
        <p>
          I have pasted the instructions below for your convience as you
          evaluate this assessment. Requirements A page that will display the
          most recent school year data in a modern looking and mobile friendly
          page.
        </p>
        <li>School name (and, if present, a school name alias)</li>
        <li>School website</li>
        <li>School city</li>
        <li>School state</li>
        <li>School zip</li>
        <li>Total # of students</li>
        <li>
          A donut chart of program percentages out of 100 (only values of not
          null)
        </li>
        <li>A donut chart of race/ethnicity (only values of not null)</li>
        <li>
          Any one graph of your choosing for any other metrics in the API call
        </li>
        <li>A button to save the page as a pdf</li>
        <li>A button to download the data that populated the page</li>
        <li>A button to print the page</li>
        <p>
          Thank you for sending this assessment. I'm happy to answer any
          questions you may have as you continue assessing candidates for the
          opening.
        </p>

        <div className="contactInfo">
          <h4>Contact Information:</h4>
          <ul>
            <a
              href="https://www.linkedin.com/in/devinknight/"
              style={{color: 'blue', textDecoration: 'underline'}}
            >
              LinkedIn Profile
            </a>
          </ul>
          <ul>
            <a
              href="https://drive.google.com/file/d/180O6mrj-E9L4Pfd4P6-n-P0ZRpzDq9uX/view?usp=sharing"
              style={{color: 'blue', textDecoration: 'underline'}}
            >
              Resume
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
