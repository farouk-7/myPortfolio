import { Box, Flex, Image, Text } from "@chakra-ui/react";
import pic from "../assets/pic.png";
import { Typewriter } from "react-simple-typewriter";
import { CustomBtn } from "../components/CustomBtn";
import { HiDownload } from "react-icons/hi";
const Home = () => {
  return (
    <Box  display={"flex"} flexDir={"column"} color={"#A9A9A9"} px={["0px"]}>
      <Flex mt="5%" align={"center"} flexDir={["column","column","column","row"]}>
        <Flex flexDir={"column"} flex={1.5} textAlign={["center","center","center","start"]}>
          <Text fontSize={"13px"} letterSpacing={4} color={"orange"}>
            INTRODUCTION
          </Text>
          <Text fontSize={"20px"}>Hi There!</Text>
          <Text fontSize={"40px"}>
            I am Oyedeji Opeoluwa Farouk{" "}
            <span style={{ color: "orange" }}>.</span>
          </Text>
          <Text>I am a Frontend Web-Developer based in Lagos.</Text>
          <Text>I convert complexity to simplicity</Text>
        </Flex>

        <Flex flex={3}>
          <Image src={pic} />
        </Flex>

        <Flex flexDir={"column"} flex={1} textAlign={["center","center","center","start"]}>
          <Text fontSize={["25px","25px","25px","35px"]} color={"orange"}>
            Frontend Web Developer
          </Text>
          {/* <Text>I am a Web-Developer</Text> */}
          {/* <Text>I convert complexity to simplicity</Text> */}
          <h1 style={{ margin: "auto 0" }}>
            Life is simple, just{" "}
            <span style={{ color: "orange", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={["Eat", "Code", "Sleep", "Repeat!"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                // onLoopDone={handleDone}
                // onType={handleType}
              />
            </span>
          </h1>
          <Flex align={"center"} gap={"10px"} mt="10px" justify={"center"}>
            <CustomBtn
              text={"CONTACT ME"}
              border={"1px solid #A9A9A9"}
              bg={"none"}
              color={"#A9A9A9"}
              p="5px"
              // letterSpacing={4}
              fontSize={'10px'}
              height={"30px"}
            />
            <CustomBtn
              bg={"none"}
              text={"resume"}
              p={"2px"}
              color={"#A9A9A9"}
              childComp={<HiDownload color="orange" />}
            />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Home;
