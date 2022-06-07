// code your solution here
function saturdayFun (activity= "roller-skate"){
    return  `This Saturday, I want to ${activity}!`;
}
const mondayWork= function(activity="go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork ("work from home")

function wrapAdjective(result='*'){
    return function inner(adjective="special"){
        return `You are ${result}${adjective}${result}!`;
    }
}
wrapAdjective('||')("a dedicated programmer");