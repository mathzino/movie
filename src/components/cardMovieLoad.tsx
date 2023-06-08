import React from "react";

export default function CardMovieLoad() {
  return (
    <div>
      <div className=" bg-white antialiased text-gray-900 w-80 shadow-lg  h-[480px] ">
        <div>
          <div className="bg-white  ">
            <div className=" pb-4 relative w-full h-60 bg-gray-200"></div>
            <div className="p-8 w-80 ">
              <div className="flex items-baseline  gap-1 flex-wrap ">
                <span className="bg-gray-200 inline-block rounded-full w-8 h-4"></span>
                <span className="bg-gray-200 inline-block rounded-full w-8 h-4"></span>
                <span className="bg-gray-200 inline-block rounded-full w-8 h-4"></span>
              </div>
              <h4 className=" bg-gray-200 mt-1"></h4>
              <div className="mt-8 h-4 w-full bg-gray-200"></div>
              <div className="mt-2 h-4 w-full bg-gray-200"></div>
              <div className="mt-4">
                <span className="bg-gray-200 inline-block h-3 w-2/3 "></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
