const router = require('express').Router()
const {dataGovKey, basicAuthCreds} = require('../../secrets')
// const fetch = require('node-fetch')
module.exports = router

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

// router.get('/:schoolName', (req, res) => {
//   const school = req.params.schoolName;
//   console.log(school)

//   const url = 'https://api.data.gov/ed/collegescorecard/v1/schools/' + school

//   let result;

//   fetch(url)
//     .then( response => { response.json() })
//       .then( data => {
//         console.log("data from fetch: ", data)

//         result = data[0].result;
//         let url2 =
//       })
//   res.json(school);
// });

// note: -->  sending entire gov school json to terminal
router.get('/', async (req, res) => {
  // const singleHobby = await Hobby.findByPk(req.params.id)

  // const schoolName = req.params.schoolName
  // console.log('SCHOOL NAME>>>>', schoolName)

  // const schoolState = req.params.state
  // console.log('SCHOOL STATE >>>>>>>>>', schoolState)
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
    // url: `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=${id}&api_key=${dataGovKey}`,

    // url: `https://api.data.gov/ed/collegescorecard/v1/schools?fields=latest.admissions.sat_scores&api_key=${dataGovKey}`,
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
// setTimeout(() => {
//   console.log('SCHOOLS>>>>>>>', schools)
// }, 8000)
// console.log('SCHOOLS OUTSIDE TIMEOUT>>>>>>>', schools)

// ================================
// ================================

// ;(`https://api.data.gov/ed/collegescorecard/v1/schools?fields=latest.admissions.sat_scores&api_key=${dataGovKey}`)
// ;(`https://api.data.gov/ed/collegescorecard/v1/schools?fields=2018.school.operating.student.enrollment.all,school.name&school.state=WI&api_key=${dataGovKey}`)
// ;(`https://api.data.gov/ed/collegescorecard/v1/schools?api_key=${dataGovKey}&fields=2015.student.enrollment.all,school.name&school.state=AL`)

// ================================  vvvv EXAMPLE FROM STACK OVERFLOW vvvv  ================================
// function getData(offset, limit) {
//   // fetch('https://api.data.gov.in/resource/386ce542-8e39-4c4c-98e0-ddc28c2b5c56?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=' + offset + '&limit=' + limit)

//   fetch(
//     `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`
//   )
//     .then((response) => {
//       return response.json()
//     })
//     .then((json) => {
//       console.log(
//         `Data length from offset #${offset}: `,
//         JSON.stringify(json).length
//       )
//     })
// }

// // Call for a few offsets.
// let offsets = [0, 1, 2, 3, 4]

// offsets.forEach((offset) => getData(offset, 10))
// ================================  ^^^^ EXAMPLE FROM STACK OVERFLOW ^^^^  ================================

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
