import CustomerModel from "../../models/customer";
import bcrypt from "bcryptjs";

export default async function createUser(req: any, res: any){
    try {
        const { name, email, password, phone, zipCode } = req.body;

        async function findOneCustomerByEmail(email: string) {

          try {
            const customer = await CustomerModel.findOne({ email });
            return customer;
          } catch (error) {
            console.error("Error occurred while finding customer by email:", error);
            throw error;
          }
        }
        const existingCustomer = await findOneCustomerByEmail(email);
        if (existingCustomer) {
          return res.status(400).json({
            status: "Failure",
            message: "User already exists. Please login.",
          });
        }
<<<<<<< HEAD

        const hashedPassword = await bcrypt.hash(password, 12);

=======
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
>>>>>>> 97462e939d33d92d290a993a0f7e18414737dd0a
        const newCustomer = await CustomerModel.create({
          name,
          email,
          password: hashedPassword,
          phone,
<<<<<<< HEAD
          zipCode,
        });

        return res.status(200).json({
          status: "Success",
          message: "User registered.",
          //data: newCustomer,
          data: {
            id:newCustomer._id
          }
=======
          zipcode,
        });
    
        return res.status(200).json({
          status: "Success",
          message: "User registered.",
          data: newCustomer,
>>>>>>> 97462e939d33d92d290a993a0f7e18414737dd0a
        });
      } catch (error) {
        console.error("An error occurred while registering the user:", error);
        return res.status(500).json({
          status: "Failure",
          message: "An error occurred while registering the user.",
        });
      }
}