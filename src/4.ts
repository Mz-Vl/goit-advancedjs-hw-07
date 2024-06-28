class Key {
    private signature: number;

    constructor() {
        this.signature = Math.random();
    }

    getSignature() {
        return this.signature;
        }
    }


class Person {
    private key: Key;

    constructor(key: Key) {
        this.key = key;
    }

    getKey() {
        return this.key;
        }
}
    

abstract class House {
    protected door: boolean = false;
    protected key: Key;
    protected tenants: Person[] = [];

    constructor(key: Key) {
        this.key = key;
    }

    abstract openDoor(key: Key): void;

    comeIn(person: Person): void {
        if (this.door) {
        this.tenants.push(person);
        console.log(`${person.getKey().getSignature()} has entered the house.`);
    } else {
        console.log('The door is closed. Cannot come in.');
        }
    }
}


class MyHouse extends House {
    constructor(key: Key) {
    super(key);
    }

    openDoor(key: Key): void {
        if (this.key.getSignature() === key.getSignature()) {
        this.door = true;
        console.log('The door is now open.');
        } else {
        console.log('Wrong key. The door remains closed.');
        }
    }
}


const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};