import PageLoggedIn from "../PageLoggedIn/PageLoggedIn";
import useUserStore from "../userData";
import { Text, Flex, Divider } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { myTheme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import insertUserData from "../../../utils/insertUserData";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";
export default function Dashboard() {
  const data = useUserStore((state) => state.user);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    insertUserData(data);
    setIsLoading(false);
  }, []);
  return (
    <>
      <PageLoggedIn>
        {isLoading ? (
          <LoadingLoggedIn />
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
            gap={3}
          >
            <Text as={"h1"}>Hello! Welcome {data.user_metadata.name}</Text>
            <Text>Hope you have a nice day! ❤️</Text>
            <Divider borderWidth={"2px"} />
            <Text
              fontWeight={"bold"}
              color={myTheme.colors.lightMode.primary}
              fontSize={"2xl"}
            >
              History
            </Text>
          </Flex>
        )}
      </PageLoggedIn>
    </>
  );
}
