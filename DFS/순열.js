function sequence(arr, count) {
    const result = [];
    const visited = new Array(arr.length).fill(false);
    const current = [];
    const traverse = () => {
        if (current.length === count) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            if (visited[i] === false) {
                visited[i] = true;
                current.push(arr[i]);
                traverse();
                current.pop();
                visited[i] = false;
            }
        }
    }
    traverse();
    return result;
}

function duplicateSequence(arr, count) {
    const result = [];
    const current = [];
    const traverse = () => {
        if (current.length === count) {
            result.push([...current]);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            current.push(arr[i]);
            traverse();
            current.pop();
        }
    }
    traverse();
    console.log(result.length);
    return result;
}

// console.log(sequence([1,2,3,4,5], 3));
console.log(duplicateSequence([1,2,3,4,5], 3));