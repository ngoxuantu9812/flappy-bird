import floor from "../images/pipe-bottom.png"
const FloorBottom = (params: any) => {
    const {floorBottom, setFloorBottom} = params
    return(
        <>
            <img src={floor.src} style={{bottom:0,height: floorBottom.height, position:"absolute", width:"45px", left:floorBottom.left+"%", transition:0.3}}></img>
        </>
    )
}
export default FloorBottom;