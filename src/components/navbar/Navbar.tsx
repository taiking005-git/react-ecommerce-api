import React from "react";
import Container from "../Container";

export default function Navbar() {
  return (
    <nav className="w-full z-10 shadow-md fixed text-lg bg-gray-300">
      <Container>
        <div className="p-4 flex justify-between h-20 gap-5 items-center">
          <div className="md:gap-2 gap-1">
            <div className="hidden md:flex">Logo</div>
            <div className="flex md:hidden">Menu</div>
          </div>
          <div className="form-control flex-row h-full md:gap-2 gap-1 md:w-[80%] ">
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Search for product, brand"
              className="h-full w-full rounded-md p-2 input-bordered"
            />
            <button className="btn btn-primary shadow-md ">Search</button>
          </div>
          <div className="flex gap-2">
            <button>Account</button>
            <button className="hidden md:block">Help</button>
            <button className="hidden md:block">Cart</button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
