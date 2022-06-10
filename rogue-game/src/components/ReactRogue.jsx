import React, {useRef, useEffect, useState} from "react";
import InputManager from "../InputManager.js";
import Player from "../Player.js";
import World from "../World.js";


const ReactRogue = ({width, height, tilesize}) => {

    const canvasRef = useRef();
    //const [player, setPlayer] = useState(new Player(1, 2, tilesize));
    const [world, setWorld] = useState(new World(width, height, tilesize));


    let inputManager = new InputManager();
    const handleInput = (action, data) => {
        console.log(`handle input: ${action}:${JSON.stringify(data)}`);
        let newWorld = new World();
        Object.assign(newWorld, World);
        newWorld.movePlayer(data.x, data.y);
        setWorld(newWorld);
    };
    useEffect(()=>{
        console.log('create Map');
        let newWorld = new World();
        Object.assign(newWorld, World);
        newWorld.createCellularMap();
        setWorld(newWorld);
    }, []);
    
    useEffect(()=>{
        console.log('Bind input');
        inputManager.bindKeys();
        inputManager.subscribe(handleInput);
        return () => {
            inputManager.unbindKeys();
            inputManager.unsubscribe(handleInput);

        };
    });

    useEffect(()=>{
        console.log('draw to canvas');
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width * tilesize, height * tilesize);
        world.draw(ctx);
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