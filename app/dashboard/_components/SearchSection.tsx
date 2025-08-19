import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({onSearchInput}:any) => {

  return (
    <div className="p-6 bg-gradient-to-br from-purple-400 via-purple-700 to-blue-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-3xl font-bold ">Browse All Templates</h1>
      <p className="text-md">What would you like to create today?</p>
      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-1 border rounded-md bg-white my-3 w-[50%]">
          <Search className="text-gray-500" />
          <input
            type="text"
            placeholder="Search..." onChange={(event)=>onSearchInput(event.target.value)}
            className="border-none focus:outline-none bg-transparent text-gray-500 w-96"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
