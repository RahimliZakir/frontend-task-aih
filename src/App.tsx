import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import ProductDetails from "./components/ProductDetails";
import Products from "./components/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Products />,
    },
    {
      path: "products/:id",
      element: <ProductDetails />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <main>
        <RouterProvider router={router} />
        {/* <Products /> */}
        <ProductDetails />
      </main>
    </div>
  );
};

export default App;
