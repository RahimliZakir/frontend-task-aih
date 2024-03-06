import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/layouts/Header";
import Products from "./components/pages/Products";
import ProductDetails from "./components/pages/ProductDetails";
import NotFound from "./components/pages/NotFound";

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
    {
      path: "*",
      element: <NotFound />,
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
