import axios from 'axios'
const {dataGovKey} = require('../../secrets')

const GET_SCHOOL = 'GET_SCHOOL'

const getSchool = data => {
  return {
    type: GET_SCHOOL,
    data: data
  }
}

const initialState = []

export const fetchSchool = query => {
  return async dispatch => {
    try {
      // const searchUrl = `https://api.spoonacular.com/food/menuItems/search?query=${query}&number=2&apiKey=790dc5b49b474c409e068307c9773d08`
      // const res = await axios.get(searchUrl)
      let apiUrl = `https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&2015.academics.program_available.assoc_or_bachelors=true&2015.student.size__range=1..&school.degrees_awarded.predominant__range=1..3&school.degrees_awarded.highest__range=2..4&id=240444&api_key=${dataGovKey}`

      const res = await axios.get(apiUrl)
      dispatch(getSchool(res.data.schools))
    } catch (error) {
      console.log('error', error)
    }
  }
}

export default function foodReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECIPE: {
      return action.data
    }
    default:
      return state
  }
}
