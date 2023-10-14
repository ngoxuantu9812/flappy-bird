import floor from "../images/pipe.png"
import {useEffect, useState} from "react";

const Pipe = (params: any) => {
    const {listFloor, setListFloor} = params
    const [check, setCheck]= useState(0)
    useEffect(() => {
        const animationFrameFloor = requestAnimationFrame(() =>{
            setCheck(check+1)
             let items = listFloor.map((item, key) => {
                return {
                    id: key,
                    floorTop: {
                        height: item.floorTop.height,
                        left: 100 + 50 * key - 0.1
                    },
                    floorBottom: {
                        height: 200 - item.floorTop.height,
                        left: 100 + 50 * key - 0.1
                    }
                }
            })
            setListFloor(items)
        });
        console.log(check)

        return () => {
            cancelAnimationFrame(animationFrameFloor);
        };
    }, [listFloor, check])


    return listFloor.map((item) => {
        return <div key={item.id} className="pipe">
            <img src={floor.src} style={{
                top: -item.floorTop.height,
                transform: "rotate(180deg)",
                height: "300px",
                position: "absolute",
                width: "45px",
                left: item.floorTop.left + "%",
                transition: 0.3
            }} alt=""></img>
            <img src={floor.src} style={{
                bottom: -item.floorBottom.height,
                position: "absolute",
                height: "300px",
                width: "45px",
                left: item.floorBottom.left + "%",
                transition: 0.3
            }}></img>
        </div>
    })
}
export default Pipe;