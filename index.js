/* an easier way to iterate through an Array and get elemets out, we can use a 'for-of-loop'to easily get the  a]actual element from the Array

For Loops and Arrays.

extract elements without using index number. For-of-Loop uses the word FOR ad OF inside the parentheses, using theword OF cause the FOR loop to extract the value of th element from the Array each time.

*/


let theSportsIPlay = ["basketball", "football", "tennis", "chess"];

for (let sport of theSportsIPlay) {
  // we call the varible 'sport' we could call it whatever, just like the i, this varible contains the value and not the index number.
  console.log(sport);

}

/*
in our first iteration of the loop: sport = "basketball"
in our second iteration of the loop: sport = "football"
in our third iteration of the loop: sport = "tennis"
in our forth iteration of the loop: sport = "chess"
*/