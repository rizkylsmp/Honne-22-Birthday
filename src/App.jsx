import { RouterProvider } from "react-router-dom";
import { router } from "./router/RouterApp";

function App() {
  return (
    <div className="dark:text-white text-black">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
