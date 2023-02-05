const repeat = (str, times) => {
    let result = '';
    for(let i = 0; i < times; i++){
        result += str;
    }
    return result;
}

const scream = (str) => {
    return str.toUpperCase() + '!!!';
};

const getRantText = (phrase) => {
    let text = scream(phrase);
    let rant = repeat(text, 0);
    return rant;
}

const makerant = (phrase) => {
    const h1 = document.createElement('h1');
    h1.innerText = getRantText(phrase)
    document.body.appendChild(h1);
}

makerant("I hate vadapav")
makerant('if ypu have couf cover your mouth')