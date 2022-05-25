import { HStack, VStack, Box, Center, Text } from '@chakra-ui/react';
import { TravelType } from './TravelType';

export const NavTravelTypes = () => {
  return (
    <>
      <HStack display='flex' justifyContent="space-between" px="140px" py="80px">
        <TravelType image={<img alt="" src="./images/cocktail.svg" />} description="vida noturna" />
        <TravelType image={<img alt="" src="./images/surf.svg" />} description="praia" />
        <TravelType image={<img alt="" src="./images/building.svg" />} description="moderno" />
        <TravelType image={<img alt="" src="./images/museum.svg" />} description="clássico" />
        <TravelType image={<img alt="" src="./images/earth.svg" />} description="e mais..." />
      </HStack>
      <Center>
        <VStack>
          <Box w='90px' borderTop='solid' mb='24' color='gray.650' />

          <Text fontSize='4xl' color='gray.650' fontWeight='bold'>
            Vamos nessa? <br />
          </Text >
          <Text fontSize='4xl' color='gray.650' fontWeight='bold'>
            Então escolha seu continente
          </Text>

        </VStack>
      </Center>

    </>
  )
}
