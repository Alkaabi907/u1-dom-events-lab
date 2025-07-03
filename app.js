            //-------------------------------- Constants --------------------------------/

            let ans ="";

            let  operator = "";




            const display = document.querySelector(".display");


            //-------------------------------- Variables --------------------------------/
            let number1 = "";

            let number2 = "";


            sw = false;


            //------------------------ Cached Element References ------------------------/


            const calculator =document.querySelector("#calculator")



            //----------------------------- Event Listeners -----------------------------/



            calculator.addEventListener('click', (event) => {


                const pr = event.target.innerText;


            
                if (value >= 0 && value <= 9) {
            
                if (!sw) {
                number1 += pr;
                display.innerText = number1;
                } 
                
                else {
                number2 += pr;
                display.innerText = number2;
                }

            } else if (["+", "-", "*", "/"].includes(pr)) {
                
                operator = pr;
                sw = true;
            } 

            
            
            
            else if (pr === "=") {





                const n1 = Number(number1);
                const n2 = Number(number2);
                if (operator === "+") ans = n1 + n2;
                else if (operator === "-") ans = n1 - n2;
                else if (operator === "*") ans = n1 * n2;
                else if (operator === "/") ans = n1 / n2;


                
                number1 = ans.toString();
                number2 = "";
                operator = "";
                sw = false;
                

                display.innerText = ans;

            }
            
            
            else if (pr === "c" || pr === "C"){


                    number1 ="" ;

                    number2= "";

                    operator = "";


                    sw = false;

                    ans = "";

                    display.innerText = ""; 

                }
                
            });

            //-------------------------------- Functions --------------------------------/