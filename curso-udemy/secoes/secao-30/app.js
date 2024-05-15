try {
    let num = 1;
    console.log(num.toUpperCase());
} catch(erro) {
    if(erro instanceof TypeError) {
        console.log('TypeError');
    } else if(erro instanceof ReferenceError) {
        console.log('ReferenceError');
    }
}