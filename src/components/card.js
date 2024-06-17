export function ProductCard({ product }) {
  return (
    <>
      <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img
          alt=""
          src={product.image}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dd className="font-medium">{product.name}</dd>
            </div>
          </dl>

          <div className="mt-6 grid grid-cols-2 text-xs">
            <div className=" align-middle">
              <p className="text-sm text-gray-900 font-medium">
                ${product.price}
              </p>
            </div>

            <div className=" align-middle justify-self-end items-align-end">
              <button className="btn btn-primary h-8 w-content border-none rounded-md bg-blue-800 hover:bg-blue-600 p-2 text-white font-medium">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
