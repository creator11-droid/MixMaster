import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Landing,
  HomeLayout,
  Cocktail,
  Error,
  NewsLetter,
  About,
  SingleErrorPage,
} from "./pages";
import { loader as landingLoader } from "./pages/LandingPage";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
import { action as newsLetterAction } from "./pages/NewsLetter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <SingleErrorPage />,
        loader: landingLoader(queryClient),
      },
      {
        path: "/cocktail/:id",
        errorElement: <SingleErrorPage />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <NewsLetter />,
        action: newsLetterAction,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
