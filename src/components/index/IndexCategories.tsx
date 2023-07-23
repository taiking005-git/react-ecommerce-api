import React from "react";
import Card from "../Card";
import ProductCard from "../product/ProductCard";

type IndexCategoriesProps = {
  flash?: boolean;
};

const IndexCategories = ({ flash }) => {
  return (
    <div className="px-4 w-full">
      <Card>
        {flash && (
          <div className="bg-blend-darken p-4 flex justify-between">
            <h2>Flash Sale</h2>
            <h2>Count Down 10H:40M:00S</h2>
            <h2 className="cursor-pointer">SEE ALL</h2>
          </div>
        )}
        <div className="flex flex-wrap gap-2 m-2">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Card>
    </div>
  );
};

export default IndexCategories;
