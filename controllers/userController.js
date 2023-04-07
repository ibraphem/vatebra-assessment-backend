import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";


export const signIn = async (payload) => {
    try {
      const user = await User.findOne({ email: payload?.email });
      if (user) {
      
        if (bcrypt.compareSync(payload?.password, user.password)) {
          return {
            status: true,
            message: "User logged in successfully",
            data: {
                _id: user.id,
                name: user.name,
                phone: user.phone,
                email: user.email,
                token: generateToken(user),
              },
          };
        } else {
          return { status: false, message: "Incorrect Credentials", data: null };
        }
      } else {
        return { status: false, message: "User Not found", data: null };
      }
    } catch (error) {
      return { status: false, message: error?.message, data: error };
    }
  };