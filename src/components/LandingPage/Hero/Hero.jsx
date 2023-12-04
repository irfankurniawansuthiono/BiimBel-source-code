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
            EVERY CHILD YEARNS TO LEARN
          </Text>
          <Text
            color={"white"}
            fontWeight={700}
            textAlign={"center"}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
          >
            Making Your World Better With Education
          </Text>
          <Text textAlign={"center"} color={"white"} maxW={"2xl"}>
            Replenish seasons may male hath fruit beast were seas saw you arrie
            said man beast whales his void unto last session for bite. Set have
            great you'll male grass yielding yielding man
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
