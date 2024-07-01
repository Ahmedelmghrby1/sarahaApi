import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { catchError } from "../../middleware/catchError.js";
import { User } from "../../../database/models/user.model.js";
import { sendEmail } from "../../email/email.js";
import { AppError } from "../../utils/appError.js";

const signup = catchError(async (req, res) => {
  let user = await User.insertMany(req.body);
  sendEmail(req.body.email);
  user[0].password = undefined;
  res.status(201).json({ message: "success", user });
});

const signin = catchError(async (req, res,next) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user || !bcrypt.compareSync(req.body.password, user.password))
  return next(new AppError("incorrect email or password",401));
  jwt.sign(
    { userId: user._id, name: user.username, role: user.role },
    "myNameIsAhmed",
    (err, token) => {
      res.json({ message: "success", token });
    }
  );
});

export { signup, signin };
