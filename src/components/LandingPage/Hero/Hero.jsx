import {
  Stack,
  Flex,
  Text,
  VStack,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import ButtonViewCourse from "./ButtonViewCourse";

export default function Hero() {
  return (
    <Flex
      w={"full"}
      mt={"5rem"}
      h={`calc(100vh - 5rem)`}
      backgroundImage={"url(/home/hero.jpg)"}
      backgroundSize={"cover"}
      backgroundPosition={"center"}
    >
      <VStack
        w={"full"}
        justify={"center"}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bg={"blackAlpha.600"}
      >
        <Stack maxW={"3xl"} align={"Center"} spacing={2}>
          <Text
            color={"white"}
            fontWeight={50}
            lineHeight={1.2}
            textAlign={"center"}
            fontSize={useBreakpointValue({ base: "1xl", md: "2xl" })}
          >
            CULTIVATE YOUR LEARNING INTEREST
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            textAlign={"center"}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Empower Your World Through Education
          </Text>
          <Text textAlign={"center"} color={"white"} maxW={"2xl"}>
            Like the refreshing change of seasons, let's envision a person
            looking into the ocean of knowledge, informing us that the last
            opportunity to grasp knowledge is right in front of us. Prepare
            yourself for remarkable growth through our online learning
            experience in the Indonesian language. Embrace language knowledge
            and skills with enthusiasm through our engaging and interactive
            courses.
          </Text>
          <Stack direction={"row"} mt={"1rem"}>
            <Link href="#pricing" style={{ textDecoration: "none" }}>
              <ButtonViewCourse />
            </Link>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}
