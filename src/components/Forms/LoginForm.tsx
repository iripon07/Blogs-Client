"use client";

import { loginSchema } from "@/Schemas/validationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

interface ILogin {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: yupResolver(loginSchema) });

  const onSubmit = (data: ILogin) => {
    console.log("Data from", data);
    reset();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="h-[780px] w-[536px]">
          <h3 className="mb-14 text-center text-[40px] font-extrabold text-[#151515]">
            Login
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
            New here?
            <span>
              {" "}
              <Link className="font-extrabold" href="/signup">
                Create a new account
              </Link>
            </span>
          </h4>
          <p className="mt-6 text-center text-xl font-medium text-[#444444]">
            Or sign up with
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
