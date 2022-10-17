class PersonNode{
    constructor(name, adjacent = new Set()){
        this.name = name;
        this.adjacent = adjacent;
    }
}
//BFS
class FriendGraph {
    constructor(){
        this.nodes = new Set();
    }
    addPerson(node){
        this.nodes.add(node);
    }
    addPeople(peopleList){
        for(let node of peopleList){
            this.addPerson(node);
        }
    }
    setFriends(person1,person2){
        person1.adjacent.add(person2);
        person2.adjacent.add(person1);
    }
    areConnectedBFS(person1,person2){
        let toVisitQueue = [person1];
        let seen = new Set(toVisitQueue);
        while(toVisitQueue.length){
            let currPerson = toVisitQueue.shift();

            if(currPerson === person2) return true;

            for (let neighbor of currPerson.adjacent){
                if(!seen.has(neighbor)){
                toVisitQueue.push(neighbor);
                seen.add(neighbor)
                }
            }
        }
        return false;
    }
    areConnectedDFS(person1,person2){
        let toVisitStack = [person1];
        let seen = new Set(toVisitQueue);
        while(toVisitStack.length){
            let currPerson = toVisitQueue.pop();

            if(currPerson === person2) return true;

            for (let neighbor of currPerson.adjacent){
                if(!seen.has(neighbor)){
                toVisitQueue.push(neighbor);
                seen.add(neighbor)
                }
            }
        }
        return false;
    }

    areConnectedRecursive(person1, person2, seen = new Set([person1])){
        if(person1 === person2) return true;
        for(let neighbor of person1.adjacent){
            if(!seen.has(neighbor)){
               seen.add(neighbor);
               if(this.areConnectedRecursive(neighbor, person2, seen)){
                return true; 
               } 
            }
        }

    }
}

const homer = new PersonNode('homer')
const marge = new PersonNode('marge');
const maggie = new PersonNode('maggie')
const lisa = new PersonNode('lisa');
const grampa = new PersonNode('grampa');

const friends = new FriendGraph();
friends.addPeople([homer,marge,maggie,lisa,grampa])
friends.setFriends(homer,marge);
friends.setFriends(homer, lisa); 
friends.setFriends(homer, maggie);
friends.setFriends(marge, maggie);  
friends.setFriends(maggie, lisa); 
friends.setFriends(lisa,grampa); 

const moe = new PersonNode('moe');
const barney = new PersonNode('barney');
const lenny = new PersonNode('lenny');

friends.addPeople([moe,barney,lenny]);
friends.setFriends([moe, barney]);
friends.setFriends([barney,lenny]);

