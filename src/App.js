import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { DatePicker } from "antd";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [startDate, setStartDate] = useState(new Date());
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          React Form
        </h2>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="registration"
                  className="block text-sm font-medium text-gray-700"
                >
                  Registration Type
                </label>
                <div className="inline-flex space-x-1">
                  <input
                    {...register("register", { required: true })}
                    type="radio"
                    id="individual"
                    name="individual"
                    value="individual"
                  />
                  <label
                    htmlFor="individual"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Individual
                  </label>
                  <input
                    {...register("register", { required: true })}
                    id="organization"
                    name="organization"
                    type="radio"
                    value="organization"
                  />
                  <label
                    htmlFor="organization"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Organization
                  </label>
                </div>
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <select
                  {...register("Title", { required: true })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Miss">Miss</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="text"
                  id="name"
                  name="name"
                  placeholder="name"
                  {...register("name", { required: true, maxLength: 50 })}
                />
                <small className="mt-1 text-red-700">
                  {errors.name && <div>{errors.name.message}</div>}
                </small>
              </div>
              <div>
                <label
                  htmlFor="fatherTitle"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father/Husband Title:
                </label>
                <div>
                  <select
                    {...register("fatherTitle", { required: true })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  >
                    <option value="S/O">S/O</option>
                    <option value="D/O">D/O</option>
                    <option value="W/O">W/O</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="fatherName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Father / Husband Name:
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="text"
                  id="fathername"
                  name="fathername"
                  placeholder="fatherName"
                  {...register("fathername", {
                    required: "This Field is required",
                    maxLength: 50,
                  })}
                />
                <small className="mt-1 text-red-700">
                  {errors.fathername && <div>{errors.fathername.message}</div>}
                </small>
              </div>
              <div>
                <label
                  htmlFor="birth"
                  className="block text-sm font-medium text-gray-700"
                >
                  Birth Date
                </label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Address
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Address"
                  {...register("address", {
                    required: "This Field is required",
                    maxLength: 250,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700"
                >
                  PIN Code
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="tel"
                  placeholder="Pin Code"
                  {...register("pincode", { required: true, maxLength: 10 })}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Mobile Number
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="tel"
                  placeholder="Mobile Number"
                  {...register("phone", { required: true, maxLength: 10 })}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    placeholder="Email address"
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: "Please Enter a valid Email",
                      },
                    })}
                    name="email"
                    type="email"
                    // autoComplete="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <small className="mt-1 text-red-700">
                    {errors.email && <div>{errors.email.message}</div>}
                  </small>
                </div>
              </div>
              <div>
                <label
                  htmlFor="pan"
                  className="block text-sm font-medium text-gray-700"
                >
                  PAN Number
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="text"
                  id="pan"
                  name="pan"
                  placeholder="PAN Number"
                  {...register("pan", {
                    required: "This field is required",
                    pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                    // message: "Please Enter Valid Pan NUmber",
                  })}
                />
                <small className="mt-1 text-red-700">
                  {errors.pan && <div>{errors.pan.message}</div>}
                </small>
              </div>
              <div>
                <label
                  htmlFor="aadhar"
                  className="block text-sm font-medium text-gray-700"
                >
                  Aadhar Number
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="tel"
                  id="aadhar"
                  name="aadhar"
                  placeholder="Aadhar number"
                  {...register("aadhar", {
                    required: "This Field is required",
                    // message: "Please Enter Valid Aadhar number",
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
                <small className="mt-1 text-red-700">
                  {errors.aadhar && <div>{errors.aadhar.message}</div>}
                </small>
              </div>
              <div>
                <label
                  htmlFor="nomineename"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nominee Name
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="text"
                  placeholder="Nominee Name"
                  {...register("nomineename", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="nomineerelation"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nominee Relation:
                </label>
                <input
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  type="text"
                  placeholder="Nominee Realtion"
                  {...register("Namnomineerelatione", {
                    required: true,
                    maxLength: 50,
                  })}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    {...register("password", {
                      required: true,
                      pattern: {
                        value:
                          /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
                        message:
                          "Password must be contain UpperCase, LowerCase, Number/special Charecter and min 8 charecters",
                      },
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <small className="mt-1 text-red-700">
                    {errors.password && <div>{errors.password.message}</div>}
                  </small>
                </div>
              </div>

              <div>
                <label
                  htmlFor="confirm password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    autoComplete="current-password"
                    {...register("confirmPassword", {
                      required: true,
                      validate: (value) =>
                        value === getValues("password") ||
                        "password doesnt match",
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                  <small className="mt-1 text-red-700">
                    {errors.confirmPassword && (
                      <div>{errors.confirmPassword.message}</div>
                    )}
                  </small>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
