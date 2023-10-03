// @ts-ignore
import floor from "../images/pipe.png"
const FloorTop = (params: any) => {
    const {floorTop, setFloorTop} = params
    return(
        <>
            <img src={floor.src} style={{top:-floorTop.height,transform: "rotate(180deg)",height:"300px", position:"absolute", width:"45px",left:floorTop.left+"%", transition:0.3}} alt=""></img>
        </>
    )
}
export default FloorTop;