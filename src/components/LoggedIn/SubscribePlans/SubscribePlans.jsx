import { Box, SimpleGrid, Text, Flex } from "@chakra-ui/react";
import { myTheme } from "../../../theme/theme";
import CardSubscribe from "./CardSubscribe";
import PageLoggedIn from "../PageLoggedIn/PageLoggedIn";
import useUserDBStore from "../dbUserData";
import useUserStore from "../userData";
import { useEffect, useState } from "react";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";
import fetchUserData from "../../../utils/fetchUserData";
export default function SubscribePlans({ loginWithGoogle }) {
  const data = useUserStore((state) => state.user);

  const userDataDB = useUserDBStore((state) => state.userDB);
  const [isLoadingDB, setIsLoadingDB] = useState(true);
  useEffect(() => {
    const userDataDB = async () => {
      const userDataDB = await fetchUserData(data.id);
      useUserDBStore.setState({ userDB: userDataDB });
      setIsLoadingDB(false);
    };
    userDataDB();
  }, []);
  const LEVELS = [
    {
      time: "1 WEEK",
      price: 60,
      subscriptionTime: "/week",
      // text: ["lorem1", "lorem2", "lorem3"],
      href: "https://buy.stripe.com/test_28odUHe7V6sWfuw6oo",
    },
    {
      time: "1 MONTH",
      price: 150,
      subscriptionTime: "/month",
      // text: ["lorem1", "lorem2", "lorem3"],
      href: "https://buy.stripe.com/test_cN2bMzaVJ7x0eqsbIJ",
    },
    {
      time: "1 YEAR",
      price: 800,
      subscriptionTime: "/year",
      // text: ["lorem1", "lorem2", "lorem3"],
      href: "https://buy.stripe.com/test_8wM3g3d3RcRk9683ce",
    },
  ];

  return (
    <PageLoggedIn>
      {isLoadingDB ? (
        <LoadingLoggedIn />
      ) : userDataDB.subscription ? (
        <Flex mt={20} justifyContent={"center"} alignItems={"center"}>
          <Text>You are already subscribed</Text>
        </Flex>
      ) : (
        <Box
          mt={"20"}
          px={6}
          pt={0}
          pb={24}
          color={myTheme.colors.lightMode.primary}
          w={"full"}
        >
          <Text as="h3" fontSize={"xl"} align={"center"}>
            Available Course Subscription
          </Text>

          <Flex alignItems={"center"} justifyContent={"center"} mt={6}>
            <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={20}>
              {LEVELS.map((level) => (
                <CardSubscribe
                  key={level.time}
                  loginWithGoogle={loginWithGoogle}
                  {...level}
                />
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      )}
    </PageLoggedIn>
  );
}
