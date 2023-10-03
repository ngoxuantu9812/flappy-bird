import bird from "../images/bird.png"
import {useEffect, useState} from "react";
const Bird = (params: any) => {
    const {top, setTop} = params
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.code === "Space") {
                console.log(top);
                setTop(top - 20);
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };

    }, [top]);

    useEffect(() => {
        // const animationFrame = requestAnimationFrame(() => {
        //     setTop(top + 0.5);
        // });
        //
        // return () => {
        //     cancelAnimationFrame(animationFrame);
        // };
    }, [top]);

    return(
        <>
            <img src={bird.src} style={{position:"absolute",left:"40%", top:top}}></img>
        </>
    )
}
export default Bird;