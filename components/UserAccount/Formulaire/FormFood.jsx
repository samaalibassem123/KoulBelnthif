import React from "react";
import FormSelectFood from "./FormSelectFood";

export default function FormFood() {
  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center p-10 text-center">
      <hr className="w-[80%] lg:block hidden" />
      <p className="text-4xl underline">What Did You Eat Today ?</p>

      <FormSelectFood />

      <hr className="w-[80%]" />
    </div>
  );
}
