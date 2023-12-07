import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/LoggedIn/Dashboard/Dashboard";
import PrivateRoute from "./hooks/PrivateRoute";
import { supabase } from "./lib/helper/supabase";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import useUserStore from "./components/LoggedIn/userData";
import Videos from "./components/LoggedIn/Videos/Videos";
import VideosDetails from "./components/LoggedIn/Videos/VideosDetails/VideosDetails";
import Profile from "./components/LoggedIn/Profile/Profile";
import Error404 from "./pages/PageNotFound";
function App() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo:
          import.meta.env.VERCEL_URL || "http://localhost:5173/dashboard",
      },
    });
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const data = async () => {
      const dataUser = await supabase.auth.getUser();
      if (dataUser.data.user) {
        useUserStore.setState({ user: dataUser.data.user });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };
    data();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Router>
          <Routes>
            <Route
              path="/"
              element={<LandingPage loginWithGoogle={loginWithGoogle} />}
            />
            <Route
              path="/dashboard"
              element={<PrivateRoute loggedIn={<Dashboard />} />}
            />
            <Route
              path="/videos/details"
              element={<PrivateRoute loggedIn={<VideosDetails />} />}
            />
            <Route
              path="/videos"
              element={<PrivateRoute loggedIn={<Videos />} />}
            />
            <Route
              path="/profile"
              element={<PrivateRoute loggedIn={<Profile />} />}
            />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
