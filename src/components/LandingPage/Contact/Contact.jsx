import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  useColorModeValue,
  Button,
  VStack,
  HStack,
  Link,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { myTheme } from "../../../theme/theme";
import emailjs from "@emailjs/browser";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineSubject,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  const form = useRef();
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6g1o5w6",
        "template_qm7uzul",
        form.current,
        "rDrvlgxlPRP116U5t"
      )
      .then(
        (result) => {
          toast({
            position: "bottom-right",
            title: `Message has been sent`,
            status: "success",
            isClosable: true,
          });
          e.target.reset();
        },
        (error) => {
          toast({
            position: "bottom-right",
            title: error.text,
            status: "error",
            isClosable: true,
          });
        }
      );
  };
  const contactButton = [
    {
      icon: <MdPhone color="#FFFFFF" size="20px" />,
      text: "+68 - 1368442253",
      href: "#",
    },
    {
      icon: <MdEmail color="#FFFFFF" size="20px" />,
      text: "biimbel.service@gmail.com",
      href: "mailto:biimbel.service@gmail.com",
    },
    {
      icon: <MdLocationOn color="#FFFFFF" size="20px" />,
      text: "Sumatera Barat, Indonesia",
      href: "#",
    },
  ];
  return (
    <Container
      maxW={"full"}
      mt={0}
      px={6}
      py={18}
      w={"full"}
      centerContent
      overflow="hidden"
      bg={myTheme.colors.lightMode.primary}
    >
      <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
        <Box color={"white"} borderRadius="lg" m={{ sm: 4, md: 16, lg: 10 }}>
          <Box>
            <Wrap
              spacing={{ base: 10, sm: 3, md: 5, lg: 20 }}
              justify={"center"}
            >
              <WrapItem>
                <Box>
                  <Heading
                    py={2}
                    bg={useColorModeValue(
                      myTheme.colors.lightMode.background,
                      myTheme.colors.darkMode.background
                    )}
                    rounded={"lg"}
                    align={"center"}
                    color={myTheme.colors.lightMode.primary}
                  >
                    Contact
                  </Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="white.500">
                    Fill up the form to contact us
                  </Text>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={2} alignItems="flex-end">
                      {contactButton.map((item, index) => (
                        <Link href={item.href} key={index}>
                          <Button
                            size="md"
                            height="48px"
                            width="286px"
                            variant="ghost"
                            color="#FFFFFF"
                            border={"2px solid transparent"}
                            _hover={{ border: "2px solid #FFFFFF" }}
                            _active={{ bg: "#252525", color: "#FFFFFF" }}
                            justifyContent="flex-start"
                            leftIcon={item.icon}
                          >
                            {item.text}
                          </Button>
                        </Link>
                      ))}
                    </VStack>
                  </Box>
                  <HStack spacing={5} justifyContent={"center"}>
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#252525" }}
                      icon={<MdFacebook size="28px" color="#FFFFFF" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#252525" }}
                      icon={<BsGithub size="28px" color="#FFFFFF" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#252525" }}
                      icon={<BsDiscord size="28px" color="#FFFFFF" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box
                  bg={useColorModeValue(
                    myTheme.colors.lightMode.background,
                    myTheme.colors.darkMode.background
                  )}
                  borderRadius="lg"
                >
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <form ref={form} onSubmit={sendEmail}>
                        <FormControl id="mail">
                          <FormLabel
                            mb={0}
                            requiredIndicator
                            color={useColorModeValue(
                              myTheme.colors.lightMode.textColor,
                              myTheme.colors.darkMode.textColor
                            )}
                          >
                            E-Mail
                          </FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdEmail
                                color={useColorModeValue(
                                  myTheme.colors.lightMode.textColor,
                                  myTheme.colors.darkMode.textColor
                                )}
                              />
                            </InputLeftElement>
                            <Input
                              name="user_email"
                              type="email"
                              size="md"
                              color={useColorModeValue(
                                myTheme.colors.lightMode.textColor,
                                myTheme.colors.darkMode.textColor
                              )}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel
                            requiredIndicator
                            color={useColorModeValue(
                              myTheme.colors.lightMode.textColor,
                              myTheme.colors.darkMode.textColor
                            )}
                            mt={5}
                            mb={0}
                          >
                            Your Name
                          </FormLabel>
                          <InputGroup
                            borderColor="#E0E1E7"
                            _focus={{ borderColor: "#F42A60" }}
                            _active={{ borderColor: "pink" }}
                          >
                            <InputLeftElement pointerEvents="none">
                              <BsPerson
                                color={useColorModeValue(
                                  myTheme.colors.lightMode.textColor,
                                  myTheme.colors.darkMode.textColor
                                )}
                              />
                            </InputLeftElement>
                            <Input
                              name="user_name"
                              type="text"
                              size="md"
                              color={useColorModeValue(
                                myTheme.colors.lightMode.textColor,
                                myTheme.colors.darkMode.textColor
                              )}
                            />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="message">
                          <FormLabel
                            mt={5}
                            mb={0}
                            color={useColorModeValue(
                              myTheme.colors.lightMode.textColor,
                              myTheme.colors.darkMode.textColor
                            )}
                          >
                            Message
                          </FormLabel>
                          <Textarea
                            name="message"
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            _placeholder={{
                              color: useColorModeValue(
                                myTheme.colors.lightMode.textColor,
                                myTheme.colors.darkMode.textColor
                              ),
                            }}
                            color={useColorModeValue(
                              myTheme.colors.lightMode.textColor,
                              myTheme.colors.darkMode.textColor
                            )}
                          />
                        </FormControl>
                        <FormControl id="submit" float="right" mt={5}>
                          <Button
                            type="submit"
                            variant="solid"
                            bg="#F42A60"
                            color="white"
                            _hover={{ opacity: 0.8 }}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
