import { Box, Text, Flex, Image } from "@chakra-ui/react";
import { Progress } from "@chakra-ui/react";
import formal from "../assets/formal.jpg";

const About = () => {
  return (
    <Box color={"#A9A9A9"} mb="50px" px={["20px","20px","20px","0px"]}>
      <Box position="relative">
        <Box>
          <Text
            textAlign="center"
            fontSize={["40px","40px","40px","60px"]}
            color="rgba(39, 39, 38, 1)"
            letterSpacing={7}
          >
            About
          </Text>
        </Box>
      </Box>

      <Flex justify="center" align={["center","center","center","start"]} gap="60px" mt={["20px","20px","20px","50px"]} flexDir={["column","column","column","row"]}>
        <Flex position="relative">
          <Box
            border="5px solid orange"
            w="250px"
            height="300px"
            position="absolute"
            left={50}
            top={25}
            display={["none","none","none","block"]}
          >
          </Box>
          <Image src={formal} height="300px" zIndex={2} />
        </Flex>
        <Box maxW="500px">
          <Text pb="10px">
            My name is{" "}
            <span style={{ color: "orange" }}> Oyedeji Opeoluwa Farouk</span>
          </Text>
          <Text>
            I am a Frontend Web Developer based in Lagos State, Nigeria. I am
            very passionate and dedicated to my work with 2years of professional
            experience. I have acquired the skills and knowledge required for
            your projects to be successful I enjoy every steps of development
            process, from discussion to collaboration to execution. Also I am a
            very good team palyer which makes me excellent in working with
            teams. A critical thinker that thinks outside the box to get a
            problem solved.
          </Text>
          <Flex justify="space-between" mt="10px">
            <Box textAlign="center">
              <Text color="orange">Name</Text>
              <Text>Oyedeji Farouk</Text>
            </Box>
            <Box textAlign="center">
              <Text color="orange">Country</Text>
              <Text>Nigeria</Text>
            </Box>
          </Flex>
          <Flex justify="center" mt="10px">
            <Box textAlign="center">
              <Text color="orange">Email</Text>
              <Text>opeoluwaoyedejif@gmail.com</Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Box position="relative" mt={["30px","30px","30px","50px"]} >
        <Box>
          <Text
            textAlign="center"
            fontSize={["40px","40px","40px","60px"]}
            color="rgba(39, 39, 38, 1)"
            letterSpacing={7}
          >
            Skills
          </Text>
        </Box>

        <Flex align="center" mt={["10px","10px","10px","30px"]} flexDir="column">
          <Flex align={["center","center","center","start"]} gap={["15px","15px","15px","60px"]} flexDir={["column","column","column","row"]}>
            <Box w={["260px","260","260","350px"]}>
              <Flex justify="space-between"><Text>Html</Text><Text>90%</Text></Flex>
              <Progress value={90} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
            <Box w={["260px","260","260","350px"]}>
            <Flex justify="space-between"><Text>CSS</Text><Text>85%</Text></Flex>
              <Progress value={85} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
          </Flex>

          <Flex align={["center","center","center","start"]} gap={["15px","15px","15px","60px"]} flexDir={["column","column","column","row"]} mt={["15px","15px","15px","10px"]}>
            <Box w={["260px","260","260","350px"]}>
              <Flex justify="space-between"><Text>Javascript</Text><Text>82%</Text></Flex>
              <Progress value={82} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
            <Box w={["260px","260","260","350px"]}>
            <Flex justify="space-between"><Text>Typescript</Text><Text>75%</Text></Flex>
              <Progress value={75} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
          </Flex>

          <Flex align={["center","center","center","start"]}  gap={["15px","15px","15px","60px"]} flexDir={["column","column","column","row"]} mt={["15px","15px","15px","10px"]}>
            <Box w={["260px","260","260","350px"]}>
              <Flex justify="space-between"><Text>React</Text><Text>90%</Text></Flex>
              <Progress value={90} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
            <Box w={["260px","260","260","350px"]}>
            <Flex justify="space-between"><Text>Chakra</Text><Text>90%</Text></Flex>
              <Progress value={90} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
          </Flex>

          <Flex align={["center","center","center","start"]}  gap={["15px","15px","15px","60px"]} flexDir={["column","column","column","row"]} mt={["15px","15px","15px","10px"]}>
            <Box w={["260px","260","260","350px"]}>
              <Flex justify="space-between"><Text>Tailwind</Text><Text>80%</Text></Flex>
              <Progress value={80} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
            <Box w={["260px","260","260","350px"]}>
            <Flex justify="space-between"><Text>Git</Text><Text>87%</Text></Flex>
              <Progress value={87} size="xs" colorScheme="orange" bg="rgba(39, 39, 38, 1)"/>
            </Box>
          </Flex>
        </Flex>
        <Text textAlign="center" pt="30px" fontSize={["25px","25px","25px","30px"]}>I am available for Freelance gigs!</Text>
      </Box>
    </Box>
  );
};

export default About;
