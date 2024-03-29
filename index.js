function saturdayFun(Hobby = "roller-skate") {
    return `This Saturday, I want to ${Hobby}!`;
}

let mondayWork =
function(Work = "go to the office") {
    return `This Monday, I will ${Work}.`;
}

function wrapAdjective(flair = "*") {
    return function(adjective) {
        return `You are ${flair}${adjective}${flair}!`;
}
}
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction()); 
console.log(encouragingPromptFunction("amazing"));