import { myTheme } from "../../../theme/theme";
import "./NavbarNotLoggedIn.css";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaGoogle, FaArrowRight } from "react-icons/fa";

import useUserStore from "../../LoggedIn/userData";
import { useNavigate } from "react-router-dom";
import { BsBox2Fill } from "react-icons/bs";
export default function NavbarNotLoggedIn({ loginWithGoogle }) {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const data = useUserStore((state) => state.user);

  const navigate = useNavigate();

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      id="navbar"
      zIndex={999999}
    >
      <Flex
        bg={useColorModeValue(
          myTheme.colors.lightMode.background,
          myTheme.colors.darkMode.background
        )}
        color={useColorModeValue(
          myTheme.colors.lightMode.primary,
          myTheme.colors.darkMode.primary
        )}
        h={"5rem"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={4}
        borderStyle={"solid"}
        borderColor={useColorModeValue(
          "gray.200",
          myTheme.colors.darkMode.primary
        )}
        align={"center"}
      >
        <Flex
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
          align={"center"}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={5} h={5} /> : <HamburgerIcon w={7} h={7} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "start" }}
          alignItems={"center"}
        >
          <Text
            textAlign={"left"}
            ml={2}
            align={"center"}
            fontWeight={"bolder"}
            fontSize={{ base: "3xl", md: "2xl" }}
            color={useColorModeValue(
              myTheme.colors.lightMode.primary,
              myTheme.colors.darkMode.primary
            )}
          >
            BiimBel
          </Text>

          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"}>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
          {data ? (
            <Button
              py={2}
              px={3}
              as={"a"}
              cursor={"pointer"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={myTheme.colors.lightMode.primary}
              variant={"link"}
              onClick={() => navigate("/dashboard")}
              _hover={{
                bg: "pink.300",
              }}
              rightIcon={<FaArrowRight />}
            >
              Dashboard
            </Button>
          ) : (
            <Button
              py={2}
              px={3}
              as={"a"}
              cursor={"pointer"}
              fontSize={"sm"}
              fontWeight={600}
              color={"white"}
              bg={myTheme.colors.lightMode.primary}
              variant={"link"}
              onClick={loginWithGoogle}
              _hover={{
                bg: "pink.300",
              }}
              leftIcon={<FaGoogle />}
            >
              Sign In
            </Button>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue(
    myTheme.colors.lightMode.textColor,
    myTheme.colors.darkMode.textColor
  );
  const linkHoverColor = useColorModeValue(
    myTheme.colors.lightMode.textHover,
    myTheme.colors.darkMode.textHover
  );
  return (
    <Stack direction={"row"} spacing={4} align={"center"}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            py={2}
            px={5}
            href={navItem.href ?? "#"}
            fontSize={"md"}
            data-to-scrollspy-id={navItem.dataToScrollSpyId}
            fontWeight={600}
            color={linkColor}
            transition={"all .3s ease"}
            borderRadius={"3xl"}
            _hover={{
              textDecoration: "none",
              backgroundColor: myTheme.colors.lightMode.backgroundHover,
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue(
        myTheme.colors.lightMode.background,
        myTheme.colors.darkMode.background
      )}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem
          key={navItem.label}
          data-to-scrollspy-id={navItem.dataToScrollSpyId}
          {...navItem}
        />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href, dataToScrollSpyId }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const linkHoverColor = useColorModeValue(
    myTheme.colors.lightMode.textHover,
    myTheme.colors.darkMode.textHover
  );
  const linkColor = useColorModeValue(
    myTheme.colors.lightMode.textColor,
    myTheme.colors.darkMode.textColor
  );

  return (
    <Stack onClick={children && onToggle} spacing={4}>
      <Flex w={"full"} py={1}>
        <Box
          w={"full"}
          py={2}
          onClick={onClose}
          px={2}
          as="a"
          href={href ?? "#"}
          transition={"all .3s ease"}
          borderRadius={"3xl"}
          data-to-scrollspy-id={dataToScrollSpyId}
          alignItems="center"
          color={linkColor}
          _hover={{
            textDecoration: "none",
            backgroundColor: myTheme.colors.lightMode.primary,
            color: linkHoverColor,
          }}
          _active={{
            backgroundColor: myTheme.colors.lightMode.primary,
          }}
        >
          <Text fontWeight={600}>{label}</Text>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          pl={4}
          gap={10}
          borderLeft={1}
          data-to-scrollspy-id={dataToScrollSpyId}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                href={child.href}
                data-to-scrollspy-id={child.dataToScrollSpyId}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
    dataToScrollSpyId: "home",
  },
  {
    label: "About",
    href: "#about",
    dataToScrollSpyId: "about",
  },
  {
    label: "Pricing",
    href: "#pricing",
    dataToScrollSpyId: "pricing",
  },
  {
    label: "Contact",
    href: "#contact",
    dataToScrollSpyId: "contact",
  },
];
