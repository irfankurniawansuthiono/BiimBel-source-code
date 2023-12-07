import React, { useEffect, useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Icon,
  useColorModeValue,
  VStack,
  Badge,
  Card,
  Image,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import PageLoggedIn from "../PageLoggedIn/PageLoggedIn";
import useUserDBStore from "../dbUserData";
import useUserStore from "../userData";
import fetchUserData from "../../../utils/fetchUserData";
import {
  MdCall,
  MdDriveFileRenameOutline,
  MdOutlineMail,
  MdOutlinePersonOutline,
} from "react-icons/md";
import { myTheme } from "../../../theme/theme";
import { useNavigate } from "react-router-dom";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";

const MotionIcon = chakra(motion.div);

const ProfileCard = ({ icon, text, data }) => {
  return (
    <Card
      p={4}
      mb={4}
      boxShadow={"md"}
      bg={useColorModeValue(myTheme.colors.lightMode.background, "gray.900")}
      color={useColorModeValue(myTheme.colors.lightMode.textColor)}
    >
      <Flex align="center">
        <MotionIcon
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Icon as={icon} boxSize={7} />
        </MotionIcon>
        <VStack ml={3} align="start" spacing={0}>
          <Text fontWeight="bold">{text}</Text>
          <Text fontSize={{ base: "sm", md: "md", lg: "lg" }}>{data}</Text>
        </VStack>
      </Flex>
    </Card>
  );
};

const Profile = () => {
  const userData = useUserStore((state) => state.user);
  const userDataDB = useUserDBStore((state) => state.userDB);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData) {
          const userDataResult = await fetchUserData(userData.id);
          setUser(userDataResult);
          useUserDBStore.setState({ userDB: userDataResult });
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  let profileItems;
  if (!isLoading) {
    profileItems = [
      {
        Icon: MdOutlinePersonOutline,
        Text: "BiimBel - ID",
        Data: userDataDB.id,
      },
      { Icon: MdDriveFileRenameOutline, Text: "Name", Data: userDataDB.name },
      { Icon: MdOutlineMail, Text: "Email", Data: userDataDB.email },
      {
        Icon: MdCall,
        Text: "Phone",
        Data: userDataDB.phone ? userDataDB.phone : "Not Verified (Google)",
      },
    ];
  }

  return (
    <>
      {isLoading ? (
        <>
          <PageLoggedIn>
            <LoadingLoggedIn />
          </PageLoggedIn>
        </>
      ) : (
        <PageLoggedIn>
          <Box mt={"20"}>
            <Box p={8} pt={0} pb={0} maxW="600px" mx="auto">
              <Heading
                textAlign="center"
                fontSize="2xl"
                mb={2}
                color={myTheme.colors.darkMode.primary}
              >
                MY PROFILE
              </Heading>

              <VStack spacing={4} align="stretch" wordBreak={"break-word"}>
                {profileItems.map((items) => (
                  <ProfileCard
                    key={items.Text}
                    icon={items.Icon}
                    text={items.Text}
                    data={items.Data}
                  />
                ))}
              </VStack>
            </Box>
          </Box>
        </PageLoggedIn>
      )}
    </>
  );
};

export default Profile;
