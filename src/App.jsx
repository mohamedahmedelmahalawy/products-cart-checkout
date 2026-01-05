import "./App.css";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const {
    value,
    addToCart,
    removeFromCart,
    updateQuantity,
    decreaseByOne,
    total,
  } = useLocalStorage("cart");
  return (
    <div className="p-16">
      <h1 className="mb-8 font-bold text-4xl">Shopping Cart</h1>
      <div className="flex flex-wrap justify-center">
        <Products addToCart={addToCart} />
        <Cart
          value={value}
          addToCart={addToCart}
          decreaseByOne={decreaseByOne}
          removeFromCart={removeFromCart}
          updateQuantity={updateQuantity}
          total={total}
        />
      </div>
    </div>
  );
}

export default App;
