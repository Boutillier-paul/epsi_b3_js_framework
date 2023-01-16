import { useState, useEffect } from "react";
import useTimerParser from "./Hooks/useTimerParser";
import Button from '@mui/material/Button'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Pomodoro() {
    const [time, setTime] = useState(0)
    const {parseSecondstoHMS} = useTimerParser()
    const [isActive, setIsActive] = useState(false)
    const [timeList, setTimeList] = useState([])
    const [isDateSorted, setIsDateSorted] = useState(false)
    const [isTimeSorted, setIsTimeSorted] = useState(false)
 
    useEffect( () => {
        if (isActive) {
            const interval = setInterval( () => {
                setTime(time => time + 1);
            }, 1000)
    
            return () => clearInterval(interval)
        }
    }, [isActive])

    function runTimer() {
        if (isActive) {
            setIsActive(!isActive)
            setTimeList(timeList => [...timeList, {"date": new Date(), "timer": time}])
            setTime(0)
        }
        else {
            setIsActive(!isActive)
        }
    }

    function sortByDate() {
        if (isDateSorted) {
            setTimeList([...timeList].reverse())
            setIsDateSorted(!isDateSorted)
        }
        else {
            setTimeList([...timeList].sort((p1, p2) => (p1.date > p2.date) ? 1 : (p1.date < p2.date) ? -1 : 0))
            setIsDateSorted(!isDateSorted)
        }
    }

    function sortByTime() {
        if (isTimeSorted) {
            setTimeList([...timeList].reverse())
            setIsTimeSorted(!isTimeSorted)
        }
        else {
            setTimeList([...timeList].sort((p1, p2) => (p1.timer > p2.timer) ? 1 : (p1.timer < p2.timer) ? -1 : 0))
            setIsTimeSorted(!isTimeSorted)
        }
    }

    return (
        <>
            <div>
                <h1> { parseSecondstoHMS(time) } </h1>

                <Button variant="contained" onClick={() => runTimer()}>
                    {isActive ? ("Stop") : ("Start")}
                </Button>
            </div>

            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date <Button onClick={() => sortByDate()}>Sort</Button></TableCell>
                                <TableCell>Time <Button onClick={() => sortByTime()}>Sort</Button></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                        {timeList.map((row, index) => {
                            return (
                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell>{row.date.toLocaleString()}</TableCell>
                                    <TableCell>{parseSecondstoHMS(row.timer)}</TableCell>
                                </TableRow>
                            )
                        })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}