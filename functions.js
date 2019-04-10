// 1
function splitAndMerge(str, sp){
    let a = str.split(" ");
    let b = [];
    for(i=0; i<a.length; i++){
        b[i] = a[i].split("").join(sp);
    }
    return b.join(" ");
}

//2
function convert(obj){
    let a = [];
    for (var key in obj){
        let b = [];
        b.push(key);
        b.push(obj[key]);
        a.push(b);
    }
    return a;
}

// 3
function toCamelCase(string=""){

    if (string.indexOf("-") > -1) {
    const a = string.split("-");
    for (i=0; i<a.length; i++){
        a[i] = a[i].charAt(0).toUpperCase().concat(a[i].slice(1, a[i].length));
        }
    return a.join("");
    }

    if (string.indexOf("_") > -1) {
        const a = string.split("_");
        for (i=0; i<a.length; i++){
            a[i] = a[i].charAt(0).toUpperCase().concat(a[i].slice(1, a[i].length));
        }
        return a.join("");
    }
}

// 4
function wordReverse(str){
    let a = str.split(" ");
    let b = [];
    a.forEach( (element, i) => {
         b[i] = element.split("").reverse().join("");
    });
    return b.join(" ");
}

//6
function largest(int, ...args){
    let large = function(element){
        return element > int;
    }

    if (args.some(large)){
        let max = -Infinity;
        for (let i=0; i<args.length; i++){
            if (args[i]>max){
                max=args[i];
            }
        }
        return max;
    } else {
        return int;
    }
}

function smallest(int, ...args){
    let small = function(element){
        return element < int;
    }

    if (args.some(small)){
        let min = Infinity;
        for (let i=0; i<args.length; i++){
            if (args[i]<min){
                min=args[i];
            }
        }
        return min;
    } else {
        return int;
    }
}

