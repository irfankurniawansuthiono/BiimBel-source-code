import PageLoggedIn from "../PageLoggedIn/PageLoggedIn";
import useUserStore from "../userData";
import { Text, Flex, Divider, SimpleGrid, Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { myTheme } from "../../../theme/theme";
import fetchVideos from "../../../utils/fetchVideos";
import useVideosDB from "../dbVideosData";
import useUserDBStore from "../dbUserData";
import fetchUserData from "../../../utils/fetchUserData";
import insertUserData from "../../../utils/insertUserData";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";
import VideosComponent from "../Videos/VideosComponent";
export default function Dashboard() {
  const data = useUserStore((state) => state.user);
  const videosDB = useVideosDB((state) => state.videosDB);
  const [videos, setVideos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingDB, setIsLoadingDB] = useState(true);
  useEffect(() => {
    insertUserData(data);
    const userDataDB = async () => {
      const userDataDB = await fetchUserData(data.id);
      useUserDBStore.setState({ userDB: userDataDB });
      setIsLoadingDB(false);
    };
    const videosDataDB = async () => {
      const videosData = await fetchVideos();
      setVideos(videosData);
      setIsLoading(false);
      useVideosDB.setState({ videosDB: videosData });
    };
    userDataDB();
    videosDataDB();
  }, []);
  const dataDB = useUserDBStore((state) => state.userDB);

  return (
    <>
      <PageLoggedIn>
        {isLoading ? (
          <LoadingLoggedIn />
        ) : (
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection={"column"}
            gap={3}
            mt={"20"}
          >
            <Text as={"h1"}>Hello! Welcome {data.user_metadata.name}</Text>
            <Text>Hope you have a nice day! ❤️</Text>
            <Divider borderWidth={"2px"} />
            <Text
              fontWeight={"bold"}
              color={myTheme.colors.lightMode.primary}
              fontSize={"2xl"}
            >
              History
            </Text>
            {isLoadingDB ? (
              <LoadingLoggedIn />
            ) : (
              <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={5}>
                {dataDB.history_videos && dataDB.history_videos.length > 0 ? (
                  dataDB.history_videos.map((historyVideoId) => {
                    const videoData = videosDB.find(
                      (video) => video.link_video === historyVideoId
                    );

                    if (videoData) {
                      return (
                        <>
                          <VideosComponent
                            key={videoData.title_video}
                            title={videoData.title_video}
                            description={videoData.description_video}
                            link={videoData.link_video}
                            uploaded={videoData.created_at}
                            category={videoData.category_video}
                          />
                        </>
                      );
                    } else {
                      return null;
                    }
                  })
                ) : (
                  <Flex w={{ base: "80vw" }} justifyContent={"center"}>
                    <Text>No history Data Found</Text>
                  </Flex>
                )}
              </SimpleGrid>
            )}
          </Flex>
        )}
      </PageLoggedIn>
    </>
  );
}
