import { useState } from "react";
import { addUser } from "../services/api";
import { useNavigate } from "react-router-dom";

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

const AddUser = () => {
  const defaltValue={
   name:" ",
   username:" ",
   email:" ",
   phone:" "
  }
 
  const [user,setUser]=useState(defaltValue);

  const navigate=useNavigate();
 //Adding Users
 const addUserDetails=async()=>{
   await addUser(user);
   navigate('/all')
 }
  
  //Getting User Details
  const onChangeHandler = (e) => {
    setUser({...user,[e.target.name]:e.target.value})
    // console.log(user);
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel>Full Name</InputLabel>
        <Input onChange={onChangeHandler} name="name"  />
      </FormControl>
      <FormControl>
        <InputLabel>User Name</InputLabel>
        <Input onChange={onChangeHandler} name="username" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={onChangeHandler} name="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={onChangeHandler} name="phone" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={addUserDetails}>Add User</Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
