import React from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography, Fade, Box, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import setting from "../../Assets/svg/home/settings.svg"
import Comment from "../../Assets/svg/comment.svg"
import { upcommingArray } from '../../Utils/data'
import Plus from "../../Assets/svg/home/plus.svg"


const styles = {
  Head: {
    color: '#212529',
    fontSize: '48px',
    fontFamily: 'Lexend Deca',
    fontWeight: 600,
    letterSpacing: '-1px',
    lineHeight: '56px',
  },
  tol_count: {
    cursor: 'pointer',
    height: '56px',
    padding: '5px 15px',
    border: '1px solid #ebebeb',
    boxSizing: 'border-box',
    borderRadius: '8px',
    backgroundColor: 'rgba(221,221,221,0)',
    color: '#212529',
    fontSize: '40px',
    fontFamily: 'Lexend Deca',
    lineHeight: '48px',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}

const Upcoming = () => {

  const [expanded, setExpanded] = React.useState(Array(upcommingArray.length).fill(false));

  const handleExpansion = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', columnGap: '25px', alignItems: 'center', }}>
        <Typography varient="p" style={styles.Head}>Upcoming</Typography>
        <Box style={styles.tol_count}>12</Box>
        <Box sx={{ cursor: 'pointer' }}> <img src={Comment} alt="setting" /></Box>
        <Box sx={{ cursor: 'pointer' }}> <img src={setting} alt="setting" /></Box>
      </Box>
      <Box >
        <Box sx={{ pt: '100px' }}>
          {upcommingArray.map((item, index) => (
            <div key={index}>
              <Accordion
                expanded={expanded[index]}
                onChange={() => handleExpansion(index)}
                slots={{ transition: Fade }}
                slotProps={{ transition: { timeout: 400 } }}
                sx={{
                  border: 'none',
                  '& .MuiAccordion-region': { height: expanded[index] ? 'auto' : 0 },
                  '& .MuiAccordionDetails-root': { display: expanded[index] ? 'block' : 'none' },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}
                  sx={{ border: 'none', boxShadow: 'none' }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', columnGap: '10px' }}>
                    <Box sx={{
                      width: '16px',
                      height: '16px',
                      pointerEvents: 'auto',
                      color: 'rgba(124, 124, 124, 0)',
                      backgroundColor: 'rgba(235, 235, 235, 0)',
                      borderRadius: '4px',
                      boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
                      border: '1px solid rgba(221, 221, 221, 1)',

                    }} />
                    <Typography sx={{ color: '#444444', fontSize: '16px', fontFamily: 'Lexend Deca', lineHeight: '24px', }}>{item.title}</Typography>
                  </Box>

                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {item.title} Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          ))}

          {/*--------------- add new task --------------- */}
          <Box
            sx={{
              width: '100%',
              padding: '10px',
              backgroundColor: 'rgba(250,250,250,0)',
              borderRadius: '8px',
              border: '1px solid #ebebeb',
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
              mt: 2
            }}>

            <img src={Plus} alt="plus" />
            <Typography
              variant="body1"
              sx={{
                color: '#7c7c7c',
                fontSize: '16px',
                fontFamily: 'Lexend Deca',
                lineHeight: '24px',
                ml: 2
              }}
            >
              Add New Task
            </Typography>
          </Box>
          <Box sx={{
            display: 'flex', columnGap: '30px', justifyContent: 'space-around', pt:
              '120px', position: 'fixed', right: '60px', bottom: '30px'
          }}>
            {/* <Button sx={{ ...styles.delButton, ...styles.button }} onClick={handleOpen} variant='outlined'>Edit task</Button> */}
            <Button variant='contained' sx={{ ...styles.primaryButton, ...styles.button }}> Add new task</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Upcoming