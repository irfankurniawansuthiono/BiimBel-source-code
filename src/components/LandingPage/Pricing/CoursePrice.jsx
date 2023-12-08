import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  useColorModeValue,
  Divider,
  AbsoluteCenter,
} from "@chakra-ui/react";
import { myTheme } from "../../../theme/theme";
import Card from "./Card";
export default function CoursePrice({ loginWithGoogle }) {
  const LEVELS = [
    {
      time: "1 WEEK",
      price: 60,
      subscriptionTime: "/week",
      text: ["lorem1", "lorem2", "lorem3"],
    },
    {
      time: "1 MONTH",
      price: 150,
      subscriptionTime: "/month",
      text: ["lorem1", "lorem2", "lorem3"],
    },
    {
      time: "1 YEAR",
      price: 800,
      subscriptionTime: "/year",
      text: ["lorem1", "lorem2", "lorem3"],
    },
  ];
  return (
    <Box
      px={6}
      pt={0}
      pb={24}
      color={myTheme.colors.lightMode.primary}
      bg={useColorModeValue("white", "gray.900")}
      w={"full"}
    >
      <Box position="relative" py={8}>
        <Divider />
        <AbsoluteCenter bg={useColorModeValue("white", "gray.900")}>
          <Text as="h1" fontSize={"5xl"} fontWeight={"bold"}>
            Subscription
          </Text>
        </AbsoluteCenter>
      </Box>
      <Text as="h3" fontSize={"xl"} align={"center"}>
        Available Course Subscription
      </Text>

      <Flex alignItems={"center"} justifyContent={"center"} mt={6}>
        <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={20}>
          {LEVELS.map((level) => (
            <Card
              key={level.time}
              loginWithGoogle={loginWithGoogle}
              {...level}
            />
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
}
