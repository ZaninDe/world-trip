import { Box, Image, Heading, Text, HStack } from '@chakra-ui/react'
import background from "./images/Background.svg"
export const Banner = () => {
  return (
    <>
      <HStack spacing="30%" w="full" bgImage="url('./images/Background.svg')" h={["200px", "335px"]}>

        <Box ml="24">
          <Heading fontSize="4xl" mb="5" pt="14" color="gray.20">5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text color="gray.250">
            Chegou a hora de tirar do papel a viagem que você<br />
            sempre sonhou.
          </Text>
        </Box>

        <Image pt="7%" src="./images/Airplane.svg" />
      </HStack>


    </>
  )
}
