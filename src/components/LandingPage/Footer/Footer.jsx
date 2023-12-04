import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

import { myTheme } from "../../../theme/theme";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"bold"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

const Footers = [
  {
    title: "Explore",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Pricing", href: "#pricing" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms & Conditions", href: "#" },
      { name: "Legal", href: "#" },
    ],
  },
  {
    title: "Follow Us",
    links: [
      { name: "Instagram", href: "#" },
      { name: "Facebook", href: "#" },
      { name: "Discord", href: "#" },
      { name: "GitHub", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 1fr 1fr" }}
          spacing={8}
          justifyContent={"space-between"}
        >
          <Stack spacing={6}>
            <Box>
              <Text
                fontWeight={"bolder"}
                fontSize={{ base: "3xl", md: "2xl" }}
                color={useColorModeValue(
                  myTheme.colors.lightMode.primary,
                  myTheme.colors.darkMode.primary
                )}
              >
                BiimBel
              </Text>
            </Box>
            <Text fontSize={"sm"}>© 2023 BiimBel. All rights reserved</Text>
          </Stack>
          {Footers.map((footer, index) => (
            <Stack align={"flex-start"} key={index}>
              <ListHeader>{footer.title}</ListHeader>
              {footer.links.map((link, index) => (
                <Box
                  as="a"
                  href={link.href}
                  key={index}
                  _hover={{ color: myTheme.colors.lightMode.primary }}
                >
                  {link.name}
                </Box>
              ))}
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
