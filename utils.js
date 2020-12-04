const Stack = require('./stack');

const logic = function(arrayOfBrackets) {

    const stack = new Stack();
    const len = arrayOfBrackets.length;

    for (let i = 0; i<len; i++){
        stack.log();
        if(checkIfLeftBracket(arrayOfBrackets[i])){
            stack.push(arrayOfBrackets[i]);
        } else {
            const correspondingBracket = getCorrespondingBracket(arrayOfBrackets[i]);
            const bracketOnTopStack = stack.peek();
            if(correspondingBracket === bracketOnTopStack){
                stack.pop();
            } else {
                stack.push(arrayOfBrackets[i]);
            }
        }
            
    }

    if(stack.length() === 0){
        return {"success": true};
    } else {
        return {"error": "missing"};
    }

}


const cleanData = function(req) {
    const { code: data } = req.body;
    const dataScrubbed = data.replace(/[^\[\]\{\}\(\)]/g, "");
    return arrayOfBrackets = dataScrubbed.split('');

}

const checkIfLeftBracket = function(element) {
    const leftCharacters = ['{','[','(']
    if(leftCharacters.includes(element)){
        return true;
    } else {
        return false;
    }
}

const getCorrespondingBracket = function(element) {

    const leftCharacters = ['{','[','('];
    const rightCharacters = ['}',']',')'];

    const indexOfRightBracketInArray = rightCharacters.indexOf(element);
    const correspondingLeftBracket = leftCharacters[indexOfRightBracketInArray];

    return correspondingLeftBracket;

}


module.exports = { logic, cleanData };