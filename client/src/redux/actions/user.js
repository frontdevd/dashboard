import axios from 'axios'
import {setUser, setUserError} from "../reducers/userReducer";
import {baseUrl} from "../../config";

export const login = (email, password) => {
  return async function(dispatch) {
   try {
     const response  = await axios.post(`${baseUrl}api/auth/login`, {
       email,
       password
     })
     dispatch(setUser(response.data.user))
     localStorage.setItem('token', response.data.token)
   } catch (e) {
     dispatch(setUserError(e.response.data.message))
     console.log('fetchUser', e.response.data.message);
   } finally {

   }
  }
};

export const auth =  () => {
  return async dispatch => {
    try {
      const response = await axios.get(`${baseUrl}api/auth/auth`,
        {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
      )
      dispatch(setUser(response.data.user))
      localStorage.setItem('token', response.data.token)
    } catch (e) {
      localStorage.removeItem('token')
    }
  }
}

