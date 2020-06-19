const router = require('express').Router()
const {dataGovKey, basicAuthCreds} = require('../../secrets')
// const fetch = require('node-fetch')
module.exports = router

// note: -->  sending entire gov school json to terminal
router.get('/', async (req, res) => {
  const schoolJSON = await getSchoolsFromApi()
  res.json(schoolJSON)
})

let schools

// code snipped created through postman  // --> id extracted was 240444
// school.name extracted as well as school.state
function getSchoolsFromApi() {
  var request = require('request')
  var options = {
    method: 'GET',
    url: `https://api.data.gov/ed/collegescorecard/v1/schools?fields=id,school.name,school.state&api_key=${dataGovKey}`,
    headers: {
      Authorization: basicAuthCreds
    }
  }
  request(options, function(error, response) {
    if (error) throw new Error(error)
    schools = response.body
    console.log('RESPONSE.BODY>>>>>', response.body)
    // this is console to terminal...but it's not actually sending the json anywhere
    // response.send(response.body)
  })
}
