import { useParams, useLocation } from "react-router-dom";
import { Text, Box, Flex, AspectRatio } from "@chakra-ui/react";
import PageLoggedIn from "../../PageLoggedIn/PageLoggedIn";
import useVideosDB from "../../dbVideosData";
import insertUserHistory from "../../../../utils/inserUserHistory";
import fetchDetailsVideos from "../../../../utils/fetchDetailsVideo";
import { useEffect, useState } from "react";
import useDetailsVideo from "../../dbDetailsVideo";
import LoadingLoggedIn from "../../../Loading/LoadingLoggedIn";
import { myTheme } from "../../../../theme/theme";
import useUserDBStore from "../../dbUserData";
import { supabase } from "../../../../lib/helper/supabase";
export default function VideosDetails() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const id = new URLSearchParams(location.search).get("id");

  const userDataDB = useUserDBStore((state) => state.userDB);
  const videoDetails = useDetailsVideo((state) => state.detailsVideoDB);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await supabase.auth.getUser();
        useUserDBStore.setState({ userDB: userData.data.user });

        const videosDetails = await fetchDetailsVideos(id);
        useDetailsVideo.setState({ detailsVideoDB: videosDetails });

        if (userDataDB && videosDetails) {
          await insertUserHistory(userDataDB.id, videosDetails.link_video);
        }

        // Loading process is done
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [id, userDataDB]);
  return isLoading ? (
    <PageLoggedIn>
      <LoadingLoggedIn />
    </PageLoggedIn>
  ) : (
    <PageLoggedIn>
      <Box mt={"20"} w={"full"} gap={4}>
        <AspectRatio maxW={"full"} ratio={{ base: 16 / 9, lg: 16 / 5 }}>
          <Box
            as="iframe"
            width="100%"
            src={videoDetails.link_video}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; "
            allowFullScreen
          ></Box>
        </AspectRatio>
        <Flex
          justifyContent={"space-between"}
          align={{ base: "start", lg: "center" }}
          flexDirection={{ base: "column", lg: "row" }}
        >
          <Text
            as={"h1"}
            fontWeight={"bold"}
            color={myTheme.colors.lightMode.primary}
            fontSize={{ base: "xl", sm: "2xl", md: "4xl" }}
            textTransform={"capitalize"}
          >
            {videoDetails.title_video}
          </Text>
          <Flex gap={1}>
            <Text
              as={"h6"}
              fontSize={".8em"}
              fontWeight={"bold"}
              color={"gray"}
            >
              From BiimBel -
            </Text>
            <Text
              as={"h6"}
              fontSize={".8em"}
              fontWeight={"bold"}
              color={myTheme.colors.lightMode.primary}
            >
              {videoDetails.created_at}
            </Text>
          </Flex>
        </Flex>
        <Flex gap={1}>
          <Text
            as={"h1"}
            fontSize={{ base: "sm", md: "xl" }}
            textTransform={"capitalize"}
            fontWeight={"bold"}
          >
            Category :
          </Text>

          <Text
            as={"h1"}
            fontSize={{ base: "sm", md: "xl" }}
            textTransform={"capitalize"}
          >
            {videoDetails.category_video}
          </Text>
        </Flex>
        <Text
          as={"h1"}
          fontSize={{ base: "sm", md: "xl" }}
          textTransform={"capitalize"}
          fontWeight={"bold"}
        >
          Description :
        </Text>
        <Text
          as={"h1"}
          fontSize={{ base: "sm", md: "xl" }}
          textTransform={"capitalize"}
        >
          {videoDetails.description_video}
        </Text>
      </Box>
    </PageLoggedIn>
  );
}
