import Views from "../../../views";
import { validateCustomerLogin } from "./CustomerValidations";
import { loginBody } from "../../../types";
import { RESULT_STATUS } from "../../../constant";
import { Response } from "express";

export default async function LoginCustomer({ body: { email, password } }: { body:  loginBody  },res:Response) 
{
  try {
    await validateCustomerLogin.validateAsync({email,password}, { abortEarly: false });
    const loggedInCustomer = await Views.CustomerViews.loginCustomerViews(
      {email,password});
    return res.status(200).json(loggedInCustomer);
  } catch (error: any) {
    if (error.name === "ValidationError") {
      return {
        status: RESULT_STATUS.FAILURE,
        message: "Validation error occurred while Logging the user.",
        error: error.details.map((err: any) => err.message),
      };
    } else {
      console.error("An error occurred while Logging the Customer:", error);
      return {
        status: RESULT_STATUS.FAILURE,
        message: "An error occurred while Logging in the Customer.",
        error: error.message || "Unknown error",
      };
    }
  }
}
