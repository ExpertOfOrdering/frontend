import { CreateBrowserRouter } from "react-router-dom";
import App from "../App";

const router = CreateBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;
