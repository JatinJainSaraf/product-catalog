import bcrypt from "bcryptjs";
import Customer from "../../models/customer";
import { registerBody } from "../../controllers/customer/commanParams/registerBody";

export default async function createCustomer({name, email, password,phone,zipCode}:registerBody) {
  try {
    const existingCustomer = await Customer.findOne({ email });
    if (existingCustomer) {
      return {
        status: "failure",
        message: "User already exists. Please login.",
      };
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const newCustomer = await Customer.create({
      name,
      email,
      password: hashedPassword,phone,zipCode

    });
    await newCustomer.save();
       return {
      status: "success",
      message: "Registration Success",
      data: {
        id: newCustomer._id,
      },
    };
  } catch (error: any) {
    console.error("An error occurred while registering the user:", error);
    throw new error();
  }
}