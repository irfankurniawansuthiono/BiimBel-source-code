// PrivateRoute.js
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/helper/supabase";
import Loading from "../components/Loading/Loading";
import useUserStore from "../components/LoggedIn/userData";

const PrivateRoute = ({ loggedIn }) => {
  const setUser = useUserStore((state) => state.setUser);
  const [isLoading, setIsLoading] = useState(true);
  const user = useUserStore((state) => state.user);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await supabase.auth.getUser();
        setUser(currentUser.data.user);
        setIsLoading(false);
      } catch (error) {
        setUser(null);
      }
    };

    checkUser();
  }, [setUser]);
  if (isLoading) {
    return <Loading />;
  }
  if (user === null) {
    return <Navigate to="/" replace />;
  }

  return loggedIn;
};

export default PrivateRoute;
