import  { useEffect, useState } from "react";
import { getUser,deleteUser } from "../services/api";
import {Table,TableBody,TableHead,TableRow,TableCell,styled, Button} from '@mui/material';
import { Link } from "react-router-dom";

const StyledTable=styled(Table)`
  width:80%;
  margin: 2rem auto;
`
const THead=styled(TableRow)`
  background:#000;
  &> th{
    color:#fff;
    font-size:20px;
  }
`
const TBody=styled(TableRow)`
&> td{
font-size:18px;
padding-left:20px;
margin:2rem;
}
`

const AllUsers = () => {
  const[users,setUsers]=useState([]);
  useEffect(()=>{
   getAlluser();
  },[]);
  const getAlluser= async()=>{
    let response=await getUser();
    setUsers(response.data);
    // console.log(response.data)
  }

  //Deleting User 
  const deleteUserHandler=async(id)=>{
   await deleteUser(id);
  }


  let i=0;
  return (
    <StyledTable>
      <TableHead>
        <THead>
          <TableCell>S.N</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell></TableCell>
        </THead>
      </TableHead>

      <TableBody>
       {
        users.map(user=>(
      <TBody key={user._id}>
      <TableCell>{i++}</TableCell>
      <TableCell>{user.name}</TableCell>
      <TableCell>{user.username}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.phone}</TableCell>
      <TableCell>
        <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${user._id}`}>Edit</Button>
        <Button variant="contained" color="secondary" onClick={()=>deleteUserHandler(user._id)}>Delete</Button>
      
      </TableCell>
      </TBody>
        ))
       }

      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
