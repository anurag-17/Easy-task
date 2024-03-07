import * as React from 'react';
import { Box, Grid, Modal, Backdrop, Fade, Button, Typography, styled, Divider, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { TextareaAutosize } from '@mui/base';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Jhon from '../../Assets/svg/home/jhon.svg';
import Plus from "../../Assets/svg/home/plus.svg"
import Attach from "../../Assets/svg/edittask/attatch.svg"
import Gallary from "../../Assets/svg/edittask/gallary.svg"
import Link from "../../Assets/svg/edittask/microphone.svg"
import Send from "../../Assets/svg/edittask/send.svg"
import Close from "../../Assets/svg/edittask/close.svg"

import { commentArray } from '../../Utils/data';

const StyledTextarea = styled(TextareaAutosize)({
    width: '90%',
    backgroundColor: 'rgba(250, 250, 250, 0)',
    borderRadius: '8px',
    border: '1px solid #ebebeb',
    boxSizing: 'border-box',
    color: '#7c7c7c',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    lineHeight: '24px',
    padding: '10px',
    '&:focus-visible': {
        outline: 'none',
    },
});
const Textarea = styled(TextareaAutosize)({
    border: 'none',
    boxSizing: 'border-box',
    color: '#030303',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontWeight: 200,
    lineHeight: '24px',
    border: 'none',
    width: '100%',
    backgroundColor: '#fafafa',
    '&:focus-visible': {
        outline: 'none',
    },
});


const styles = {
    Heading: {
        color: '#444444',
        fontSize: '24px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '32px'
    },
    Text1: {
        color: '#444444',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        fontWeight: 400,
        lineHeight: '17px',
    },
    input: {
        height: '50px',
        color: '#262626',
        fontSize: '16px',
        fontFamily: 'Lexend Deca',
        lineHeight: '24px',
        outline: 'none',
        textIndent: "10px",
    },
    inputbox: {
        width: "100%",
        padding: '8px 8px ',
        borderRadius: '8px',
        backgroundColor: 'rgba(250,250,250,0)',
        border: '1px solid #dddddd',
        display: 'flex',
        alignItems: 'center',
        columnGap: '5px',
        boxSizing: 'border-box',
    },
    image: {
        height: '23px',
        width: '23px',
        borderRadius: '50%',
    },
    assigneeInput: {
        border: 'none', background: 'none', width: '100%',
        color: 'black',
        color: '#262626',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        lineHeight: '18px',
    },
    typeButtom: {
        padding: '5px 15px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '6px',
        backgroundColor: '#66d9e8',
        color: '#ffffff',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '18px',
        outline: 'none',
    },
    addLabelButton: {
        cursor: 'pointer',
        width: 'auto',
        height: '34px',
        padding: '0px 10px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '6px',
        backgroundColor: '#ebebeb',
        color: '#444444',
        fontSize: '14px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '18px',
        outline: 'none',
        ignItems: 'center',
        columnGap: '5px',
        textTransform: 'initial'
    },
    button: {
        width: '100%',
        cursor: 'pointer',
        height: '48px',
        padding: '0px 8px',
        border: '1px solid #dddddd',
        boxSizing: 'border-box',
        borderRadius: '8px',
        fontSize: '16px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '24px',
        outline: 'none',
        textTransform: 'initial',
        boxShadow: 'none'
    },
    delButton: {
        backgroundColor: 'rgba(221,221,221,0)',
        color: '#444444',
    },
    primaryButton: {
        backgroundColor: '#e60d1a',
        color: '#ffffff',
    },
    normalText: {
        color: '#030303',
        fontFamily: 'Lexend Deca',
        lineHeight: '20px',
    },
    messageBox: {
        width: '100%',
        backgroundColor: '#fafafa',
        borderRadius: '8px',
        border: '1px solid #ebebeb',
        boxSizing: 'border-box',
        marginTop: '110px',
        padding: '16px',
    },
    sendBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconBox: {
        display: 'flex',
        alignItems: 'center',
        // justifyContent: 'space-between',
        columnGap: '10px',
    },
    leftBox: {
        backgroundColor: '#fafafa', borderRadius: '26px', p: '14px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: 'auto'
    }

};

export default function EditTaskModal({ closeModal }) {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };

    return (
        <>
            <Box sx={{
                width: '20px',
                height: '20px',
                position: 'fixed',
                right: '10px',
                cursor: 'pointer',
                zIndex: '11'
            }}
                onClick={() => closeModal()}
            > <img src={Close} alt="close" /></Box>
            <Grid container spacing={2}>
                {/*------- left side start ---------- */}
                <Grid item xs={12} md={6} >
                    <Box sx={styles.leftBox}>
                        <Box >
                            <Box sx={{ display: 'flex' }}>
                                <Box sx={{ background: '#66d9e8', height: '16px', width: '16px', borderRadius: '4px', mr: 1 }} />
                                <Typography variant="p" style={styles.Text1}> Work</Typography>
                            </Box>
                            <Divider sx={{ backgroundColor: '#dddddd', my: 2 }} />
                            {/*------- form  start ---------- */}
                            <Box >
                                {/* <form action=""> */}
                                {/*-------title ---------- */}
                                <FormControl variant="standard" sx={{ width: '100%' }}>
                                    <input type="text" style={{ ...styles.inputbox, ...styles.input, }} placeholder="Renew driver's license" />
                                </FormControl>
                                {/*------- description ---------- */}
                                <FormControl variant="standard" sx={{ py: '12px', width: '100%' }}>
                                    <input type="text" style={{ ...styles.inputbox, ...styles.input, height: '85px' }} placeholder="Description" />
                                </FormControl>

                                {/*------- other details start---------- */}

                                {/*------- Assignee ---------- */}
                                <Box sx={{ display: 'flex', pt: '8px', columnGap: '30px', alignItems: 'center', }}>
                                    <Typography variant="p" style={styles.Text1}> Assignee</Typography>
                                    <FormControl variant="standard">
                                        <Box sx={{ ...styles.inputbox, borderRadius: '26px', width: '80%' }}>
                                            <Box sx={styles.image} > <img src={Jhon} alt="profile" className='img' /></Box>
                                            <input type="text" style={styles.assigneeInput} placeholder='Jhon' />
                                        </Box>
                                    </FormControl>
                                </Box>
                                {/*------- Priroty ---------- */}
                                <Box sx={{ display: 'flex', pt: '8px', columnGap: '48px', alignItems: 'center', }}>
                                    <Typography variant="p" style={styles.Text1}> Priroty</Typography>
                                    <FormControl variant="standard">
                                        <Box style={{ ...styles.inputbox, ...styles.input, height: '38px', alignItems: 'center', width: '120px' }}>
                                            <input type="text" style={styles.assigneeInput} placeholder='Normal' />
                                            <Box sx={{ display: 'flex', alignItems: 'center', }}  > <KeyboardArrowDownIcon sx={{ fill: '#262626' }} /></Box>
                                        </Box>
                                    </FormControl>
                                </Box>
                                {/*------- Due date ---------- */}
                                <Box sx={{ display: 'flex', pt: '8px', columnGap: '30px', alignItems: 'center', }}>
                                    <Typography variant="p" style={styles.Text1}> Due date</Typography>
                                    <FormControl variant="standard">
                                        <Box style={{ ...styles.inputbox, ...styles.input, height: '38px', alignItems: 'center', width: '120px' }}>
                                            <input type="text" style={styles.assigneeInput} placeholder='11-03-22' />
                                            <Box sx={{ display: 'flex', alignItems: 'center', }}  > <KeyboardArrowDownIcon sx={{ fill: '#262626' }} /></Box>
                                        </Box>
                                    </FormControl>
                                </Box>
                                {/*------- Reminder ---------- */}
                                <Box sx={{ display: 'flex', pt: '8px', columnGap: '30px', alignItems: 'center', }}>
                                    <Typography variant="p" style={styles.Text1}>Reminder </Typography>
                                    <FormControl variant="standard">
                                        <Box style={{ ...styles.inputbox, ...styles.input, height: '38px', alignItems: 'center', width: '120px' }}>
                                            <input type="text" style={styles.assigneeInput} placeholder='11-03-22' />
                                            <Box sx={{ display: 'flex', alignItems: 'center', }}  > <KeyboardArrowDownIcon sx={{ fill: '#262626' }} /></Box>
                                        </Box>
                                    </FormControl>
                                </Box>
                                {/*------- Repeat Task ---------- */}
                                <Box sx={{ display: 'flex', pt: '8px', columnGap: '30px', alignItems: 'center', }}>
                                    <Typography variant="p" style={styles.Text1}>Reminder </Typography>
                                    <FormControl variant="standard">
                                        <Box style={{ ...styles.inputbox, ...styles.input, height: '38px', alignItems: 'center' }}>
                                            <input type="text" style={styles.assigneeInput} placeholder='Every day at 8 pm' />
                                            {/* <Box sx={{display: 'flex',alignItems: 'center',}}  > <KeyboardArrowDownIcon sx={{ fill: '#262626' }} /></Box> */}
                                        </Box>
                                    </FormControl>
                                </Box>
                                {/*------- Labels ---------- */}
                                <Box sx={{ display: 'flex', pt: '8px', columnGap: '30px', alignItems: 'center', }}>
                                    <Typography variant="p" style={styles.Text1}>Labels </Typography>
                                    <FormControl variant="standard">
                                        <Box style={{ display: 'flex', pt: '8px', columnGap: '10px', alignItems: 'center', }}>
                                            <Box style={styles.typeButtom}>Job</Box>
                                            <Button style={styles.addLabelButton}> <AddIcon sx={{ height: '16px', width: '16px' }} /> Add label </Button>
                                            {/* <input type="text" style={styles.assigneeInput} placeholder='Every day at 8 pm' /> */}
                                            {/* <Box sx={{display: 'flex',alignItems: 'center',}}  > <KeyboardArrowDownIcon sx={{ fill: '#262626' }} /></Box> */}
                                        </Box>
                                    </FormControl>
                                </Box>

                                {/*--------------- add new task --------------- */}
                                <Box sx={{ mt: 3 }}>
                                    <Typography variant='p' style={styles.Heading} >Subtask</Typography>
                                    <Box
                                        sx={{
                                            cursor: 'pointer',
                                            width: '100%',
                                            padding: '10px',
                                            backgroundColor: 'rgba(250,250,250,0)',
                                            // borderRadius: '8px',
                                            borderBottom: '1px solid #ebebeb',
                                            boxSizing: 'border-box',
                                            display: 'flex',
                                            alignItems: 'center',
                                            mt: 1
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
                                    <Box sx={{ py: 1, pl: '25px' }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={isChecked} // You need to define isChecked and handleChange
                                                    onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'checkbox' }}
                                                    sx={{
                                                        border: '1px solid rgba(221, 221, 221, 1)',
                                                        width: '16px',
                                                        height: '16px',
                                                        pointerEvents: 'auto',
                                                        color: 'rgba(124, 124, 124, 0)',
                                                        backgroundColor: 'rgba(235, 235, 235, 0)',
                                                        borderRadius: '4px',
                                                        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.08)',
                                                    }}
                                                />
                                            }
                                            label="Sub task"
                                            sx={{
                                                '& .MuiTypography-root': {
                                                    color: '#444444',
                                                    fontSize: '16px',
                                                    fontFamily: 'Lexend Deca',
                                                    lineHeight: '24px',
                                                    ml: 1
                                                }
                                            }}
                                        />
                                        {/* <Divider sx={{ backgroundColor: '#ebebeb', mt: 0.2 }} /> */}
                                    </Box>
                                </Box>
                                {/*--------------- add new task end--------------- */}



                                {/*------- other details end---------- */}
                                {/* </form> */}
                            </Box>
                            {/*--------------- budelButtonttons start--------------- */}

                            {/*--------------- buttons end--------------- */}

                            {/*------- form  start ---------- */}
                        </Box>
                        <Box sx={{
                            display: 'flex', columnGap: '30px', justifyContent: 'space-around', pt:
                                '190px'
                        }}>
                            <Button sx={{ ...styles.delButton, ...styles.button }} variant='outlined'>Delete task</Button>
                            <Button variant='contained' sx={{ ...styles.primaryButton, ...styles.button }}> Save changes</Button>
                        </Box>
                    </Box>

                </Grid>
                {/*------- left side end ---------- */}
                <Grid item xs={12} md={6} >
                    <Box>

                        {/*-------Note ---------- */}
                        <FormControl variant="standard" sx={{ width: '100%' }}>
                            {/* <input type="text" style={{  height: '200px', alignItems:'flex-start' }} placeholder="Note" /> */}
                            <StyledTextarea
                                aria-label="empty textarea"
                                placeholder="Note"
                                minRows={7}
                            />
                        </FormControl>

                        {/*------- comment section start ---------- */}
                        <Box sx={{ mt: 3 }}>
                            <Typography variant='p' style={styles.Heading} >Comments</Typography>
                            {
                                commentArray.map((items, inx) => {
                                    return (
                                        <>
                                            <Box sx={{ display: 'flex', width: '100%', mt: 3, justifyContent: 'space-between' }}>
                                                <Box sx={{ display: 'flex', columnGap: '10px', }}>
                                                    <Box sx={{ width: '40px', height: '40px', borderRadius: '50%', }} >
                                                        <img src={Jhon} alt="profile" className='img' /></Box>
                                                    <Box sx={{ maxWidth: '80%' }}>
                                                        <Box sx={{ display: 'flex', columnGap: '5px' }}>
                                                            <Typography variant='p' style={styles.normalText} sx={{ fontSize: '16px', fontWeight: 500, }}>{items.name}</Typography>
                                                            <Typography variant='p' style={styles.normalText}
                                                                sx={{ fontSize: '14px', fontWeight: 200, }} >{items.time}</Typography>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', columnGap: '5px', mt: 1 }}>
                                                            <Typography variant='p' style={styles.normalText} sx={{ fontSize: '16px', fontWeight: 200, }} >{items.comment}</Typography>
                                                        </Box>
                                                        <Box sx={{
                                                            width: 'auto',
                                                            backgroundColor: '#fafafa',
                                                            borderRadius: '8px',
                                                            border: '1px solid #ebebeb',
                                                            boxSizing: 'border-box',
                                                            p: 2,
                                                            display: 'flex',
                                                            mt: 2,
                                                            columnGap: '8px',
                                                            position: 'relative'
                                                        }}>
                                                            <Box sx={styles.image} > <img src={items.fileImg} alt="profile" className='img' /></Box>
                                                            <Typography variant='p' style={styles.normalText} sx={{ fontSize: '14px', }}>{items.file}</Typography>

                                                            <Typography variant='p' style={styles.normalText}
                                                                sx={{ fontSize: '14px', fontWeight: 400, position: 'absolute', right: '10px', bottom: '5px' }}
                                                            >{items.fileSize}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box  ><MoreHorizIcon sx={{ cursor: 'pointer' }} /> </Box>
                                            </Box>
                                        </>
                                    )
                                })
                            }
                        </Box>
                        {/*------- comment section end ---------- */}

                        {/*------- enter comment  end ---------- */}
                        <Box style={styles.messageBox}>
                            <Textarea
                                aria-label="empty textarea"
                                placeholder=" Type a new message...."
                                minRows={4}
                            />
                            <Divider sx={{ backgroundColor: '#dddddd', my: 2 }} />
                            <Box style={styles.sendBox}>
                                <Box style={styles.iconBox}>
                                    <img src={Gallary} alt="icon" style={{ cursor: 'pointer' }} />
                                    <img src={Attach} alt="icon" style={{ cursor: 'pointer' }} />
                                    <img src={Link} alt="icon" style={{ cursor: 'pointer' }} />
                                </Box>
                                <Box style={{ ...styles.iconBox, cursor: 'pointer' }}>
                                    <img src={Send} alt="icon" />
                                </Box>
                            </Box>
                        </Box>
                        {/*------- enter comment  end ---------- */}

                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
