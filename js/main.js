

//init

document.querySelector('.solutionScreen').innerHTML = ""
document.querySelector('.answerScreen').innerHTML = "0"

let solution = ""
let num = ""
let index = 0;
let pointAllow = 0
let useDivTimes = 0;
let negAllow = 1;

let numbers = []
let arithmetics = "";





let getAnswer = (task) => {

    if(solution == "") {

    }else {
    solution = `${solution}*1`
    solution = solution.replace(/ /g, "")
    solutionCopy = solution.length

    for(let i = 0; i<=solutionCopy; i++) {
        let currentPick = solution.charAt(i)
        if(isNaN(currentPick)) {

            if(currentPick == ".") {
                num = `${num}${currentPick}`
            }else {
                if(num == "") {
                    numbers[index] = currentPick;
                    index += 1
                }else {
                    numbers[index] = num;
                    index += 1
                    num = ""
                    numbers[index] = currentPick;
                    index += 1
                }
            }
            
        }else {
            num = `${num}${currentPick}`
            
            if(i == solutionCopy) {
                numbers[index] = num;
                num = ""

                let al = numbers.length

                for(j=0;j<al;j++) {
                    //check for negatives
                    if(numbers[i] == "m") {
                        numbers[i+1] = `-${numbers[i+1]}`
                        numbers[i] == "solved"
                    }else{}

                    if(j==al-1) {
                        let arr1 = []
                        let c1 = 0

                        for(let n1=0; n1<al; n1++) {
                            if(numbers[n1] != "solved") {
                                arr1[c1] = numbers[n1];
                                c1 += 1
                            }else{}

                            if(n1 == al-1) {
                                for(k=0;k<arr1.length;k++) {
                                    //check for division
                                    if(arr1[k] == "/") {
                                        let firstNum = 0;
                                        let secondNum = parseFloat(arr1[k+1])
                                        
                                        if(arr1[k-1] == "solved") {
                                            firstNum = parseFloat(arr1[k-2])

                                            arr1[k] = firstNum / secondNum;
                                            arr1[k-2] = "solved"
                                            arr1[k+1] = "solved"
                                        }else {
                                            firstNum = parseFloat(arr1[k-1])

                                            arr1[k] = firstNum / secondNum;
                                            arr1[k-1] = "solved"
                                            arr1[k+1] = "solved"
                                        }

                                    }

                                    if(k==arr1.length-1) {
                                        let arr2 = []
                                        let c2 = 0

                                        for(let n2=0; n2<arr1.length; n2++) {
                                            if(arr1[n2] != "solved") {
                                                arr2[c2] = arr1[n2]
                                                c2 += 1
                                            }else{}

                                            if(n2 == arr1.length-1) {
                                                for(p=0;p<arr2.length;p++) {
                                                    //check for multiplication
                                                    if(arr2[p] == "*") {
                                                        let firstNum = 0;
                                                        let secondNum = parseFloat(arr2[p+1])

                                                        if(arr2[p-1] == "solved") {
                                                            firstNum = parseFloat(arr2[p-2])
                
                                                            arr2[p] = firstNum * secondNum;
                                                            arr2[p-2] = "solved"
                                                            arr2[p+1] = "solved"
                                                        }else {
                                                            firstNum = parseFloat(arr2[p-1])
                
                                                            arr2[p] = firstNum * secondNum;
                                                            arr2[p-1] = "solved"
                                                            arr2[p+1] = "solved"
                                                        }
                                                    }


                                                    if(p==arr2.length-1) {
                                                        let arr3 = []
                                                        let c3 = 0

                                                        for(let n3=0; n3<arr2.length; n3++) {
                                                            if(arr2[n3] != "solved") {
                                                                arr3[c3] = arr2[n3]
                                                                c3 += 1
                                                            }else {}


                                                            if(n3 == arr2.length-1) {
                                                                for(q=0;q<arr3.length;q++) {
                                                                    //check for substrations
                                                                    if(arr3[q] == "-") {
                                                                        let firstNum = 0;
                                                                        let secondNum = parseFloat(arr3[q+1])

                                                                        if(arr3[q-1] == "solved") {
                                                                            firstNum = parseFloat(arr3[q-2])

                                                                            arr3[q] = firstNum - secondNum;
                                                                            arr3[q-2] = "solved"
                                                                            arr3[q+1] = "solved"
                                                                        }else {
                                                                            firstNum = parseFloat(arr3[q-1])

                                                                            arr3[q] = firstNum - secondNum;
                                                                            arr3[q-1] = "solved"
                                                                            arr3[q+1] = "solved"
                                                                        }
                                                                    }


                                                                    if(q==arr3.length-1) {
                                                                        let arr4 = []
                                                                        let c4 = 0

                                                                        for(let n4=0; n4<arr3.length; n4++) {
                                                                            if(arr3[n4] != "solved") {
                                                                                arr4[c4] = arr3[n4]
                                                                                c4 += 1
                                                                            }else {}


                                                                            if(n4 == arr3.length-1) {
                                                                                for(g=0;g<arr4.length; g++) {
                                                                                    //check for addition
                                                                                    if(arr4[g] == "+") {
                                                                                        let firstNum = 0;
                                                                                        let secondNum = parseFloat(arr4[g+1])

                                                                                        if(arr4[g-1] == "solved") {
                                                                                            firstNum = parseFloat(arr4[g-2])

                                                                                            arr4[g] = firstNum + secondNum;
                                                                                            arr4[g-2] = "solved"
                                                                                            arr4[g+1] = "solved"
                                                                                        }else {
                                                                                            firstNum = parseFloat(arr4[g-1])

                                                                                            arr4[g] = firstNum + secondNum;
                                                                                            arr4[g-1] = "solved"
                                                                                            arr4[g+1] = "solved"
                                                                                        }
                                                                                    }

                                                                                    if(g==arr4.length-1) {
                                                                                        for(let a=0; a<arr4.length;a++) {
                                                                                            if(arr4[a] != "solved") {
                                                                                                useDivTimes = 1
                                                                                                negAllow = 0
                                                                                                pointAllow = 2
                                                                                                numbers = []

                                                                                                

                                                                                                if(task == "=") {
                                                                                                    solution = arr4[a]
                                                                                                }else if(task == "sin") {
                                                                                                    solution = Math.sin(parseFloat(arr4[a]))
                                                                                                }else if(task == "cos") {
                                                                                                    solution = Math.cos(parseFloat(arr4[a]))
                                                                                                }else if(task == "tan") {
                                                                                                    solution = Math.tan(parseFloat(arr4[a]))
                                                                                                }else if(task == "log") {
                                                                                                    solution = Math.log(parseFloat(arr4[a]))
                                                                                                }else if(task == "exp") {
                                                                                                    solution = Math.exp(parseFloat(arr4[a]))
                                                                                                }else if(task == "sq") {
                                                                                                    solution = parseFloat(arr4[a]) * parseFloat(arr4[a])
                                                                                                }else if(task == "sqrt") {
                                                                                                    solution = Math.sqrt(parseFloat(arr4[a]))
                                                                                                }


                                                                                                document.querySelector('.answerScreen').innerHTML = solution
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }


                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

            }
        }

    }

  }

}




document.addEventListener('click', event => {
    const element = event.target
    if(event.target.classList.contains("show")) {
        const value = element.textContent

        if(value == ".") {
            if(pointAllow == 1) {
                negAllow = 0;
                useDivTimes = 0
                pointAllow = 2
                solution = `${solution}${value}`
                document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")

            }else {
                
            }
        }else if(value == " / " || value == " * " || value == " + " || value == " - ") {
            
            if(useDivTimes == 0) {

            }else {
                negAllow = 1;
                pointAllow = 0
                useDivTimes = 0
                solution = `${solution}${value}`
                document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")
            }
        }else if(value == "(-)") {

            if(negAllow == 1) {
                negAllow = 0;
                useDivTimes = 0;
                pointAllow = 0;

                solution = `${solution}m`
                document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")
            }else{}
            
        }else {

                useDivTimes = 1
                negAllow = 0
                
                if(pointAllow == 1) {
                    pointAllow = 2
                }else {
                    pointAllow = 1
                }
            

                solution = `${solution}${value}`
                document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")
        }

        
    }else if(event.target.classList.contains("solve")) {

        getAnswer(event.target.textContent)

    }
})






document.querySelector('.del').addEventListener('click', () => {
    let len = solution.length

    if(solution.charAt(len-1) == " ") {
        pointAllow = 0
        solution = solution.slice(0, len-3)
        document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")
    }else if(solution.charAt(len-1) == ".") {
        pointAllow = 1
        solution = solution.slice(0, len-1)
        document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")
    }else{
        pointAllow = 0
        solution = solution.slice(0, len-1)
        document.querySelector('.solutionScreen').innerHTML = solution.replace(/m/g, "-")
    }

    
})

document.querySelector('.clr').addEventListener('click', () => {
     solution = ""
     num = ""
     index = 0;
     pointAllow = 0
     useDivTimes = 0;
     negAllow = 1;
    
     numbers = []
    

    document.querySelector('.solutionScreen').innerHTML = ""
    document.querySelector('.answerScreen').innerHTML = "0"
})





