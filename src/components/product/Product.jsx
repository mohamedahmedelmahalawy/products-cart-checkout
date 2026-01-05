function Product({ product, addToCart }) {
  const { title, price, image } = product;

  return (
    <article className="flex flex-col gap-4 p-4 border-4 border-gray-400/20 min-w-60">
      <figure className="w-full">
        <img src={image} alt={title} className="w-full h-24 object-cover" />
      </figure>
      <h3>{title.slice(0, 20)}</h3>
      <h4 className="font-bold text-amber-500 text-2xl">{price}$</h4>
      <button
        onClick={() => addToCart(product)}
        className="bg-yellow-300 p-2 rounded-lg font-semibold text-black"
      >
        Add to Cart
      </button>
    </article>
  );
}

export default Product;
