import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Flex,
  SimpleGrid,
  Avatar,
  useColorModeValue,
  AspectRatio,
} from "@chakra-ui/react";
import { myTheme } from "../../../theme/theme";
export default function VideosHistory(props) {
  return (
    <SimpleGrid
      p={2}
      columns={2}
      as={"a"}
      href={`/videos/details?id=${props.link}`}
      cursor={"pointer"}
      transition={"all 0.3s ease"}
      _hover={{
        transform: "scale(1.05)",
        position: "relative",
      }}
      w={"full"}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue("white", "gray.900")}
      rounded={"md"}
      overflow={"hidden"}
      spacing={5}
    >
      <AspectRatio maxW={"210px"} ratio={{ base: 4 / 3 }}>
        <Box
          as="iframe"
          width="100%"
          src={props.link}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; "
          allowFullScreen
        ></Box>
      </AspectRatio>
      <Flex
        flexDirection={"column"}
        w={"full"}
        justifyContent={"space-around"}
        gap={2}
      >
        <Flex flexDirection={"column"}>
          <Text
            as={"h1"}
            fontWeight={"bold"}
            color={myTheme.colors.lightMode.primary}
            fontSize={{ base: "md" }}
            textTransform={"capitalize"}
          >
            {props.title}
          </Text>
          <Text
            as={"h1"}
            fontSize={{ base: "sm" }}
            textTransform={"capitalize"}
            fontWeight={"bold"}
          >
            {props.category}
          </Text>
        </Flex>
        <Flex flexDir={"column"}>
          <Text as={"h6"} fontSize={".8em"} fontWeight={"bold"} color={"gray"}>
            BiimBel
          </Text>
          <Text as={"h6"} fontSize={".8em"} fontWeight={"bold"} color={"gray"}>
            {props.uploaded}
          </Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
}
