import React from "react";
import Card from "../Card";

export default function IndexHero() {
  return (
      <div className="pt-24 flex px-4 justify-between w-full gap-4">
        <div className="hidden md:flex w-1/2">
          <Card>Categories</Card>
        </div>
        <div className="flex w-full">
          <Card>
            <img
              src="./Desktop_Homepage_Slider__712x384.png"
              className="w-full"
            />
          </Card>
        </div>
        <div className="hidden sm:flex w-1/2">
          <Card>Side Image</Card>
        </div>
      </div>
  );
}
