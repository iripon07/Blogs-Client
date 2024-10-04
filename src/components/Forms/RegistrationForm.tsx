"use client";

import { registrationSchema } from "@/Schemas/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface IRegistration {
  name: string;
  email: string;
  password: string;
}

const RegistrationForm = () => {
  const {reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistration>({ resolver: yupResolver(registrationSchema) });

  const onSubmit = (data: IRegistration) => {
    console.log("Data from", data);
    reset()
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[780px] w-[536px]">
          <h3 className="mb-14 text-center text-[40px] font-extrabold text-[#151515]">
            Sign Up
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            action="
      "
          >
            <div className="mb-6">
              <label
                className="mb-4 text-xl font-semibold text-[#444444]"
                htmlFor=""
              >
                Name
              </label>
              <input
                style={{
                  border: "1px solid rgb(208, 208, 208)",
                  borderRadius: "8px",
                }}
                className="bg-#FFFFFF w-full rounded-lg p-6 text-[#A1A1A1] outline-none"
                placeholder="Enter your name"
                type="text"
                id="name"
                {...register("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-600">
                  <small>{errors?.name?.message}</small>
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="mb-4 text-xl font-semibold text-[#444444]"
                htmlFor=""
              >
                Email
              </label>
              <input
                style={{
                  border: "1px solid rgb(208, 208, 208)",
                  borderRadius: "8px",
                }}
                className="bg-#FFFFFF w-full rounded-lg p-6 text-[#A1A1A1] outline-none"
                placeholder="Enter your name"
                type="email"
                id="email"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-xs text-red-600">
                  <small>{errors?.email?.message}</small>
                </p>
              )}
            </div>
            <div className="mb-8">
              <label
                className="mb-4 text-xl font-semibold text-[#444444]"
                htmlFor=""
              >
                Password
              </label>
              <input
                style={{
                  border: "1px solid rgb(208, 208, 208)",
                  borderRadius: "8px",
                }}
                className="bg-#FFFFFF w-full rounded-lg p-6 text-[#A1A1A1] outline-none"
                placeholder="Enter your password"
                type="text"
                id="password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-xs text-red-600">
                  <small>{errors?.password?.message}</small>
                </p>
              )}
            </div>
            <input
              className="w-full rounded-lg bg-[#D1A054] py-6 text-xl font-extrabold text-[#FFFFFF]"
              type="submit"
              value="SUBMIT"
            />
          </form>
          <h4 className="mt-8 text-center text-xl font-medium text-[#D1A054]">
            Already registered?{" "}
            <Link className="font-extrabold" href="/login">
              Go to log in
            </Link>
          </h4>
          <p className="text-center text-[#444444] text-xl font-medium mt-6">Or sign up with</p>
        </div>
      </div>
    </>
  );
};

export default RegistrationForm;
