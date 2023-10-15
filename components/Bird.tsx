import bird from "../images/bird.png"
import {useEffect, useState} from "react";
const Bird = (params: any) => {
    const {top, setTop, start} = params
    useEffect(() => {
        const keyDownHandler = (e) => {
            if (e.code === "Space") {
                setTop(top - 30);
            }
        };
        document.addEventListener("keydown", keyDownHandler);
        return () => {
            document.removeEventListener("keydown", keyDownHandler);
        };

    }, [top]);

    useEffect(() => {
        if (start == 1){
            const animationFrame = requestAnimationFrame(() => {
                setTop(top + 1);
            });

            return () => {
                cancelAnimationFrame(animationFrame);
            };
        }

    }, [top]);

    return(
        <>
            <img src={bird.src} style={{position:"absolute",left:"40%", top:top}}></img>
        </>
    )
}
export default Bird;