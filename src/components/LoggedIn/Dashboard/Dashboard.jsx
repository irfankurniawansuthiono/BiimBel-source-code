import PageLoggedIn from "../PageLoggedIn/PageLoggedIn";
import useUserStore from "../userData";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { Text, Flex, Divider, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { myTheme } from "../../../theme/theme";
import fetchVideos from "../../../utils/fetchVideos";
import useVideosDB from "../dbVideosData";
import useUserDBStore from "../dbUserData";
import fetchUserData from "../../../utils/fetchUserData";
import insertUserData from "../../../utils/insertUserData";
import LoadingLoggedIn from "../../Loading/LoadingLoggedIn";
import VideosHistory from "./VideosHistory";
import updateUserDBonBoarding from "../../../utils/updateUserDBOnBoarding";
export default function Dashboard() {
  const data = useUserStore((state) => state.user);
  const dataDB = useUserDBStore((state) => state.userDB);
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

  const isDesktop = window.innerWidth >= 768;
  useEffect(() => {
    if (dataDB && !dataDB.on_boarding && isDesktop) {
      const driverObj = driver({
        popoverClass: "tourBiimbel",
        showProgress: false,
        allowClose: false,
        doneBtnText: "Done",
        steps: [
          {
            element: "#pageLoggedIn",
            popover: {
              title: "Welcome to BiimBel",
              description: "let's take a tour about this menu first!",
              side: "left",
              align: "start",
            },
          },
          {
            element: "#Home",
            popover: {
              title: "Home Menu",
              description: "you can check your history of videos here!",
              side: "left",
              align: "start",
            },
          },
          {
            element: "#Videos",
            popover: {
              title: "Videos Menu",
              description:
                "in this menu you can watch videos! there are free videos and subscription! please make sure you are subscribing to our plans!",
              side: "left",
              align: "start",
            },
          },
          {
            element: "#Subscribe",
            popover: {
              title: "Subscribe PLANS!",
              description:
                "in this menu you can buy subscription to unlock more part of tutorial videos!",
              side: "left",
              align: "start",
            },
          },
          {
            popover: {
              title: "Happy Learning!",
              description: "And that is all, go ahead and start learning!",
            },
          },
        ],
      });

      if (dataDB.on_boarding !== undefined && !dataDB.on_boarding) {
        driverObj.drive();
        updateUserDBonBoarding(dataDB.id, true);
      }
    }
  }, [dataDB, isDesktop]);

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
              <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={5} mt={10}>
                {dataDB.history_videos && dataDB.history_videos.length > 0 ? (
                  dataDB.history_videos.map((historyVideoId) => {
                    const videoData = videosDB.find(
                      (video) => video.link_video === historyVideoId
                    );

                    if (videoData) {
                      return (
                        <>
                          <VideosHistory
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
                      return (
                        <Flex w={{ base: "80vw" }} justifyContent={"center"}>
                          <Text>failed to fetch data</Text>
                        </Flex>
                      );
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
