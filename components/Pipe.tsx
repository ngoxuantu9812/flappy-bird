import floor from "../images/pipe.png"
import {useEffect, useState} from "react";

const Pipe = (params: any) => {
    const {listFloor, setListFloor, setCurrentFloor, start} = params
    const [check, setCheck] = useState(0)
    useEffect(() => {
        if (start == 1){
            const animationFrameFloor = requestAnimationFrame(() =>{
                const listPipe = listFloor.map(function (item){
                    item.floorTop.left = item.floorTop.left - 0.2
                    item.floorBottom.left = item.floorBottom.left - 0.2
                    return item
                })
                const itemFloor = listPipe.find((item) =>{
                    if (item.floorTop.left > 39 && item.floorTop.left < 43){
                        return item
                    }
                } )
                setCurrentFloor(itemFloor)
                setListFloor(listPipe)
            });
            return () => {
                cancelAnimationFrame(animationFrameFloor)
            };
        }



    }, [listFloor, check, start])

    useEffect(() => {
        if (start == 1){
            const interval = setInterval(() => {
                setCheck(check + 1)
                let x = Math.random() * 200
                const itemFloor = {
                    id: check + 1,
                    floorTop: {
                        height: x,
                        left: 100 + 30*check
                    },
                    floorBottom: {
                        height: 200 - x,
                        left: 100 + 30*check
                    }
                }
                const arrayFloor = [...listFloor, itemFloor]
                setListFloor(arrayFloor)
            }, 1000);

            return () => clearInterval(interval);

        }

    }, [check, start])

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