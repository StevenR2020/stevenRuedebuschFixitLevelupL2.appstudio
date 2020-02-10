let selectedMessage = "NE" && temperature < 32
switch (true) {
// The switch is checking if the statements provided by the user are true and if they are, they will display the corresponding message associated with the input.
case userState == "NE" && temperature < 32 :
  NSB.MsgBox(messages[0])
  break;
// The above statement checks to see if the user is from Nebraska and the temperature is less then 32,
// the corresponding message is the 0 element in the messages array.
case userState == "NE" && temperature > 32 && temperature < 50 :
  NSB.MsgBox(messages[1])
  break;
// The above case checks to see if the user is from Nebraska and the temperature is between 32 and 50,
// the corresponding message is the 1 element in the messages array.
case userState == "FL" && temperature > 32 && temperature < 50 :
  NSB.MsgBox(messages[2])
  break;
// The above case checks to see if the user is from Florida and the temperature is between 32 and 50,
// the corresponding message is the 2 element in the messages array.
case userState == "FL" && temperature > 50 && temperature < 70 :
  NSB.MsgBox(messages[3])
  break;
// The above case checks to see if the user is from Florida and the temperature is between 50 and 70,
// the corresponding message is the 3 element in the messages array.
default:
  NSB.MsgBox("You did not provide sufficient information")
  break;
// If the user does not provide efficient information, then the default message will display.
}

