import PageLoggedIn from "../LoggedIn/PageLoggedIn/PageLoggedIn";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";
import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUserStore from "../LoggedIn/userData";
import { supabase } from "../../lib/helper/supabase";
import updateUserDBSubscriptionData from "../../utils/updateUserDBSubscriptionData";
import updateUserDBEndDateData from "../../utils/updateUserDBEndDateData";
export default function SucceedPayment() {
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const userData = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const updateDataDB = async () => {
      await updateUserDBSubscriptionData(userData.id, true);
    };
    updateDataDB();
    setIsLoading(false);
    // if (
    //   id ==
    //   "asjdhaskjdhAhaskjdhkajshdASJHAKFPpaasjdjashdAaslkdhjalskhdLKhlknmmapsodj121312pasdjofakjdlskaliwhd90u0182y0idhnawdjinAakjwldabwfvaohajsbhdkjaiwvdoaiwbdawdb"
    // ) {

    //   updateUserDBEndDateData();
    // }
  }, [userData]);

  return isLoading ? <Loading /> : <Navigate to="/videos" />;
}
