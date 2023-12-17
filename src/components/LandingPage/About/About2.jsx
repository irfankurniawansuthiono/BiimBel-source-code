import {
  Box,
  SimpleGrid,
  Icon,
  Link,
  Text,
  Stack,
  Divider,
  Flex,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { FaBook, FaBullseye } from "react-icons/fa";
import { myTheme } from "../../../theme/theme";
export default function About2() {
  return (
    <Box px={6} py={24} pt={0} bg={useColorModeValue("gray.90", "gray.900")}>
      <SimpleGrid columns={{ base: 1, sm: 2 }}>
        <Box w={"full"} align={{ base: "center", md: "left" }}>
          <dotlottie-player
            src="https://lottie.host/219e0ae7-ef0d-4005-a78b-4ae03aca699d/m7p927TQyP.json"
            background="transparent"
            speed="1"
            style={{ width: "90%" }}
            hright={"auto"}
            loop
            autoplay
          ></dotlottie-player>
        </Box>
        <Box>
          <Flex h={"full"} flexDirection={"column"} justifyContent={"center"}>
            <Stack>
              <Stack spacing={"none"}>
                <Text
                  fontSize="3xl"
                  fontWeight={"bold"}
                  color={myTheme.colors.lightMode.primary}
                  align={"right"}
                >
                  About Us
                </Text>
                <Divider
                  orientation={"horizontal"}
                  borderWidth={"1px"}
                  borderColor={useColorModeValue("black", "white")}
                />
              </Stack>
              <Stack>
                <Text
                  fontSize={{ base: "lg", md: "2xl", lg: "3xl" }}
                  fontWeight={"bold"}
                >
                  Learning with Love and Laughter
                </Text>
                <Text
                  fontSize={{ base: "sm", md: "lg", lg: "2xl" }}
                  align={"justify"}
                >
                  Biimbel is an online tutoring platform that offers various
                  Indonesian language courses for various levels, ranging from
                  elementary school, junior high school, high school, to adults.
                  We are committed to providing a quality and interactive
                  learning experience for our participants.
                </Text>
              </Stack>
              <Flex gap={2} mt={1}>
                <Icon
                  as={FaBook}
                  boxSize={6}
                  color={myTheme.colors.lightMode.primary}
                />
                <Text>
                  Exploring Worlds, One Page at a Time: Where Education
                  Illuminate Minds.
                </Text>
              </Flex>
              <Flex gap={2}>
                <Icon
                  as={FaBullseye}
                  boxSize={6}
                  color={myTheme.colors.lightMode.primary}
                />
                <Text>
                  Reach Your Peak Potential: One Step at a Time Toward Success!
                </Text>
              </Flex>
            </Stack>
            <Button
              mt={5}
              w={"full"}
              bg={useColorModeValue("gray.300", "gray.700")}
              rounded={"full"}
              maxW={{ base: "35%", sm: "50%", md: "40%", lg: "30%" }}
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
            >
              Read More
            </Button>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
