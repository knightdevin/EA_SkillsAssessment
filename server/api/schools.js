const router = require('express').Router()
import {dataGovKey, basicAuthCreds} from '../../secrets'
// const fetch = require('node-fetch')
export default router

// // initial attempt at api request....
// router.get('/schools', async (req, res, next) => {
//   try {
//     // console.log('>>>>', req.params)

//     let apiUrl = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`

//     let fetchResponse = await fetch(apiUrl)
//     const fetchedJson = await fetchResponse.json()
//     res.json(fetchedJson)
//   } catch (error) {
//     next(error)
//   }
// })

// note: -->  sending entire gov school json to terminal
router.get('/', (req, res) => {
  const schoolJSON = getSchoolsFromApi()
  res.json(schoolJSON)
})

// code snipped created through postman
function getSchoolsFromApi() {
  var request = require('request')
  var options = {
    method: 'GET',
    url: `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`,
    headers: {
      Authorization: basicAuthCreds
    }
  }
  request(options, function(error, response) {
    if (error) throw new Error(error)
    console.log(response.body)
  })
}

// ---------------------------------------- ALTERNATE THOUGHTS --------------------------------
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
