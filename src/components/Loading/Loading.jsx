import { myTheme } from "../../theme/theme";
import { Spinner, useColorModeValue, Center, Flex } from "@chakra-ui/react";
export default function Loading() {
  return (
    <Flex h="100vh" justifyContent="center" alignItems="center">
      <Center className="loading">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor={useColorModeValue(
            myTheme.colors.lightMode.background,
            myTheme.colors.darkMode.background
          )}
          color={myTheme.colors.lightMode.primary}
          size="xl"
        />
      </Center>
    </Flex>
  );
}
