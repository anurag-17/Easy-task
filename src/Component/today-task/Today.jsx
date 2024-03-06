import React from 'react'
import { Box, Typography, FormControlLabel, Checkbox, Divider } from '@mui/material'
import setting from "../../Assets/svg/home/settings.svg"
import flag from "../../Assets/svg/home/flag.svg"
import calenderTime from "../../Assets/svg/home/cal_times.svg"
import check from "../../Assets/svg/home/check_Checkbox.svg"
import Plus from "../../Assets/svg/home/plus.svg"
import styled from '@emotion/styled'

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
    subtask: {
        color: '#444444',
        fontSize: '12px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '16px',
    },
    countButton: {
        cursor: 'pointer',
        top: '325px',
        left: '433px',
        width: '26px',
        height: '16px',
        padding: '0px 8px',
        border: '0',
        boxSizing: 'border-box',
        borderRadius: '4px',
        backgroundColor: '#ebebeb',
        color: '#444444',
        fontSize: '10px',
        fontFamily: 'Lexend Deca',
        fontWeight: 600,
        lineHeight: '12px',
        outline: 'none',
    },
    flexBox: {
        display: 'flex', columnGap: '20px', alignItems: 'center', mb: 1
    },
    customChip: {
        backgroundColor: 'rgba(250,250,250,0)',
        borderRadius: '26px',
        border: '1px solid #dddddd',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: '5px',
        padding: '2px 8px',
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
}

const Button = styled('button')(({ theme }) => ({
    ...theme.typography.button,
    cursor: 'pointer',
    padding: '10px 15px',
    border: '0',
    boxSizing: 'border-box',
    borderRadius: '8px',
    backgroundColor: '#e60d1a',
    color: '#ffffff',
    fontSize: '16px',
    fontFamily: 'Lexend Deca',
    fontWeight: 600,
    lineHeight: '24px',
    outline: 'none',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textTransform: "initial",
}));

const dummyarr = [
    { task: "Research content ideas" },
    { task: "Create a database of guest authors " },
    {
        task: "Consult accountant ",
        "subTask": "sub task"
    }

]
const TodayPage = () => {
    const [isChecked, setIsChecked] = React.useState(false);

    const handleChange = (event) => {
        setIsChecked(event.target.checked);
    };
    return (
        <>
            <Box>
                <Box sx={{ display: 'flex', columnGap: '20px', alignItems: 'center', }}>
                    <Typography varient="p" style={styles.Head}>Today</Typography>
                    <Box style={styles.tol_count}>5</Box>
                    <Box sx={{ cursor: 'pointer' }}> <img src={setting} alt="setting" /></Box>
                </Box>

                <Box sx={{ pt: '100px', px: '20px' }} >

                    {/* --------------- task map   ---------------- */}
                    {dummyarr.map((item, index) => (
                        <>
                            <Box key={index} sx={{ py: 1 }}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={isChecked} // You need to define isChecked and handleChange
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'checkbox' }}
                                        />
                                    }
                                    label={item.task}
                                    sx={{
                                        '& .MuiTypography-root': {
                                            color: '#444444',
                                            fontSize: '16px',
                                            fontFamily: 'Lexend Deca',
                                            lineHeight: '24px',
                                        }
                                    }}
                                />
                            </Box>
                            {/* --------------- sub task map  start ---------------- */}
                            {
                                item.subTask &&
                                <>
                                    <Box sx={styles.flexBox}>

                                        <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center', }}>
                                            <Box className="tol_count"> 1 </Box>
                                            <Typography varient="p" style={styles.subtask}>Subtasks</Typography>
                                        </Box>
                                        <Box sx={{ background: "#ebebeb", height: '16px', width: '1px', }} />
                                        <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center', }}>
                                            <Box sx={{ background: "#ffd43b", height: '16px', width: '16px', borderRadius: '4px', }} />
                                            <Typography varient="p" style={styles.subtask}>List 1</Typography>
                                        </Box>
                                    </Box>
                                </>

                            }
                            <Divider sx={{ backgroundColor: '#ebebeb', }} />
                            {
                                item.subTask &&
                                <>
                                    <Box sx={{ py: 1, pl: '25px' }}>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={isChecked} // You need to define isChecked and handleChange
                                                    onChange={handleChange}
                                                    inputProps={{ 'aria-label': 'checkbox' }}
                                                />
                                            }
                                            label="Sub task"
                                            sx={{
                                                '& .MuiTypography-root': {
                                                    color: '#444444',
                                                    fontSize: '16px',
                                                    fontFamily: 'Lexend Deca',
                                                    lineHeight: '24px',
                                                }
                                            }}
                                        />
                                        <Divider sx={{ backgroundColor: '#ebebeb', mt: 0.2 }} />
                                    </Box>
                                </>

                            }
                            {/* --------------- sub task map  end ---------------- */}
                        </>
                    ))}


                    {/* --------------- task map  end ---------------- */}

                    <Box sx={{ py: 1 }}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isChecked} // You need to define isChecked and handleChange
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'checkbox' }}
                                />
                            }
                            label="Renew driver's license"
                            sx={{
                                '& .MuiTypography-root': {
                                    color: '#444444',
                                    fontSize: '16px',
                                    fontFamily: 'Lexend Deca',
                                    lineHeight: '24px',
                                }
                            }}
                        />
                    </Box>
                    <Box sx={styles.flexBox}>

                        <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'flex-end', }}>
                            <Box sx={{ height: '16px', }}> <img src={calenderTime} alt="cal" /> </Box>
                            <Typography varient="p" style={styles.subtask} sx={{whiteSpace:'nowrap'}}>22-03-22</Typography>
                        </Box>

                        <Box sx={{ background: "#ebebeb", height: '16px', width: '1px', }} />

                        <Box sx={{ display: 'flex', columnGap: '10px', alignItems: 'center', }}>
                            <Box sx={{ background: "#ff6b6b", height: '16px', width: '16px', borderRadius: '4px' }} />
                            <Typography varient="p" style={styles.subtask}>Personal</Typography>
                        </Box>

                        <Box sx={{ background: "#ebebeb", height: '16px', width: '1px', }} />


                        <Box style={styles.customChip}>
                            <Box sx={{ background: "#000", height: '16px', width: '16px', borderRadius: '50%' }} />
                            Jhon<Typography varient="p" style={styles.subtask}></Typography>
                        </Box>

                        <Box sx={{ background: "#ebebeb", height: '16px', width: '1px', }} />

                        <Box >
                            <img src={flag} alt="flag" />
                        </Box>

                        <Box sx={{ background: "#ebebeb", height: '16px', width: '1px', }} />

                        <Box style={styles.typeButtom}>
                            Job
                        </Box>
                    </Box>

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
                    <Box sx={{position:'fixed',right:'60px', bottom:'30px'}}>
                        <Button variant="contained"> Add new task</Button>

                    </Box>

                    {/*--------------- add new task end--------------- */}
                </Box >
            </Box>
        </>
    )
}

export default TodayPage