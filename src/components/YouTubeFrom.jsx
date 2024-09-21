import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function YouTubeFrom() {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log(data);
  };
  renderCount++;
  return (
    <div>
      <h1 className="text-center mt-10 text-lg font-bold text-gray-600">
        YouTube Form {renderCount / 2}
      </h1>
      <form
        className="p-5 shadow-lg w-[300px] h-[350px] mx-auto mt-10 flex flex-col gap-7 items-center justify-center rounded-md"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", {
              required: {
                value: true,
                message: "Username is required",
              },
            })}
            placeholder="Username"
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            {...register("email", {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Email"
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="channel">
            Channel
          </label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...register("channel", {
              required: {
                value: true,
                message: "Channel name is required",
              },
            })}
            placeholder="Channel"
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>
        <button className="w-full bg-gray-500 p-2 text-white font-semibold rounded-md">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}

export default YouTubeFrom;
