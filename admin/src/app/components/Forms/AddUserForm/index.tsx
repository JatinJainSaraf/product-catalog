"use client";
import React, { useState } from "react";
import AddUserValidationSchema from './userValidation'
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { AddUserFormDataTypes } from "@/types";
import Link from "next/link";


export default function AddUserForm({ onAddingUser }: {  onAddingUser: (AddUserData: AddUserFormDataTypes) => Promise<void>; }) {
const initialState = {
  email: "",
  name: "",
  city: "",
  phone: "",
  role: "",
  country: "",
  streetAddress: "",
  postalCode: "",
  password: "",
}
  const [formData, setFormData] = useState(initialState);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddUserValidationSchema),
  });
  return (
    <>
    <form onSubmit={handleSubmit(onAddingUser)}>
    <div className="grid grid-cols-3 grid-rows-3 gap-4  px-20 py-10 bg-slate-100">
      {/* First row */}
      <div className="">
        <div className={`sm:col-span-2 ${errors.name ? "error" : ""}`}>
          <label htmlFor="name" className={`block mb-2 text-sm font-medium text-gray-900 ${errors.name ? "text-red-500" : ""
            }`}>
            Name <span className="text-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.name ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.name ? (
            <p className="text-red-500">{errors.name.message}</p>
          ) : null}
        </div>
      </div>
      <div className="">
        <div className={`sm:col-span-2 ${errors.email ? "error" : ""}`}>
          <label htmlFor="email" className={`block mb-2 text-sm font-medium text-gray-900  ${errors.email ? "text-red-500" : ""
            }`}>
            Email <span className="text-red-500">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.email ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.email ? (
            <p className="text-red-500">{errors.email.message}</p>
          ) : null}
        </div>
      </div>
      <div className="">
        <div className={`block mb-2 text-sm font-medium text-gray-900  ${errors.phone ? "text-red-500" : ""
          }`}>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            {...register("phone")}
            type="text"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.phone ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.phone ? (
            <p className="text-red-500">{errors.phone.message}</p>
          ) : null}
        </div>

      </div>
      {/* second row */}
      <div className="">
        <div className={`sm:col-span-2 ${errors.city ? "error" : ""}`}>
          <label htmlFor="city" className={`block mb-2 text-sm font-medium text-gray-900  ${errors.city ? "text-red-500" : ""
            }`}>
            City <span className="text-red-500">*</span>
          </label>
          <input
            {...register("city")}
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.city ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.city ? (
            <p className="text-red-500">{errors.city.message}</p>
          ) : null}
        </div>
      </div>
      <div className=" ">
        <div className={`w-full ${errors.country ? "error" : ""}`}>
          <label htmlFor="country" className={`block mb-2 text-sm font-medium text-gray-900  ${errors.country ? "text-red-500" : ""
            }`}>
            Country <span className="text-red-500">*</span>
          </label>
          <input
            {...register("country")}
            type="text"
            id="country"
            value={formData.country}
            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.country ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.country ? (
            <p className="text-red-500">{errors.country.message}</p>
          ) : null}
        </div>
      </div>
      <div className=" ">
        <div className={`sm:col-span-2 ${errors.postalCode ? "error" : ""}`}>
          <label htmlFor="postalCode" className={`block mb-2 text-sm font-medium text-gray-900   ${errors.postalCode ? "text-red-500" : ""
            }`}>
            Postal Code <span className="text-red-500">*</span>
          </label>
          <input
            {...register("postalCode")}
            type="text"
            id="postalCode"
            value={formData.postalCode}
            onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.postalCode ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.postalCode ? (
            <p className="text-red-500">{errors.postalCode.message}</p>
          ) : null}
        </div>

      </div>

      {/* third row */}
      <div className="  ">
        <div className={`w-full ${errors.streetAddress ? "error" : ""}`}>
          <label htmlFor="streetAddress" className={`block mb-2 text-sm font-medium text-gray-900   ${errors.streetAddress ? "text-red-500" : ""
            }`}>
            Street Address <span className="text-red-500">*</span>
          </label>
          <input
            {...register("streetAddress")}
            type="text"
            id="streetAddress"
            value={formData.streetAddress}
            onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500"
                     placeholder="Enter User's streetAddress  ${errors.streetAddress ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.streetAddress ? (
            <p className="text-red-500">{errors.streetAddress.message}</p>
          ) : null}
        </div>
      </div>
      {/* Fourth row */}
      <div className=" ">
        <div className={`flex flex-col gap-2 ${errors.role ? "error" : ""
          }`}>
          <label htmlFor="role" className={`block mb-2 text-sm font-medium text-gray-900  ${errors.phone ? "text-red-500" : ""
            }`}>
            Select Role <span className="text-red-500">*</span>
          </label>
          <select
            {...register("role")}
            id="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            className={` p-2 mt-1 focus:ring-primary-500 focus:border-primary-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md ${errors.role ? "border-red-500" : ""
              }`}
          >
            <option value="">Select a role</option>
            <option value="Admin">Admin</option>
            <option value="Manager">Manager</option>
          </select>
          {errors.role ? (
            <p className="text-red-500">{errors.role.message}</p>
          ) : null}
        </div>
      </div>
      <div className="  ">
        <div className={`sm:col-span-2 ${errors.password ? "error" : ""}`}>
          <label htmlFor="password" className={`block mb-2 text-sm font-medium text-gray-900   ${errors.password ? "text-red-500" : ""
            }`}>
            Enter Password <span className="text-red-500">*</span>
          </label>
          <input
            {...register("password")}
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className={` border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-primary-500 dark:focus:border-primary-500 ${errors.password ? "border-red-500 border-2" : ""
              }`}
          />
          {errors.password ? (
            <p className="text-red-500">{errors.password.message}</p>
          ) : null}
        </div>
      </div>
      <div className="flex gap-2 m-5">
        <div className="">
          <button
            type="submit"
            className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-lg"
          >
            Save
          </button>
        </div>
        <div className="">
          <Link  href={'/users'}
            type="button"
            className="bg-black text-white hover:bg-white hover:text-black font-bold py-2 px-4 rounded-lg"
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
    </form>
    </>
  )
};