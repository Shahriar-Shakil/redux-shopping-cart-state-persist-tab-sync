import ProductsList from "./components/ProductsList";
import ShoppingCarts from "./components/ShoppingCarts";

function App() {
  return (
    <div className="App">
      <div class="bg-gray-50 h-full md:h-screen">
        <div class="grid place-items-center">
          <h1 class="text-gray-900 font-bold text-3xl p-10 underline decoration-purple-500 decoration-4 underline-offset-8 mb-4">
            Shopping Cart
          </h1>
        </div>
        <div class="grid grid-cols-12 gap-6">
          <div class="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-8">
            <ProductsList />
          </div>

          <ShoppingCarts />
        </div>
      </div>
    </div>
  );
}

export default App;
