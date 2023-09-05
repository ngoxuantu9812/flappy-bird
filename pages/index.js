import styles from '../styles/Home.module.css';
import Bird from '../components/Bird'
import FloorTop from '../components/FloorTop';
import FloorBottom from '../components/FloorBottom';
import {useState} from "react";
export default function Home() {

    const [top, setTop] = useState(400);
    const [floorTop, setFloorTop ] = useState({
        height:Math.random()*(512 - 100),
        left:100
    });

    const [floorBottom, setFloorBottom] = useState({
        height:512 - floorTop.height - 100,
        left:100
    })
  return (
    <div className={styles.container}>
      <Bird
          top={top}
          setTop={setTop}
      ></Bird>
      <FloorTop
          floorTop={floorTop}
          setFloorTop={setFloorTop}
      ></FloorTop>
      <FloorBottom
          floorBottom={floorBottom}
          setFloorBottom={setFloorBottom}
      ></FloorBottom>
    </div>
  )
}
