import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles

import "./Reviews.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Box, Flex, Text, useColorModeValue, Image } from "@chakra-ui/react";
import { myTheme } from "../../../theme/theme";

export default function Review() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDir={"column"}
      gap={3}
      py={24}
      px={6}
      pt={0}
      bg={useColorModeValue("white", "gray.900")}
    >
      <Text
        as={"h1"}
        fontSize={{ base: "xl", md: "4xl" }}
        fontWeight={"bold"}
        color={myTheme.colors.lightMode.primary}
      >
        What do people say about US?
      </Text>
      <Box
        w={{ base: "full", md: "500px" }}
        maxW={"500px"}
        h={"200px"}
        rounded={"xl"}
        overflow={"hidden"}
      >
        <Swiper
          direction={"vertical"}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image src="https://media1.tenor.com/m/Fx-CHGbSA-MAAAAC/junko-touhou.gif" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://media1.tenor.com/m/Fx-CHGbSA-MAAAAC/junko-touhou.gif" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://media1.tenor.com/m/Fx-CHGbSA-MAAAAC/junko-touhou.gif" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://media1.tenor.com/m/Fx-CHGbSA-MAAAAC/junko-touhou.gif" />
          </SwiperSlide>
          <SwiperSlide>
            <Image src="https://media1.tenor.com/m/Fx-CHGbSA-MAAAAC/junko-touhou.gif" />
          </SwiperSlide>
        </Swiper>
      </Box>
    </Flex>
  );
}
