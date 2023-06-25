import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/account/sign-up";
import SignIn from "./pages/account/sign-In";
import Home from "./pages/home-page/home";
import ViewAll from "./pages/view-all page/view-all";
import MovieDetails from "./pages/movie-details page/movie-details";
import OrderPage from "./pages/order-page/order-page";
import PaymentPage from "./pages/payment-page/payment-page";
import ProfileHistory from "./pages/Profile/profile-history";
import ProfileSetting from "./pages/Profile/profile-setting";
import TicketReady from "./pages/ticket-result/ticket-result-ready";
import TicketResultUsed from "./pages/ticket-result/ticket-result-used";
import Logout from "./pages/account/logout";

// Import redux
import store from "./store/index";
import { Provider } from "react-redux";

// Google Analytics
import ReactGA from "react-ga4";

ReactGA.initialize("G-HYGDKFXJ7Y");

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
      path: "Detail-movies/:id",
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
      path: "Profile-setting",
      element: <ProfileSetting />,
    },
    {
      path: "Profile-history",
      element: <ProfileHistory />,
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
      path: "Logout",
      element: <Logout />,
    },
    {
      path: "#",
      element: <SignIn />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
