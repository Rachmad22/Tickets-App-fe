import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/account/sign-up";
import SignIn from "./pages/account/sign-In";
import Home from "./pages/home-page/home";
import ViewAll from "./pages/view-all page/view-all";
import MovieDetails from "./pages/movie-details page/movie-details";
import OrderPage from "./pages/order-page/order-page";
import PaymentPage from "./pages/payment-page/payment-page";
import Profile from "./pages/Profile/profile";
import TicketReady from "./pages/ticket-result/ticket-result-ready";
import TicketResultUsed from "./pages/ticket-result/ticket-result-used";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "Sign-up",
      element: <Signup />,
    },
    {
      path: "Sign-in",
      element: <SignIn />,
    },
    {
      path: "View-all",
      element: <ViewAll />,
    },
    {
      path: "Detail-movies",
      element: <MovieDetails />,
    },
    {
      path: "Order-page",
      element: <OrderPage />,
    },
    {
      path: "Payment-page",
      element: <PaymentPage />,
    },
    {
      path: "Profile",
      element: <Profile />,
    },
    {
      path: "Ticket-ready",
      element: <TicketReady />,
    },
    {
      path: "Ticket-used",
      element: <TicketResultUsed />,
    },
    {
      path: "#",
      element: <SignIn />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
