/*

The parameter weekday is true if it is a weekday, and the parameter vacation is true 
if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return 
true if we sleep in.


sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true

Java:
public boolean sleepIn(boolean weekday, boolean vacation)
*/

export function sleepIn(weekday: boolean, vacation: boolean): boolean {
  return (!weekday && !vacation) || (!weekday && vacation);
}
