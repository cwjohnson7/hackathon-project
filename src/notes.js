// const DEFAULT_STATE = {
//   round1: [{
//     branch1A: ['Tommy','Billy'],
//     branch1B: ['Bob','Andy'],
//     branch1C: ['William','Susan'],
//     branch1D: ['Tina','Faye']
//   }],
//   round2: [{
//     round2A: [],
//     round2B: []
//   }],
//   round3: [],
//   winner: [],
// }


//1. The first line of code selects the ".tournament" element and assigns it to the variable "$tournament" using jQuery.
// 2. The "$bracket" variable is created and assigned a jQuery object that represents an unordered list with two empty list items. This represents the initial state of the tournament bracket.
// 3. The "participants" array is created, which contains the names of all the participants in the tournament.
// 4. The "buildBracket" function is defined, which takes a jQuery element, "p1" and "p2" as parameters. This function is used to build the tournament bracket by appending the "$bracket" to the element passed in as a parameter.
// 5. The "cleanUp" function is defined, which removes empty brackets from the DOM until there are as many spots as participants.
// 6. The "buildBracket" function is called with the "$tournament" element as a parameter, which creates the initial tournament bracket.
// 7. A "level" variable is created and set to 0, and two variables "$brackets" and "$previousBrackets" are created and assigned the value of an empty jQuery object.
// 8. A while loop is used to create 4 levels of tournament brackets. The "$brackets" variable is assigned all the ".bracket" elements, and the "$previousBrackets" variable is used to filter out any brackets that were created in previous levels. The "$brackets" variable is then looped over, and the "buildBracket" function is called on any empty list items within them.
// 9. A while loop is used to call the "cleanUp" function until there are as many spots as participants.
// 10. A jQuery selector is used to find all the empty list items in the ".bracket" elements, and the "html" method is used to add a button with the participant's name to each of them.
// 11. The "changeToButtons" function is defined, which checks if a bracket has two winners, and if so, changes the content of the list items from text to buttons.
// 12. A jQuery event listener is set up to listen for clicks on any button element within the ".tournament" element. When a button is clicked, the "parent" and "parent" methods are used to traverse up the DOM and find the list item containing the button. The text content of the button is then added to a new list item with a class of "winner", and any other buttons within the same level of the bracket are changed to text using the "replaceWith" method. The "changeToButtons" function is then called to check for any brackets with two winners and change their content from text to buttons.