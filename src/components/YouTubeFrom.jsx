import React from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function YouTubeFrom() {
  const form = useForm({
    defaultValues: {
      username: "riteshm",
      email: "",
      channel: "",
      social: {
        twitter: "twitter.com",
        facebook: "facebook.com",
      },
      phoneNumbers: ["", ""],
      phNumbers: [{ number: "" }],
      age: 0,
      dob: new Date(),
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

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
        className="p-5 shadow-lg w-[300px]  mx-auto mt-10 flex flex-col gap-7 items-center justify-center rounded-md"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className="flex flex-col gap-3 justify-center items-center">
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
          <p className="text-red-600">{errors.username?.message}</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
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
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter diffrent email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("baddomain.com") ||
                    "This domain is not supported"
                  );
                },
              },
            })}
            placeholder="Email"
            className="shadow-md p-2 rounded-md outline-none"
          />
          <p className="text-red-600">{errors.email?.message}</p>
        </div>

        <div className="flex flex-col gap-3 justify-center items-center">
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
          <p className="text-red-600">{errors.channel?.message}</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="age">
            Age
          </label>
          <input
            type="number"
            id="age"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "age name is required",
              },
            })}
            className="shadow-md p-2 rounded-md outline-none"
          />
          <p className="text-red-600">{errors.age?.message}</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="dob">
            DOB
          </label>
          <input
            type="date"
            id="date"
            {...register("dob", {
              valueAsDate: true,
              required: {
                value: true,
                message: "dob name is required",
              },
            })}
            className="shadow-md p-2 rounded-md outline-none"
          />
          <p className="text-red-600">{errors.dob?.message}</p>
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="twitter">
            Twitter
          </label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            {...register("social.twitter")}
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="facebook">
            Facebook
          </label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            {...register("social.facebook")}
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="primary-phone">
            Primary PhoneNumber
          </label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0")}
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-3 justify-center items-center">
          <label className="text-sm" htmlFor="secondary-phone">
            Secondary PhoneNumber
          </label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
            className="shadow-md p-2 rounded-md outline-none"
          />
        </div>

        <div>
          <label>Lists of phone numbers</label>
          <div>
            {fields.map((field, index) => (
              <div key={field.id}>
                <input type="text" {...register(`phNumbers.${index}.number`)} />
                {index > 0 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={() => append({ number: "" })}>
              Add PhoneNumber
            </button>
          </div>
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
