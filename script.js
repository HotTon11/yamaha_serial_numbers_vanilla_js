
let colorofbox = document.getElementById('userserialentry');

colorofbox.onfocus = function() {
    colorofbox.style.backgroundColor = '#F7f4f3';
}

colorofbox.onblur = function() {
    colorofbox.style.backgroundColor = 'white';
}


function returnText(){
    let input = document.getElementById("userserialentry").value
    
    let firstdigit = input.slice(0,1);
    let seconddigit = input.slice(1,2);
    let thirddigit = input.slice(2,3);
// using "nested if-statements" - if input is less than three characters, do this first if-else block
    if (input.length < 3) {
        if (firstdigit == "H" | firstdigit == "h") {
            document.getElementById("yearmade").innerHTML = "1981";
        } 
        else if(firstdigit == "I" | firstdigit == "i") {
            document.getElementById("yearmade").innerHTML = "1982";
        }
        else if(firstdigit == "J" | firstdigit == "j") {
            document.getElementById("yearmade").innerHTML = "1983";
        }
        else if(firstdigit == "K" | firstdigit == "k") {
            document.getElementById("yearmade").innerHTML = "1984";
        }
        else if(firstdigit == "L" | firstdigit == "l") {
            document.getElementById("yearmade").innerHTML = "1985";
        }
        else if(firstdigit == "M" | firstdigit == "m") {
            document.getElementById("yearmade").innerHTML = "1986";
        }
        else if(firstdigit == "N" | firstdigit == "n") {
            document.getElementById("yearmade").innerHTML = "1987";
        }
        else if(firstdigit == "O" | firstdigit == "o") {
            document.getElementById("yearmade").innerHTML = "1988";
        }
        else if(firstdigit == "P" | firstdigit == "p") {
            document.getElementById("yearmade").innerHTML = "1989";
        }
        else if(firstdigit == "Q" | firstdigit == "q") {
            document.getElementById("yearmade").innerHTML = "1980";
        }
        else {
            document.getElementById("yearmade").innerHTML = "Invalid entry";
        }
// ---------------------------------------------------------------------------month code below
        if (seconddigit == "H" | seconddigit == "h") {
            document.getElementById("monthmade").innerHTML = "January";
        } 
        else if(seconddigit == "I" | seconddigit == "i") {
            document.getElementById("monthmade").innerHTML = "February";
        }
        else if(seconddigit == "J" | seconddigit == "j") {
            document.getElementById("monthmade").innerHTML = "March";
        }
        else if(seconddigit == "K" | seconddigit == "k") {
            document.getElementById("monthmade").innerHTML = "April";
        }
        else if(seconddigit == "L" | seconddigit == "l") {
            document.getElementById("monthmade").innerHTML = "May";
        }
        else if(seconddigit == "M" | seconddigit == "m") {
            document.getElementById("monthmade").innerHTML = "June";
        }
        else if(seconddigit == "N" | seconddigit == "n") {
            document.getElementById("monthmade").innerHTML = "July";
        }
        else if(seconddigit == "O" | seconddigit == "o") {
            document.getElementById("monthmade").innerHTML = "August";
        }
        else if(seconddigit == "P" | seconddigit == "p") {
            document.getElementById("monthmade").innerHTML = "September";
        }
        else if(seconddigit == "X" | seconddigit == "x") {
            document.getElementById("monthmade").innerHTML = "October";
        }
        else if(seconddigit == "Y" | seconddigit == "y") {
            document.getElementById("monthmade").innerHTML = "November";
        }
        else if(seconddigit == "Z" | seconddigit == "z") {
            document.getElementById("monthmade").innerHTML = "December";
        }
        else if(seconddigit == "S" | seconddigit == "s") {
            document.getElementById("monthmade").innerHTML = "Proto-type - no month known?";
        }
        else {
            document.getElementById("monthmade").innerHTML = "Invalid entry";
        }    
    }
    //-----two digit entry ends on line above-------------------------------Now starts the 3-digit if-else statement: -----------
        else {

            if (firstdigit == "P" | firstdigit == "p" && seconddigit == "Q" | seconddigit == "q") {
                document.getElementById("yearmade").innerHTML = "1990";
            } 
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "H" | seconddigit == "h") {
                document.getElementById("yearmade").innerHTML = "1991";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "I" | seconddigit == "i") {
                document.getElementById("yearmade").innerHTML = "1992";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "J" | seconddigit == "j") {
                document.getElementById("yearmade").innerHTML = "1993";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "K" | seconddigit == "k") {
                document.getElementById("yearmade").innerHTML = "1994";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "L" | seconddigit == "l") {
                document.getElementById("yearmade").innerHTML = "1995";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "M" | seconddigit == "m") {
                document.getElementById("yearmade").innerHTML = "1996";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "N" | seconddigit == "n") {
                document.getElementById("yearmade").innerHTML = "1997";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "O" | seconddigit == "o") {
                document.getElementById("yearmade").innerHTML = "1998";
            }
            else if(firstdigit == "P" | firstdigit == "p" && seconddigit == "P" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "1999";
            }

            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "Q" | seconddigit == "q") {
                document.getElementById("yearmade").innerHTML = "2000";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "H" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2001";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "I" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2002";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "J" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2003";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "K" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2004";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "L" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2005";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "M" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2006";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "N" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2007";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "O" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2008";
            }
            else if(firstdigit == "Q" | firstdigit == "q" && seconddigit == "P" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2009";
            }

            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "Q" | seconddigit == "q") {
                document.getElementById("yearmade").innerHTML = "2010";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "H" | seconddigit == "h") {
                document.getElementById("yearmade").innerHTML = "2011";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "I" | seconddigit == "i") {
                document.getElementById("yearmade").innerHTML = "2012";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "J" | seconddigit == "j") {
                document.getElementById("yearmade").innerHTML = "2013";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "K" | seconddigit == "k") {
                document.getElementById("yearmade").innerHTML = "2014";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "L" | seconddigit == "l") {
                document.getElementById("yearmade").innerHTML = "2015";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "M" | seconddigit == "m") {
                document.getElementById("yearmade").innerHTML = "2016";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "N" | seconddigit == "n") {
                document.getElementById("yearmade").innerHTML = "2017";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "O" | seconddigit == "o") {
                document.getElementById("yearmade").innerHTML = "2018";
            }
            else if(firstdigit == "H" | firstdigit == "h" && seconddigit == "P" | seconddigit == "p") {
                document.getElementById("yearmade").innerHTML = "2019";
            }

            else if(firstdigit == "I" | firstdigit == "p" && seconddigit == "Q" | seconddigit == "q") {
                document.getElementById("yearmade").innerHTML = "2020";
            }
            else if(firstdigit == "I" | firstdigit == "p" && seconddigit == "h" | seconddigit == "h") {
                document.getElementById("yearmade").innerHTML = "2021";
            }
            else if(firstdigit == "I" | firstdigit == "p" && seconddigit == "I" | seconddigit == "i") {
                document.getElementById("yearmade").innerHTML = "2022";
            }
            else if(firstdigit == "I" | firstdigit == "p" && seconddigit == "J" | seconddigit == "j") {
                document.getElementById("yearmade").innerHTML = "2023";
            }
            else {
                document.getElementById("yearmade").innerHTML = "Invalid entry";
            }
// ---------------------------------------------------------------------------month code below
            if (thirddigit == "H" | thirddigit == "h") {
                document.getElementById("monthmade").innerHTML = "January";
            } 
            else if(thirddigit == "I" | thirddigit == "i") {
                document.getElementById("monthmade").innerHTML = "February";
            }
            else if(thirddigit == "J" | thirddigit == "j") {
                document.getElementById("monthmade").innerHTML = "March";
            }
            else if(thirddigit == "K" | thirddigit == "k") {
                document.getElementById("monthmade").innerHTML = "April";
            }
            else if(thirddigit == "L" | thirddigit == "l") {
                document.getElementById("monthmade").innerHTML = "May";
            }
            else if(thirddigit == "M" | thirddigit == "m") {
                document.getElementById("monthmade").innerHTML = "June";
            }
            else if(thirddigit == "N" | thirddigit == "n") {
                document.getElementById("monthmade").innerHTML = "July";
            }
            else if(thirddigit == "O" | thirddigit == "o") {
                document.getElementById("monthmade").innerHTML = "August";
            }
            else if(thirddigit == "P" | thirddigit == "p") {
                document.getElementById("monthmade").innerHTML = "September";
            }
            else if(thirddigit == "X" | thirddigit == "x") {
                document.getElementById("monthmade").innerHTML = "October";
            }
            else if(thirddigit == "Y" | thirddigit == "y") {
                document.getElementById("monthmade").innerHTML = "November";
            }
            else if(thirddigit == "Z" | thirddigit == "z") {
                document.getElementById("monthmade").innerHTML = "December";
            }
            else if(thirddigit == "S" | thirddigit == "s") {
                document.getElementById("monthmade").innerHTML = "Proto-type - no month known?";
            }
            else {
                document.getElementById("monthmade").innerHTML = "Invalid entry";
            }    

        }
    }
