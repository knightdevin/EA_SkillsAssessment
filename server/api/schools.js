const router = require('express').Router()
const {dataGovKey} = require('../../secrets')
// const fetch = require('node-fetch')
module.exports = router

router.get('/schools', async (req, res) => {
  // console.log('>>>>', req.params)
  // let city = req.params.city
  // let state = req.params.state
  // let apiUrl = `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${dataGovKey}&location=${city}+${state}`

  let apiUrl = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`

  let fetchResponse = await fetch(apiUrl)
  const fetchedJson = await fetchResponse.json()
  res.json(fetchedJson)
  // } catch (error) {
  //   next(error)
  // }
})

// fetch(
//   "https://api.data.gov/ed/collegescorecard/v1/schools?api_key="
//   +
//   dataGovKey +
//   "&school.name=" +
//   query +
//   "&fields=school.name,location.lon,location.lat&_per_page=100"
// ).then(res => {
//   return res.json();
// }).then(json => {
//   client.setex(college, 86400, JSON.stringify(json));
//   res.send(json);
// }).catch(err => {
//   console.error(err);
//  resp.send(202);
// });

// // `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${dataGovKey}&location=Denver+CO`

// async function getSchools() {
//   let response = await fetch(
//     `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${dataGovKey}&location=Denver+CO`
//   )
//   let data = await response.json
//   return data
// }

// note: -->  sending school json to terminal
router.get('/', async (req, res) => {
  const schoolJSON = await getSchoolsFromApi()
  res.json(schoolJSON)
})

// code snipped created through postman
function getSchoolsFromApi() {
  var request = require('request')
  var options = {
    method: 'GET',
    url: `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`,
    headers: {
      Authorization:
        'Basic YW55c3RyaW5nOlFHbmdaRE1nSldPTzNGeFA5N3pOMVpLTXdPUWQwcDRCeUVVNHhZZFg='
    }
  }
  request(options, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}
