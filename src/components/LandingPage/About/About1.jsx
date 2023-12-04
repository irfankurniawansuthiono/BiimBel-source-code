import { ReactElement } from "react";
import {
  Box,
  SimpleGrid,
  Icon,
  Link,
  Text,
  Stack,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FcAssistant, FcDonate, FcInTransit } from "react-icons/fc";
import { myTheme } from "../../../theme/theme";

const Feature = ({ title, text, icon }) => {
  return (
    <Stack spacing={2}>
      <Box w={"full"} align={"center"}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={"white"}
          rounded={"full"}
          bg={"gray.200"}
          mb={1}
        >
          {icon}
        </Flex>
        <Text fontWeight={600}>{title}</Text>
      </Box>
      <Text color={useColorModeValue("gray.600", "gray.400")}>{text}</Text>
    </Stack>
  );
};

const Features = [
  {
    icon: FcAssistant,
    title: "Feature#1",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: FcDonate,
    title: "Donate",
    text: "Biimbel with unlimited donations allows students to donate according to their ability, so they can help the tutoring center, get discounts or gifts, and support social programs.",
  },
  {
    icon: FcInTransit,
    title: "Instant Delivery",
    text: "Biimbel with instant delivery makes it easy for students to start learning quickly, adjust their learning schedule according to their needs, and learn more effectively.",
  },
];
export default function About1() {
  return (
    <Box px={6} py={24} bg={useColorModeValue("gray.90", "gray.900")}>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 2, lg: 3, xl: 4 }}
        spacing={10}
      >
        <Box px={3} py={1} rounded={"md"}>
          <Flex flexDir={"column"} justifyContent={"center"}>
            <Text
              color={useColorModeValue(
                myTheme.colors.lightMode.primary,
                myTheme.colors.darkMode.primary
              )}
              fontWeight={600}
              fontSize={"4xl"}
              textTransform={"uppercase"}
            >
              Awesome Feature
            </Text>
            <Text as={"p"}>
              Set have great you male grass yielding an yielding first their
              you're have called the abundantly fruit were man
            </Text>
          </Flex>
          <Link href="#course">
            <Button
              maxW={"70%"}
              rounded={"full"}
              variant={"solid"}
              outline={"2px solid"}
              outlineColor={useColorModeValue("black", "white")}
              _hover={{
                outlineColor: myTheme.colors.lightMode.primary,
              }}
              bg={useColorModeValue(
                myTheme.colors.lightMode.background,
                "gray.700"
              )}
              color={useColorModeValue(
                myTheme.colors.lightMode.textColor,
                myTheme.colors.darkMode.textColor
              )}
              mt={8}
            >
              Read More
            </Button>
          </Link>
        </Box>
        {Features.map((feature) => (
          <Box
            key={feature.title}
            borderWidth={2}
            shadow={"xl"}
            color={useColorModeValue(
              myTheme.colors.lightMode.textColor,
              myTheme.colors.darkMode.textColor
            )}
            transition={"all .3s ease"}
            borderColor={useColorModeValue(
              myTheme.colors.lightMode.background,
              myTheme.colors.darkMode.background
            )}
            _hover={{
              borderColor: useColorModeValue(
                myTheme.colors.lightMode.primary,
                myTheme.colors.darkMode.primary
              ),
            }}
            px={9}
            py={8}
            rounded={"3xl"}
          >
            <Feature
              icon={<Icon as={feature.icon} w={10} h={10} />}
              style={{ color: useColorModeValue("gray.600", "gray.400") }}
              title={feature.title}
              text={feature.text}
            />
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}
