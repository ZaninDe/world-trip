import { HStack, Box, Center } from '@chakra-ui/react';
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
        <Box w="90px" borderTop="solid" />
      </Center>

    </>
  )
}
