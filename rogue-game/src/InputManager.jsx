class InputManager {
    //list of functions to every subscriber
    observer = []

    subscribe(fn){
        this.observer.push(fn)

    }
    unsubscribe(fn){
        this.observers = this.observers.filter(subscriber => subscriber !== fn);
    }

    broadcast(action, data){
        this.observers.forEach(subscriber =>  subscriber(action, data));
            
    }
    handlekeys = e => {
        e.preventDefault();
        switch (e.KeyCode){
            case 37:
                //left movement
                this.droadcast('move', {x:-1, y:0});
                break;
            case 38:
                //right movement
                this.droadcast('move', {x:0, y:-1});
                break;
            case 39:
                //up movement
                this.droadcast('move', {x:1, y:0})
                break;
            case 40:
                // down movement
                this.droadcast('move', {x:0, y:1})
                break;
            default:
                break;

        }
    }


}