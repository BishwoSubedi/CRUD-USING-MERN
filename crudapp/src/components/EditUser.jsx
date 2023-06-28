import { useState ,useEffect} from "react";
import { editUser, OneUser } from "../services/api";
import { useNavigate,useParams } from "react-router-dom";

import {
  FormControl,
  FormGroup,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 30px;
  }
`;

const EditUser = () => {
  const defaltValue={
   name:" ",
   username:" ",
   email:" ",
   phone:" "
  }
 
  const [user,setUser]=useState(defaltValue);

  const navigate=useNavigate();
  const {id}=useParams();
  
  useEffect(()=>{
    loadUserDetails();
  },[])
  const loadUserDetails=async()=>{
    const response =  await OneUser(id);
    setUser(response.data);
  }

 //Updating Users
 const editUserDetails=async()=>{
   await editUser(user,id);
   navigate('/all')
 }
  
  //Getting User Details
  const onChangeHandler = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
    // console.log(user);
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={onChangeHandler} name="name" value={user.name}/>
      </FormControl>
      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input onChange={onChangeHandler} name="username"  value={user.username} />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onChangeHandler} name="email"  value={user.email} />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onChangeHandler} name="phone"  value={user.phone}/>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={editUserDetails}>Edit User</Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
