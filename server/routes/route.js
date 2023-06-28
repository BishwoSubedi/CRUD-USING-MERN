import express from "express";
import { UserControl,getUser,OneUser,editUser,deleteUser } from "../controller/userController.js";

const router=express.Router();

router.post('/add',UserControl)
router.get('/all',getUser)
router.get('/:id',OneUser)
router.put('/:id',editUser)
router.delete('/:id',deleteUser)

export default router;