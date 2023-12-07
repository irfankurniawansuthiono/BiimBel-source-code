import { useEffect, useState } from "react";
import useUserStore from "../userData";
import useUserDBStore from "../dbUserData";
import fetchUserData from "../../../utils/fetchUserData";
import fetchFreeVideos from "../../../utils/fetchFreeVideos";
import VideosComponent from "./VideosComponent";
import useFreeVideosDB from "../dbFreeVideosData";
import { SimpleGrid, Flex, Button, Text, Box } from "@chakra-ui/react";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";
import { myTheme } from "../../../theme/theme";
export default function NotSubscribedVideos() {
  const userData = useUserStore((state) => state.user);
  const userDataDB = useUserDBStore((state) => state.userDB);
  const freeVideosDB = useFreeVideosDB((state) => state.freeVideosDB);
  const [user, setUser] = useState(null);
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userData) {
          // Fetch user data
          const userDataResult = await fetchUserData(userData.id);
          setUser(userDataResult);
          useUserDBStore.setState({ userDB: userDataResult });

          // Fetch videos data
          const videosData = await fetchFreeVideos();
          setVideos(videosData);
          useFreeVideosDB.setState({ freeVideosDB: videosData });
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Flex justifyContent={"center"} mt={"20"}>
      {isLoading ? (
        // Menampilkan indikator loading jika sedang loading
        <LoadingLoggedIn />
      ) : freeVideosDB && freeVideosDB.length > 0 ? (
        <Flex flexDirection={"column"} alignItems={"center"} gap={5}>
          <Text fontWeight={"bold"} color={"Red"}>
            YOU ARE NOT SUBSCRIBED TO OUR PLANS
          </Text>
          <Text fontWeight={"bold"}>This is just a free videos!</Text>
          <Box>
            <Button
              as={"a"}
              href={"/subscribe"}
              variant={"solid"}
              shadow={"lg"}
              colorScheme={"red"}
            >
              Subscribe to our plans here
            </Button>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
            {freeVideosDB.map((video) => (
              <VideosComponent
                key={video.id}
                link={video.link_video}
                title={video.title_video}
                uploaded={video.created_at}
                description={video.description_video}
                category={video.category_video}
              />
            ))}
          </SimpleGrid>
        </Flex>
      ) : (
        // Menampilkan pesan jika tidak ada data
        <Text mt={"20"}>No videos available.</Text>
      )}
    </Flex>
  );
}
