class InputManager {
    //list of functions to every subscriber
    observers = [];

    subscribe(fn){
        this.observers.push(fn);

    }
    unsubscribe(fn){
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    broadcast(action, data){
        this.observers.forEach(subscriber =>  subscriber(action, data));
            
    }
    handleKeys = e => {
        e.preventDefault();
        switch (e.keyCode){
            case 37:
                //left movement
                this.broadcast('move', {x:-1, y:0});
                break;
            case 38:
                //right movement
                this.broadcast('move', {x:0, y:-1});
                break;
            case 39:
                //up movement
                this.broadcast('move', {x:1, y:0});
                break;
            case 40:
                // down movement
                this.broadcast('move', {x:0, y:1});
                break;
            default:
                break;

        }
    };

    bindKeys(){
        document.addEventListener('keydown', this.handleKeys);

    };
    unbindKeys(){
        document.removeEventListener('keydown', this.handleKeys);
    };

}

export default InputManager;