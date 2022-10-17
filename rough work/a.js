
function reorderList(head){
    let temp;
    let tail = head;
    while(tail.next !== null){
        tail = tail.next;
    }


    function helper(node){
        if(node === null) return;
        node.next.next = node.next;
        helper(node.next.next);
        temp = node.next;

    }

//
helper(head)

}

function removeDuplicates(list){

let head = list.head;
    function helper(node){
        if(node.next === null) return;
        if(node.next.val === node.val) node.next = node.next.next;
        helper(node.next);


    }
helper(head);
return list;

}

function checkForCycle(list){

let head = list.head;
    function helper(node){
        if (node === null) return;
        if (node.next === node.next.next) return true;
        

    }

helper(head);
return false;

}

function findCycleIteratively(list){

    let pointer1 = head;
    let pointer2 = head;
    
    while(pointer1 !== null){
    
    if(pointer1 === pointer2) return true;
    pointer1 = pointer1.next;
    pointer2= ponter2.next.next;
    }
    
    return false;
    }

 function findLinkedListMiddle(head){
    let index = 0;
    let current = head;
    function numUntilNull(node){
        let endCounter = 0;
        while(node.next !== null){
            node = node.next;
            endCounter = endCounter+1;
        }
        return endCounter;
    }
    while(current !== null){
        if(index === numUntilNull(current)) return current;
        if(index > numUntilNull(current)) return current;
        index = index + 1;
        current = current.next;
    }
 }  
 
 function isLinkedListPalindrome(head){
    let index = 0;
    let compareStack = []
    let traverse = head;

        function findLastIndex(head){
            let index2 = 0;
            let current = head;
            while(current.next !== null){
                current = current.next;
                index2 = index2 +1;
            }
            return index2;
        }
    let lastIndex = findLastIndex(head);

    if(lastIndex % 2 !== 0){
        while(index < Math.floor(lastIndex/2)){
            compareStack.push(traverse.val);
            traverse = traverse.next;
            index = index+1;
        }
        while(traverse !== null){
            let compare = compareStack.pop();
            if (traverse.val !== compare) return false;
        }
    }
    if(lastIndex % 2 === 0){
        while(index < Math.floor(lastIndex/2)){
            compareStack.push(traverse.val);
            traverse = traverse.next;
            index = index+1;
        }
        traverse = traverse.next;
        while(traverse !== null){
            let compare = compareStack.pop();
            if (traverse.val !== compare) return false;
            traverse = traverse.next;
        }
    }
    return true;
 }