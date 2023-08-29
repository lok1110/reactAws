import { Outlet } from "react-router-dom"
import { Navbar } from "../component/navbar/Navbar"
import { Container, Grid, GridItem } from '@chakra-ui/react'

export default function RootLayout() {
  return (
    <div>
      
      <Grid
  templateAreas={`"header header"
                  "nav main"
                 `}
  gridTemplateRows={'80px 1fr 30px'}
  gridTemplateColumns={'150px 1fr'}
  h='1000px'
  gap='1'
  color=''
  fontWeight='normal'
>
  
  <GridItem pl='0'  area={'header'}>
  <Navbar/>
  </GridItem>
  <GridItem pl='0'   area={'nav'}>
    Nav
  </GridItem>
  <GridItem pl='2' area={'main'}>
  <Outlet />
  </GridItem>
 
</Grid>

      
    </div>
  )
}
