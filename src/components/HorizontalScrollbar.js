import React from 'react'
import { Box } from '@mui/material'


const HorizontalScrollbar = ( { data }) => {
  console.log('data', data)
  return (
    <Box>
      {data.map((item) => (
        <Box 
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m='0 40px'
        >
        {item}
        </Box>
      ))}
    </Box>
  )
}

export default HorizontalScrollbar