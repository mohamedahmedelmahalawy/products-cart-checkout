function Cart({
  value: productAddedToCart,
  addToCart,
  removeFromCart,
  decreaseByOne,
  total,
}) {
  return (
    <div className="flex-1/3 bg-gray-500/50">
      <h2 className="bg-amber-300 p-8 font-bold text-black text-4xl text-center">
        Cart
      </h2>
      <div className="flex flex-col gap-4">
        {productAddedToCart?.map((product) => {
          const { id, title, price, image, quantity } = product;
          return (
            <div
              key={id}
              className="flex flex-col items-center gap-4 bg-gray-900 p-8"
            >
              <h3 className="font-semibold text-2xl">{title}</h3>
              <figure>
                <img src={image} alt={title} className="w-full h-20" />
              </figure>
              <p className="font-bold text-green-500 text-xl">{price}$</p>
              <div className="flex justify-center items-center gap-4">
                <button
                  onClick={() => addToCart(product)}
                  className="flex justify-center items-center bg-amber-300 hover:bg-red-500 p-3 px-5 rounded-full w-14 h-14 font-bold text-black hover:text-white text-3xl"
                >
                  +
                </button>
                <p className="font-bold text-4xl">{quantity}</p>
                <button
                  onClick={() => decreaseByOne(id)}
                  className="flex justify-center items-center bg-amber-300 hover:bg-red-500 p-3 px-5 rounded-full w-14 h-14 font-bold text-black hover:text-white text-3xl"
                >
                  -
                </button>
              </div>
              <button
                onClick={() => removeFromCart(id)}
                className="hover:text-red-600"
              >
                Remove Item ❌
              </button>
            </div>
          );
        })}
      </div>
      <h3 className="bg-red-500 drop-shadow-2xl p-8 font-bold text-white text-4xl text-center">
        {total}
      </h3>
    </div>
  );
}

export default Cart;
