import styles from '../styles/Home.module.css';
import Bird from '../components/Bird'
import {useEffect, useState} from "react";
import Pipe from "../components/Pipe";

export default function Home() {

    const [top, setTop] = useState(300);
    const [score, setScore] = useState(0);
    const [listFloor, setListFloor] = useState([])
    // const [listFloor, setListFloor] = useState(function () {
    //     for (let i = 0; i < 122; i++) {
    //         let x = Math.random() * 200
    //         let item = {
    //             id:i,
    //             floorTop: {
    //                 height: x,
    //                 left: 100 + 50*i
    //             },
    //             floorBottom: {
    //                 height: 200 - x,
    //                 left: 100 + 50*i
    //             }
    //         }
    //         items.push(item)
    //     }
    //     return items
    // })

    useEffect(() => {
    }, [score])

    return (
        <div className={styles.container}>
            <div className={styles.score}>
                {score}
            </div>
            <Bird
                top={top}
                setTop={setTop}
            ></Bird>
            <Pipe listFloor={listFloor} setListFloor={setListFloor}></Pipe>

        </div>
    )
}
