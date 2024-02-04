import "./App.css";
import Body from "./components/Body";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage";
import SearchedResultPage from "./components/SearchedResultPage";
import appStore from "./redux store/appStore";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path:"watch",
        element: <WatchPage/>
      },
      {
        path:"result",
        element:<SearchedResultPage/>
      }
    ],
  },
]);

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <RouterProvider router={appRoute} />
      </div>
    </Provider>
  );
}

export default App;
