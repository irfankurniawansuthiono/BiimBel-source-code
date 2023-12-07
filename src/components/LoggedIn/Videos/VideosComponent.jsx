import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { myTheme } from "../../../theme/theme";
export default function VideosComponent(props) {
  return (
    <Box
      as={"a"}
      href={`/dashboard/videos/details?id=${props.link}`}
      cursor={"pointer"}
      transition={"all 0.3s ease"}
      _hover={{
        transform: "scale(1.05)",
        position: "relative",
      }}
      maxW={"300px"}
      w={"full"}
      // eslint-disable-next-line react-hooks/rules-of-hooks
      bg={useColorModeValue("white", "gray.900")}
      rounded={"md"}
      p={6}
      overflow={"hidden"}
    >
      <Box h={"210px"} bg={"gray.100"} mt={-6} mx={-6} mb={6} pos={"relative"}>
        <iframe
          width="100%"
          height="100%"
          src={props.link}
          title={props.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Box>
      <Stack>
        <Text
          color={myTheme.colors.lightMode.primary}
          textTransform={"uppercase"}
          fontWeight={800}
          fontSize={"sm"}
          letterSpacing={1.1}
        >
          {props.category}
        </Text>
        <Heading
          // eslint-disable-next-line react-hooks/rules-of-hooks
          color={useColorModeValue("gray.700", "white")}
          fontSize={"2xl"}
          fontFamily={"body"}
        >
          {props.title}
        </Heading>
        <Text color={"gray.500"}>{props.description}</Text>
      </Stack>
      <Stack mt={6} direction={"row"} spacing={4}>
        <Stack direction={"column"} spacing={0} fontSize={"sm"}>
          <Text fontWeight={600}>BiimBel</Text>
          <Text color={"gray.500"}>{props.uploaded}</Text>
        </Stack>
      </Stack>
    </Box>
  );
}
