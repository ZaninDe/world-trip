import { Text, Box } from '@chakra-ui/react'
import Image from 'next/image'

interface TravelTypeProps {
  image: JSX.Element,
  description: string,
}

export const TravelType = ({ image, description }: TravelTypeProps): JSX.Element => {
  return (
    <Box>
      <Box display="flex" justifyContent="center">
        {image}
      </Box>
      <Text p="8" fontWeight="bold" fontSize="2xl" color="gray.650">{description}</Text>
    </Box>
  )
}
