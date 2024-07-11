import React from "react";
import { UserData } from "@/data/data";

const DataInput = [
  {
    name: "poids",
    label: "Wieght:",
    type: "text",
    placeholder: UserData.poids + " Kg",
  },
  {
    name: "taille",
    label: "Height:",
    type: "text",
    placeholder: UserData.taille + " cm",
  },
  {
    name: "age",
    label: "Age:",
    type: "text",
    placeholder: UserData.age,
  },
  {
    label: "Gender M/F:",
    type: "text",
    placeholder: UserData.gender,
  },
];

export default function FormInfo() {
  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center p-10 text-center ">
      <hr className="w-[80%] lg:block hidden" />
      <p className="text-4xl underline">Your Informations</p>
      <form
        action="/user"
        className="flex 2xl:flex-row flex-col  gap-5 items-center text-2xl  p-2 rounded-lg  bg-black/10"
      >
        {DataInput.map((item) => (
          <div key={item.label} className="flex flex-col items-center">
            <label>{item.label}</label>
            <input
              name={item.name}
              type={item.type}
              className="rounded-lg bg-slate-200 focus:bg-white"
              placeholder={item.placeholder}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-black border border-black lg:w-[200px] text-white p-4 rounded-lg text-2xl hover:bg-black/50 transition-all ease-in-out"
        >
          Submit
        </button>
      </form>
      <hr className="w-[80%] " />
    </div>
  );
}
