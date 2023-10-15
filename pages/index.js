import styles from '../styles/Home.module.css';
import Bird from '../components/Bird'
import {useEffect, useState} from "react";
import Pipe from "../components/Pipe";
import logo from "../images/logo.png"
export default function Home() {

    const [top, setTop] = useState(300);
    const [score, setScore] = useState(0);
    const [listFloor, setListFloor] = useState([])
    const [currentFloor, setCurrentFloor] = useState()
    const [start , setStart] = useState(0)
    useEffect(() => {
        if (currentFloor !== undefined){
            if (currentFloor  && 300 - currentFloor.floorTop.height  + 26 < top && 300 - currentFloor.floorBottom.height <  513 - top - 26){
                setScore(score + 1);
            }
            else if(top > 513){
                setStart(0)
                setScore(0)
                setListFloor([])
                setTop(300)
            }else{
                setStart(0)
                setScore(0)
                setListFloor([])
                setTop(300)
            }
        }

    }, [currentFloor])

    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.code === "Space") {
                setStart(1);
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.score}>
                {score}
            </div>
            <div style={{position:"absolute", top:15, zIndex:1}}>
                <img src={logo.src}/>
            </div>
            <Bird
                top={top}
                setTop={setTop}
                setStart={setStart}
                start={start}
            ></Bird>
            <Pipe
                listFloor={listFloor}
                setListFloor={setListFloor}
                currentFloor={currentFloor}
                setCurrentFloor={setCurrentFloor}
                start={start}

            ></Pipe>

        </div>
    )
}
