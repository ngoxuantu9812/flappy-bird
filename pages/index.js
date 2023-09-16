import styles from '../styles/Home.module.css';
import Bird from '../components/Bird'
import FloorTop from '../components/FloorTop';
import FloorBottom from '../components/FloorBottom';
import {useEffect, useState} from "react";

export default function Home() {

    const [top, setTop] = useState(400);
    const [checkFloor, setCheckFloor] = useState(true);

    const [floorTop, setFloorTop] = useState({
        height: Math.random() * (512 - 100),
        left: 100
    });

    const [floorBottom, setFloorBottom] = useState({
        height: 512 - floorTop.height - 100,
        left: 100
    })

    useEffect(() => {
        setTimeout(() => {
            setFloorTop({...floorTop, left: (floorTop.left - 5)})
            setFloorBottom({...floorBottom, left: (floorBottom.left - 5)})
        }, 500)

        if (floorBottom.left < 10) {
            setCheckFloor(false);
        }
    }, [])

    const floorEle = <>
        <FloorTop
            floorTop={floorTop}
            setFloorTop={setFloorTop}
        ></FloorTop>
        <FloorBottom
            floorBottom={floorBottom}
            setFloorBottom={setFloorBottom}
        ></FloorBottom>
    </>
    return (
        <div className={styles.container}>
            <Bird
                top={top}
                setTop={setTop}
            ></Bird>
            {
                checkFloor && floorEle
            }

        </div>
    )
}
