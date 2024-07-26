import { Box, Button, Flex, Img,} from "@chakra-ui/react";

import MobileHambugerNav from "./MobileHamburgerNav";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Link} from "react-router-dom";
import { motion } from "framer-motion";

const buttonVariants = {
  hover: {
    scale: 1.2,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      duration: 0.3, // controls the duration of the keyframe
      yoyo: Infinity, // this is use for repeating keyframes instaed of the array method
    },
  },
};

const Navigation = () => {
  return (
    <Flex
      as={motion.div}
      initial={{ y: -250 }}
      animate={{ y: -0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 320 }}
      // bg="white"
      color="#A9A9A9"
      borderBottom={"2px solid #3B3C36"}
      zIndex={1003}
      alignItems={"center"}
      width={"100%"}
      justifyContent="space-between"
      fontWeight="500"
      fontSize={[".9em", "1.1em"]}
      flexDir={"row"}
      gap={["20px", "20px", "20px", "unset"]}
      py="15px"
      px={["20px", "20px", "20px", "70px"]}
    >
      <a href="/">
        <Flex gap={"2"} alignItems={"center"}>
          <Img loading="lazy" alt="Farouk" />
        </Flex>
      </a>

      <MobileHambugerNav display={["block", "block", "block", "none"]} />
      <>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap={["20px"]}
          fontSize={"15px"}
          // color={"#353F4F"}
        >
          <Link to="/" id="rrr">
            <Box
              as={Button}
              background={"none"}
              color={"#A9A9A9"}
              _hover={{ color: "#fff", bg: "none" }}
              _active={{
                color: "#fff",
              }}
            >
              Home
            </Box>
          </Link>
          <Link to="/about" id="rrr">
            <Box
              as={Button}
              background={"none"}
              color={"#A9A9A9"}
              _hover={{ color: "#fff", bg: "none" }}
              _active={{
                color: "#fff",
              }}
            >
              About
            </Box>
          </Link>
          <Link to="/pages" id="rrr">
            <Box
              as={Button}
              background={"none"}
              color={"#A9A9A9"}
              _hover={{ color: "#fff", bg: "none" }}
              _active={{
                color: "#fff",
              }}
            >
              My-works
            </Box>
          </Link>
          <Link to="/projects" id="rrr">
            <Box
              as={Button}
              background={"none"}
              color={"#A9A9A9"}
              _hover={{ color: "#fff", bg: "none" }}
              _active={{
                color: "#fff",
              }}
            >
              Contact
            </Box>
          </Link>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          alignItems={"center"}
          gap="10px"
        >
          <Link to={""}>
            <Box as={motion.div} variants={buttonVariants} whileHover={"hover"}>
              <FaLinkedin size={25} />
            </Box>
          </Link>
          <Link>
           <Box as={motion.div} variants={buttonVariants} whileHover={"hover"}>
            <FaGithubSquare size={25} />
           </Box>
            
          </Link>
          <Link>
          <Box as={motion.div} variants={buttonVariants} whileHover={"hover"}>
            <FaSquareXTwitter size={25} />
          </Box>
            
          </Link>
          <Link>
          <Box as={motion.div} variants={buttonVariants} whileHover={"hover"}>
           <FaFacebookSquare size={25} /> 
          </Box>
            
          </Link>
        </Flex>
      </>
    </Flex>
  );
};

export default Navigation;
