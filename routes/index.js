import express from "express";
import { getNotif, getNotiByfId, saveNotif, updateNotif, deleteNotif } from "../controllers/NotificationController.js";

const router = express.Router();

//read all data
router.get('/', getNotif);
//read data by id
router.get('/:id', getNotiByfId);
//create data
router.post('/', saveNotif);
//update data
router.patch('/:id', updateNotif);
//delete data
router.delete('/:id', deleteNotif);

export default router;