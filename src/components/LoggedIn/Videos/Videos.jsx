import PageLoggedIn from "../PageLoggedIn/PageLoggedIn";
import { useEffect, useState } from "react";
import useUserStore from "../userData";
import useUserDBStore from "../dbUserData";
import fetchUserData from "../../../utils/fetchUserData";
import fetchVideos from "../../../utils/fetchVideos";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";
import { Text } from "@chakra-ui/react";
import VideosComponent from "./VideosComponent";
import useVideosDB from "../dbVideosData";
import { SimpleGrid, Flex } from "@chakra-ui/react";
export default function Videos() {
  const userData = useUserStore((state) => state.user);
  const userDataDB = useUserDBStore((state) => state.userDB);
  const videosDB = useVideosDB((state) => state.videosDB);
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
          const videosData = await fetchVideos();
          setVideos(videosData);
          useVideosDB.setState({ videosDB: videosData });
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <PageLoggedIn>
      {isLoading ? (
        <LoadingLoggedIn />
      ) : userDataDB.subscription ? (
        <Flex justifyContent={"center"}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
            {videosDB.map((video) => (
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
        <Text>You need to subscribe</Text>
      )}
    </PageLoggedIn>
  );
}
