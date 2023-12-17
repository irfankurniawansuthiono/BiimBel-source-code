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
import { myTheme } from "../../../theme/theme";
import { IoTime } from "react-icons/io5";
import { MdOutlineAttachMoney } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
const Feature = ({ title, text, icon }) => {
  return (
    <Stack spacing={2}>
      <Box w={"full"} align={"center"}>
        <Flex
          w={16}
          h={16}
          align={"center"}
          justify={"center"}
          color={myTheme.colors.lightMode.primary}
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
    icon: IoTime,
    title: "Flexibility",
    text: "Online courses can be accessed from anywhere and at any time, according to your schedule and convenience. You are not bound by the typically limited schedules of face-to-face courses.",
  },
  {
    icon: MdOutlineAttachMoney,
    title: "Cost efficiency",
    text: "Online courses are typically more affordable than face-to-face courses. You don't need to incur expenses for transportation, meals, or other necessities.",
  },
  {
    icon: AiOutlineCheckCircle,
    title: "Quality of content",
    text: "Online course materials are usually of high quality and created by experts in the field. The materials are.",
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
              Excellence
            </Text>
            <Text as={"p"}>
              Biimbel is the right choice for those of you who want to learn
              flexibly, affordably, and with quality.
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
