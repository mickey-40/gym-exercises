import React from 'react'
import { Box } from '@mui/material'
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'

import BodyPart from './BodyPart'


const HorizontalScrollbar = ( { data, bodyPart, setBodyPart }) => {


  console.log('data', data)
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box 
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m='0 40px'
        >
         <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollbar