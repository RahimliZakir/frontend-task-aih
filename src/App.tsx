import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/layout/Header";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
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
      </main>
    </div>
  );
};

export default App;
