import { Message } from "../../../database/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";
import { AppError } from "../../utils/appError.js";
const addMessage = catchError(async (req, res) => {
  req.body.receiverId = req.params.id;
  let message = await Message.insertMany(req.body);
  res.status(201).json({ message: "success", message });
});

const getAllMessage = catchError(async (req, res,next) => {
  let messages = await Message.find({ receiverId: req.user.userId });
  if (messages.length > 0)
    res.status(200).json({ message: "success", messages });
  else next(new AppError("no message found",404));

});

const deleteMessage = catchError(async (req, res,next) => {
  let message = await Message.findByIdAndDelete(req.params.id, req.body);
  if (!message) return next(new AppError("message not fond",404));

  res.status(200).json({ message: "message deleted successfully" });
});

export { addMessage, getAllMessage, deleteMessage};
