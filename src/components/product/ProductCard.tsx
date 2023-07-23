import React from 'react'

const ProductCard = () => {
  return (
    <div className="w-44 h-52 ">
      <div className="shadow-xl rounded-md hover:scale-[1.02] h-full overflow-hidden">
        <figure className="h-40">
          <img src="/photo.jpg" alt="Shoes" className="h-full object-cover" />
        </figure>
        <div className="p-2">
          <h2 className="flex justify-center items-center">Shoes!</h2>
        </div>
      </div>
    </div>
  );
}

export default ProductCard