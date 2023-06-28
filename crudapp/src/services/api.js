import axios from 'axios';

const URL='http://localhost:8000';
export const addUser=async(data)=>{
    try {
      return await axios.post(`${URL}/add`,data);
    } catch (error) {
       console.log("Error whie add User api",error) 
    }
}

export const getUser=async()=>{
  try {
     return await axios.get(`${URL}/all`)
  } catch (error) {
    console.log("Error While calling get user api",error)
  }
}
export const OneUser=async(id)=>{
  try {
    return await axios.get(`${URL}/${id}`)
  } catch (error) {
    console.log('Error while Loading One User Api',error);
  }
}

export const editUser=async(user,id)=>{
  try {
   return await axios.put(`${URL}/${id}`,user);
  } catch (error) {
    console.log("Error While Calling Edit User Api",error)
  }
}

export const deleteUser=async(id)=>{
  try {
    return await axios.delete(`${URL}/${id}`)
  } catch (error) {
    console.log("Error While Calling Delete User Api",error)

  }
}