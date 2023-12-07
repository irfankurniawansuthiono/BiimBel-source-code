import {
  Box,
  Link,
  Text,
  Stack,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import { myTheme } from "../../../theme/theme";
import useUserStore from "../../LoggedIn/userData";
export default function Card({ loginWithGoogle, time, price, text }) {
  const handleButtonClick = () => {
    loginWithGoogle();
  };
  const userData = useUserStore((state) => state.userData);
  return (
    <Box
      w={"full"}
      maxW={"320px"}
      bg={useColorModeValue("white", "gray.800")}
      shadow={"2xl"}
      rounded={"md"}
      overflow={"hidden"}
    >
      <Stack
        textAlign={"center"}
        p={6}
        color={useColorModeValue("black", "white")}
        align={"center"}
      >
        <Text
          fontSize={"sm"}
          fontWeight={500}
          bg={useColorModeValue("gray.100", "gray.900")}
          p={2}
          px={3}
          color={myTheme.colors.lightMode.primary}
          rounded={"full"}
        >
          {time}
        </Text>
        <Stack direction={"row"} align={"center"} justify={"center"}>
          <Text fontSize={"3xl"}>IDR</Text>
          <Text fontSize={"6xl"} fontWeight={800}>
            {price}
          </Text>
          <Text color={"gray.500"}>/month</Text>
        </Stack>
      </Stack>

      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        px={6}
        py={5}
        color={useColorModeValue(
          myTheme.colors.lightMode.textColor,
          myTheme.colors.darkMode.textColor
        )}
      >
        <List spacing={3}>
          {text.map((item, i) => (
            <ListItem key={i}>
              <ListIcon
                as={CheckIcon}
                color={myTheme.colors.lightMode.primary}
              />
              {item}
            </ListItem>
          ))}
        </List>

        {userData ? (
          <Link href={"/subscribe"}>
            <Button
              mt={10}
              w={"full"}
              bg={useColorModeValue(
                myTheme.colors.lightMode.primary,
                myTheme.colors.darkMode.primary
              )}
              color={"white"}
              rounded={"xl"}
              boxShadow={"0 5px 20px 0px rgb(244 42 96 / 43%)"}
              _hover={{
                opacity: 0.8,
              }}
              _focus={{
                bg: "gray.500",
              }}
            >
              Buy Now
            </Button>
          </Link>
        ) : (
          <Button
            mt={10}
            w={"full"}
            onClick={handleButtonClick}
            bg={useColorModeValue(
              myTheme.colors.lightMode.primary,
              myTheme.colors.darkMode.primary
            )}
            color={"white"}
            rounded={"xl"}
            boxShadow={"0 5px 20px 0px rgb(244 42 96 / 43%)"}
            _hover={{
              opacity: 0.8,
            }}
            _focus={{
              bg: "gray.500",
            }}
          >
            Buy Now
          </Button>
        )}
      </Box>
    </Box>
  );
}
