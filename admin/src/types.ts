
export type inputFormDataTypes = {
  email: string;
  password: string;
};
export type UserFormData = {
  status: string;
  message: string;
  token: string;
  permissions:string[]
  
};

export type AddUserFormDataTypes = {
  name: string;
  email: string;
  role: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  password:string
  
};
export type AddRoleFormDataTypes={
  name: string;
}
export type EditUserFormDataTypes = {
  _id:string;
  name: string;
  email: string;
  role: string;
  streetAddress: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  password:string
  
};
export type EditRoleFormDataTypes = {
  _id:string;
  name: string;
 
};
export type UserAddReturnData = {
  status: string;
  message: string;
  data: { id: string };
};
export type RoleAddReturnData = {
  status: string;
  message: string;
  data?: {
    id: string
  }
};

export type UserEditResponseData = {
  status: string;
  message: string;
  data: { updateUser: string };
};
export type RoleEditResponseData = {
  status: string;
  message: string;
  data: {
     updateRole: string 
    };
};
export type UserDeleteReturnData = {
  status: string;
  message: string;
};

export type RoleDeleteReturnData = {
  status: string;
  message: string;
};
export type LogoutUserFormDataTypes = {
  status: string;
  message: string;
};
export type ParamsType = {
 userId:string
};

export type GetUserReturnData=
{
 
  status: string
  message: string
  data: {
    _id: string
    name: string
    email: string
    password: string
    streetAddress:string
    role:string
    postalCode: string
    city: string
    country:string
    phone: string
    isAdmin: boolean
    createdAt: string
    updatedAt: string
    __v: number

}
}

type data = {
  _id: string,
  name: string
}

export type GetRoleReturnData=
{
  status: string
  message: string
  data: data[]
 
}
export type GetAllUsersReturnData=
{
  _id: string
  name: string
  email:string
  password: string
  streetAddress: string
  role: string
  postalCode: string,
  city: string
  country: string
  phone: string
  isAdmin: boolean
  createdAt:string
  updatedAt: string
  __v: number
}


export type GetAllRolesReturnData={
status:string
message:string
data:[{
  _id: string,
  name: string
}]
}