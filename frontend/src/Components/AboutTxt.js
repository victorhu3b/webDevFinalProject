import React from 'react';
import aboutPic from './aboutPic.jpg'
import { Stack, Box, Text, Image } from '@chakra-ui/react'


class aboutTxt extends React.Component {

    render () {
        return (

            <Box bgColor='#E2E2E2' h="25vw" p={15} color='black'
                //borderRadius="15px"
                //margin="20px"
                boxShadow="lg"
            >
                <Stack direction='row' margin="20px">
                <Image 
                    marginRight="15px"
                    boxSize='15vw'
                    src={aboutPic}
                    alt='Statue of Liberty'
                />
            
                <Stack direction='column' margin="20px">

                <Text fontSize="4xl">
                    About
                </Text> 
                <Text fontSize="xl">
                    text description of what this is all about

                </Text>


                </Stack>
                </Stack>              
                
            </Box>

            
        );
    }



}

export default aboutTxt;


