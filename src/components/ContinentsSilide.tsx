import { Center, Box, Text, Button, HStack } from '@chakra-ui/react'
export const ContinentSlide = () => {
  return (
    <Center my='52px'>
      <Center
        backgroundImage='./images/ContinentImage.svg'
        backgroundPosition='center'
        backgroundRepeat='no-repeat'
        w='1240px'
        h='450px'
        display='flex'
      >
        <Center justifyContent='space-between'>
          <Button backgroundImage='./images/Previous.svg' backgroundPosition='center' bg='none' />
          <Center color='white' flexDir='column'>
            <Text fontSize='5xl' fontWeight='bold'>Europa</Text>
            <Text fontSize='2xl' fontWeight='bold'>O continente mais antigo</Text>
          </Center>
          <Button backgroundImage='./images/chevron-left.svg' backgroundPosition='center' bg='none' />
        </Center>
      </Center>
    </Center>
  )
}
