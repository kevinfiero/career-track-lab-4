const Stack = require('./stack');

const logic = function(arrayOfBrackets) {

    const stack = new Stack();
    const len = arrayOfBrackets.length;

    for (let i = 0; i<len; i++){
        if(checkIfLeftBracket(arrayOfBrackets[i])){
            stack.push(arrayOfBrackets[i]);
        } else {
            const correspondingBracket = getCorrespondingBracket(arrayOfBrackets[i]);
            const bracketOnTopStack = stack.peek();
            stack.pop();
            if(bracketOnTopStack === undefined){
                return {"error": `missing ${correspondingBracket}`};
            }
            if(bracketOnTopStack !== correspondingBracket){
                return {"error": `missing ${getCorrespondingBracket(bracketOnTopStack)}`};
            }
        }
            
    }

        if(stack.length() === 0){
            return {"success": true};
        } else {
            bracketOnTopStack = stack.peek()
            return {"error": `missing ${getCorrespondingBracket(bracketOnTopStack)}`};
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

    if(checkIfLeftBracket(element)){
        const indexOfLeftBracketInArray = leftCharacters.indexOf(element);
        return rightCharacters[indexOfLeftBracketInArray];

    } else {
        const indexOfRightBracketInArray = rightCharacters.indexOf(element);
        return leftCharacters[indexOfRightBracketInArray];
    }



}


module.exports = { logic, cleanData };