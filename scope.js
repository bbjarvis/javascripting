const a = 1; const b = 2; const c = 3;
(function firstFunction (){
    const b = 5; const c = 6;

    (function secondFunction (){
        const b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`); //output should be a: 1, b: 8, c: 6
        
        (function thirdFunction (){
            const a = 7; const c = 9;

            (function fourthFuntion (){
                const a = 1; const c = 8
            })()
        })()
    })()
})()
//console.log('a: ${}, b: ${b}, c: {c}') //output should be a: 1, b: 8, c: 6
