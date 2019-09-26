var day;
switch (new Date().getDay()) {
    case 0:
       day = "Sunday, therefore I don't have school";
       break;
    case 1:
         day = "Monday, therefore I don't have school";
       break;
    case 2:
         day = "Tuesday, therefore I don't have school";
       break;
    case 3:
         day = "Wednesday, I'm excited to go to school!";
       break;
    case 4:
         day = "Thursday, I'm excited to go to school!";
       break;
    case 5:
         day = "Friday, I'm excited to go to school!";
       break;
    case 6:
         day = "Saturday, therefore I don't have school";
}
document.getElementById("demo").innerHTML = "Today is " + day;
}
