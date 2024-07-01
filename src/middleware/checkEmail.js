import bcrypt from "bcrypt";
import { User } from "../../database/models/user.model.js";
export const checkEmail = async (req, res, next) => {
  let isfound = await User.findOne({ email: req.body.email });
  if (isfound) return res.status(409).json({ message: "Email already exists" });
  req.body.password = bcrypt.hashSync(req.body.password, 8);
  next();
};
