import floor from "../images/pipe-bottom.png"
const FloorBottom = (params: any) => {
    const {floorBottom, setFloorBottom} = params
    return(
        <>
            <img src={floor.src} style={{bottom:0,height: floorBottom.height, position:"absolute", width:"45px"}}></img>
        </>
    )
}
export default FloorBottom;