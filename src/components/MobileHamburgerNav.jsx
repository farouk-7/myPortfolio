import { Box, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";
// import { CustomButton } from "./CustomButton";
// import CustomModal from "./CustomModal";
// import RegistrationModal from "./RegistrationModal";

function MobileHambugerNav({ ...props }) {
  const [show, setShow] = useState(false);

  return (
    <Box {...props}>
      <MdOutlineMenu
        cursor={"pointer"}
        onClick={() => setShow((prev) => !prev)}
        fontSize={"2em"}
        color="orange"
      />
      {show && (
        <Box
          data-aos="fade-left"
          position="fixed"
          bottom={"0"}
          left="0"
          right="0"
          top="0"
          w="100%"
          bg={"#eee"}
          zIndex={1022}
        >
          <Flex
            flexDir={"column"}
            justifyContent="center"
            alignItems={"center"}
            color={"white"}
            fontWeight="600"
            w="100%"
            p="20px"
          >
            <FaTimes
              style={{ alignSelf: "flex-end" }}
              fontSize="1.5em"
              cursor={"pointer"}
              onClick={() => setShow(false)}
              color="black"
            />
            <Flex
              gap="50px"
              flexDir={"column"}
              alignItems="center"
              justifyContent="center"
              fontSize={"1.5em"}
              color={"black"}
            >
              <a href="/" onClick={() => setShow(false)}>
                <Text>About</Text>
              </a>

              <a href="/feature" onClick={() => setShow(false)}>
                <Text>Features</Text>
              </a>
              <a href="/pages" onClick={() => setShow(false)}>
                <Text>Pages</Text>
              </a>
              <a href="/projects" onClick={() => setShow(false)}>
                <Text>Project</Text>
              </a>
              <a href="/faqs" onClick={() => setShow(false)}>
                <Text>FAQs</Text>
              </a>
              <a href="/sign-in" onClick={() => setShow(false)}>
                <Text>Sign in</Text>
              </a>
            </Flex>
          </Flex>
          {/* <Flex justifyContent={"center"} alignItems={"center"} mt="50px" >
            
                  <CustomModal
             
                size={"3xl"}
                maxH="500px"
              overflow="scroll"
                
                icon={<CustomButton btnText="Sign Up" />}
              >
                <RegistrationModal height="400px"/>
              </CustomModal>
          </Flex> */}
        </Box>
      )}
    </Box>
  );
}

export default MobileHambugerNav;