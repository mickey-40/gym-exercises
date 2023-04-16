import React from 'react'
import { Box, Stack } from '@mui/material';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';




import BodyPart from './BodyPart'
import ExerciseCard from './ExerciseCard'

// import RightArrowIcon from '../assets/icons/right-arrow.png';
// import LeftArrowIcon from '../assets/icons/left-arrow.png';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <Typography onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </Typography>
//   );
// };


const HorizontalScrollbar = ( { data, bodyPart, setBodyPart, isBodyParts }) => {


  console.log('data', data)
  return (
    // <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>   
    <Stack direction='row' > 
      {data.map((item) => (
        <Box 
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
          m='0 40px'
        >
         {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
         : <ExerciseCard exercise={item}/> }
        </Box>
      ))}
      </Stack> 
    // </ScrollMenu>
  )
}

export default HorizontalScrollbar