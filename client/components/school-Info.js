import React from 'react'
const {dataGovKey} = require('../../secrets')

export default function SchoolInfo() {
  return (
    <div>
      THIS WILL BECOME THE SCHOOL VIEW!
      <ul>Name</ul>
      <ul>school website</ul>
      <ul>city (followed by stat and Zip code...etc.</ul>
      <script>
        {/* {
        console.log('about to fetch data')
        fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${dataGovKey}&location=Denver+CO`).then(response => {
          return response.json)
        })
      } */}
        TEST
      </script>
    </div>
  )
}
