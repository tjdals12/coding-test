function combination(arr, count) {
    const result = [];
    const visited = new Array(arr.length).fill(false);
    const current = [];
    const traverse = (index) =>{
        if (current.length === count) {
            result.push([...current]);
            return;
        }
        for (let i = index; i < arr.length; i++) {
            if (visited[i] === false) {
                current.push(arr[i]);
                traverse(i + 1);
                current.pop();
            }
        }
    }
    traverse(0);
    return result;
}

function duplicateSequence(arr, count) {
    const result = [];
    const current = [];
    const traverse = (index) => {
        if (current.length === count) {
            result.push([...current]);
            return;
        }
        for (let i = index; i < arr.length; i++) {
            current.push(arr[i]);
            traverse(i);
            current.pop(arr[i]);
        }
    }
    traverse(0);
    return result;
}

// console.log(combination([1,2,3,4,5], 3));
console.log(duplicateSequence([1,2,3,4,5], 3));