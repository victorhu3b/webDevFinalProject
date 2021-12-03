import React from 'react';
import aboutPic from './aboutPic.jpg'
import { Stack, Box, Text, Image, ChakraProvider } from '@chakra-ui/react'
import voteImage from './voteImage.jpg'
import devImage from './googleDev.png'
import whenImage from './whenWe.jpg'
import { Center, Flex, Spacer } from '@chakra-ui/react'
import 'typeface-roboto'
import "./aboutBox.css"


function AboutTxt() {
    let styles = {
        root: {
          fontFamily: 'Roboto'
        }
      }

    return (
        <ChakraProvider>

        <>
        <Stack direction='column'>
        <Box bgColor='#E2E2E2' h="25vw" padding="3vw" color='black'
            //borderRadius="15px"
            //margin="20px"
            //boxShadow='xl'
        >
            <Stack direction='row' margin="20px">
            <Image
            boxShadow='dark-lg' 
                marginRight="15px"
                boxSize='15vw'
                src={aboutPic}
                alt='Statue of Liberty'
            />
        
            <Stack direction='column' margin="20px">

            <Text fontSize="5xl" style={styles.root} fontWeight="500" paddingLeft="10px" marginRight="30px">
                About 
            </Text> 
            <Text fontSize="l" style={styles.root} paddingLeft="10px" paddingRight="30px">
                This site is meant to act as a political dashboard for users to be able to see relevant congressional information pertaining to their location.
                Our aim is to inform people about political happenings and educate them about who represents them, and how to get involved with voting.
            </Text>
            <Text />
            <Text fontSize="l" style={styles.root} paddingLeft="10px" paddingRight="30px">
                This site was created with Google Civics API, ReactJS, AWS, and Mongo + Express.
            </Text>
            <Text />
            <Text fontSize="l" style={styles.root} paddingLeft="10px" paddingRight="30px">
                Created 2021
            </Text>

            </Stack>
            </Stack> 
            </Box> 
            <div className="Additional">
            <Text fontSize="3xl" paddingLeft="5vw" paddingTop="3vw" fontWeight="500" marginRight="100px" style={styles.root}>
                    Additional Resources
                </Text>      
                </div>
            <Flex paddingLeft="3vw" paddingTop="2vw" paddingRight="3vw">
                <Box border='1px' h="25vw" w="25vw" rounded='md' boxShadow='dark-lg' margin="20px"  borderRadius="5px">
                    <Stack direction='column'>
                    <Center>
                        <Image 
                         margin="1.5vw"
                        boxSize='5vw'
                        borderRadius="full"
                        src={voteImage}
                        alt='Vote jpg'
                        />
                    </Center>
                    <Center>
                     <Text fontSize="2vw" style={styles.root} fontWeight="400" style={styles.root}>
                        Register to Vote!
                    </Text>
                    </Center>
                    <Center>
                    <Text fontSize="1vw" fontWeight="300" style={styles.root} paddingLeft="20px" paddingRight="20px">
                    "Each state makes its own voting rules, including how to confirm your registration. 
                    Check with your state or local election office to get the most detailed and up-to-date 
                    information for where you live."
                    </Text>
                    </Center>
                    <Center>
                    <Text fontWeight="500" style={styles.root}>
                    <a target="_blank" href="https://vote.gov/">Register Here</a>

                        </Text>
                    </Center>
                </Stack>
                </Box>

                <Spacer/>
                <Box border='1px' h="25vw" w="25vw" rounded='md' boxShadow='dark-lg' margin="20px"  borderRadius="5px">
                <Stack direction='column'>
                    <Center>
                        <Image 
                        margin="1.5vw"
                        boxSize='5vw'
                        borderRadius="full"
                        src={devImage}
                        alt='Dev jpg'
                        />
                    </Center>
                    <Center>
                     <Text fontSize="2vw" style={styles.root} fontWeight="400" style={styles.root}>
                        Google Civics API
                    </Text>
                    </Center>
                    <Center>
                    <Text fontSize="1vw" fontWeight="300" style={styles.root} paddingLeft="20px" paddingRight="20px">
                        This site was created using the Google Civics API, which offers information about political geographic divisions 
                        and elected representatives for US addresses from the federal to the local level. Try it out below. 
                    </Text>
                    </Center>
                    <Center>
                    <Text fontWeight="500" style={styles.root}>
                        <a target="_blank" href="https://developers.google.com/civic-information">Learn More Here</a>
                        </Text>
                    </Center>
                </Stack>
                </Box>

                <Spacer/>
                <Box border='1px' h="25vw" w="25vw" rounded='md' boxShadow='dark-lg' margin="20px"  borderRadius="5px">
                <Stack direction='column'>
                    <Center>
                        <Image 
                        margin="1.5vw"
                        boxSize='5vw'
                        borderRadius="full"
                        src={whenImage}
                        alt='When We All Vote jpg'
                        />
                    </Center>
                    <Center>
                     <Text fontSize="2vw" style={styles.root} fontWeight="400" style={styles.root}>
                        Get Involved
                    </Text>
                    </Center>
                    <Center>
                    <Text fontSize="1vw" fontWeight="300" style={styles.root} paddingLeft="20px" paddingRight="20px">
                        When We All Vote makes sure every eligible voter is registered and ready to vote in every election. 
                        Sign up to volunteer in one of their many events, or make a donation! Click the link below to get started.
                    </Text>
                    </Center>
                    <Center>
                    <Text fontWeight="500" style={styles.root}>
                        <a target="_blank" href="https://whenweallvote.org/">When We All Vote</a>
                        </Text>
                    </Center>
                </Stack>
                </Box>
                <Spacer/>
               
                
            </Flex>
            

        
        </Stack>
        </>
       </ChakraProvider> 
    );
}

export default AboutTxt;


