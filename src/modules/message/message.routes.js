import { Router } from "express";
import { addMessage, deleteMessage, getAllMessage } from "./messege.controller.js";
import { verifyToken } from "../../middleware/verifyToken.js";

const messageRouter = Router();
messageRouter.use(verifyToken);
messageRouter.post("/:id", addMessage);
messageRouter.get("/", getAllMessage);
messageRouter.delete("/:id", deleteMessage);

export default messageRouter;
