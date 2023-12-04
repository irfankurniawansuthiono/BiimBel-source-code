import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./components/LoggedIn/Dashboard/Dashboard";
import PrivateRoute from "./hooks/PrivateRoute";
import { supabase } from "./lib/helper/supabase";
import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import useUserStore from "./components/LoggedIn/userData";
import Videos from "./components/LoggedIn/Videos/Videos";
import Error404 from "./pages/PageNotFound";
function App() {
  const loginWithGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "https://biimbel.vercel.app/dashboard",
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
              path="/videos"
              element={<PrivateRoute loggedIn={<Videos />} />}
            />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
