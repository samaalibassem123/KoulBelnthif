import React from "react";

export default function FormFood() {
  return (
    <div className="flex flex-col gap-5 w-full items-center justify-center p-10 text-center">
      <hr className="w-[80%] lg:block hidden" />
      <p className="text-4xl underline">What Did You Eat Today ?</p>
      <form action="" className="flex  flex-col  gap-5 items-center text-2xl">
        <label>You Can write If you Want:</label>
        <textarea
          type="text"
          className="rounded-lg bg-slate-200 focus:bg-white w-full h-[200px]"
          placeholder="Write What Did you eat Today"
        />
        <button
          type="submit"
          className="bg-black lg:w-[200px] text-white p-4 rounded-lg text-2xl hover:bg-black/50 transition-all ease-in-out"
        >
          Submit
        </button>

        <label>Or Choose From Our Collection Here !</label>
        <button
          type="submit"
          className="bg-black lg:w-[200px] text-white p-4 rounded-lg text-2xl hover:bg-black/50 transition-all ease-in-out"
        >
          Submit
        </button>
      </form>
      <hr className="w-[80%]" />
    </div>
  );
}
