import React from "react";
import { useForm } from "react-hook-form";

function YouTubeFrom() {
  const form = useForm();
  return (
    <form className="p-5 shadow-lg w-[300px] h-[350px] mx-auto mt-10 flex flex-col gap-7 items-center justify-center rounded-md">
      <div className="flex gap-3 justify-center items-center">
        <label className="text-sm" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
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
          placeholder="Channel"
          className="shadow-md p-2 rounded-md outline-none"
        />
      </div>
      <button className="w-full bg-gray-500 p-2 text-white font-semibold rounded-md">
        Submit
      </button>
    </form>
  );
}

export default YouTubeFrom;
