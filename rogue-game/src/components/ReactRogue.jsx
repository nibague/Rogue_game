import React, {useRef, useEffect} from "react";

const ReactRogue = ({width, height, tilesize}) => {


    const canvasRef = React.useRef();

    useEffect(()=>{
        console.log('draw to canvas');
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width * tilesize, height * tilesize);
        ctx.fillStyle = '#000';
        ctx.fillRect(12, 22,16, 16);
    });

    return (
        <canvas 
        className='border-solid border-2 border-black' 
        width={width * tilesize} 
        height={height * tilesize}
        ref={canvasRef}>
            Hello world
        </canvas>
    );
};


export default ReactRogue;