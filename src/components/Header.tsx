import { Box } from "@chakra-ui/react"
import Link from "next/link"

export const Header = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" w="100%" h="100px">
      <Link href='/'><img src="./images/Logo.svg" alt="worldtrip logo" /></Link>
    </Box>
  )
}
