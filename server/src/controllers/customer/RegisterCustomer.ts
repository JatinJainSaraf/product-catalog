import { RegisterUser } from "../../views/customer-register";
import { validateCustomerRegistration } from "./CustomerValidations"; 

export default async function CheckRegisterCustomer(req: any, res: any) {
  try {
    await validateCustomerRegistration.validateAsync(req.body, { abortEarly: false });
    const createdUser = await RegisterUser(req, res);
    return res.status(200).json({
      status: "Success",
      message: "User Created Successfully",
      data: createdUser
    });
  } catch (error:any) {
    console.error("Error occurred while creating customer:", error);
    if (error.name === "ValidationError") {
      return res.status(400).json({
        status: "Failure",
        message: "Validation error occurred while registering the user.",
        error: error.details.map((err: any) => err.message),
      });
    } else {
      return res.status(500).json({
        status: "Failure",
        message: "An error occurred while registering the user.",
        error: error.message || "Unknown error",
      });
    }
  }
}