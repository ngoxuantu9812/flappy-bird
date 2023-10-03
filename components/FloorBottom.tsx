import floor from "../images/pipe.png"
const FloorBottom = (params: any) => {
    const {floorBottom, setFloorBottom} = params
    return(
        <>
            <img src={floor.src} style={{bottom:-floorBottom.height, position:"absolute",height:"300px", width:"45px", left:floorBottom.left+"%", transition:0.3}}></img>
        </>
    )
}
export default FloorBottom;