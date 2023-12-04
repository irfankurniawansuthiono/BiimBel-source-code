import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const Error404 = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      backgroundImage="url(/images/background.jpg)"
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.5 }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
          rotateX: 360,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
          delay: 0.1,
        }}
      >
        <Heading
          fontSize="8xl"
          mb={4}
          color="#F42A60"
          style={{
            textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          404
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50, rotation: -10 }}
        animate={{ opacity: 1, y: 0, rotation: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.3 }}
      >
        <Text fontSize="2xl" mb={8} color="#F42A60">
          Page not found
        </Text>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeInOut", delay: 0.5 }}
      >
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            bg="#F42A60"
            color="white"
            size="lg"
            _hover={{ bg: "#D92154" }}
            as={"a"}
            href={"/"}
            style={{
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
              filter: "blur(2px) glow(0px 0px 5px rgba(255, 255, 255, 0.5))",
            }}
          >
            Guide me back to Home
          </Button>
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default Error404;
