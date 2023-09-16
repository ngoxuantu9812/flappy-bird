import floor from "../images/pipe-top.png"
const FloorTop = (params: any) => {
    const {floorTop, setFloorTop} = params
    return(
        <>
            <img src={floor.src} style={{top:0,height:floorTop.height, position:"absolute", width:"45px",left:floorTop.left+"%", transition:0.3}} alt=""></img>
        </>
    )
}
export default FloorTop;