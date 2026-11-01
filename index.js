let tictac = document.querySelector("#tictac")
let boxes = document.querySelectorAll(".box")
let h2 = document.getElementById("h2");
let rstbtn = document.getElementById("rstbtn")

let winning_condition = [ //these are winning conditions, we write and storedin the form of array
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]



let current = '❌'
let count = 0
//❌✓

function startgame(e) {

    if (e.target.className === 'box') {             //check and confirm only box is clicked
        if (e.target.innerText === '') {            //check and confirm text is empty, soo it do not overwrite the previous stored value
            e.target.innerText = current            //assign x to target box 
            current = current  ===  '❌' ? '✓' : '❌';//if previous box value is x, next will be convert to 0, so next turn of next player came 
            count++ 
        }
        console.log(count);
          
    }
    
    winner()

}

tictac.addEventListener("click" , (startgame) )

function winner(){
    for (let item of winning_condition) { //by for each loop, we got every winning condition in the form of item that we previously stored in the different arrays

        let index1 = item[0];              //index1 gives value at zero index of every item or each winning condition array
        let index2 = item[1];              //index2 gives value at first index of every item or each winning condition array
        let index3 = item[2]               //index3 gives value at second index of every item or each winning condition array
        

        //now get the text inside 3 specific boxes that form one winning line.

        
        let val1 = boxes[index1].innerText;         // val1 get value of box by index of each winning condition array
        let val2 = boxes[index2].innerText;         // val2 get value of box by index of each winning condition array
        let val3 = boxes[index3].innerText;         // val3 get value of box by index of each winning condition array

        //means, => for first array [1,2,3]

        //let val1 = boxes[1].innerText; value of "top-left-box"
        //let val2 = boxes[2].innerText; value of "top-middle-box"
        //let val3 = boxes[3].innerText; value of "top-right-box"

        //means, => for sixth array [2,5,8]

        //let val1 = boxes[2].innerText; "top-middle-box"
        //let val2 = boxes[5].innerText; "middle-middle-box"
        //let val3 = boxes[8].innerText; "bottom-middle-box"


        //it can be written as
        
        // let val1 = boxes[item[0]].innerText;         
        // let val2 = boxes[item[1]].innerText;     
        // let val3 = boxes[item[2]].innerText;


        if (val1 !=='' && val2 !=='' && val3 !=='') { //checks or confirms if any value of possible winning array is empty, left it because it cannot be winning
            if (val1 === val2 && val2 === val3) {     // checks or confirms three values are matched
                h2.innerText = `winner is ${val1}`;
                tictac.removeEventListener("click" , startgame)
                boxes[item[0]].classList.add("winner")
                boxes[item[1]].classList.add("winner")
                boxes[item[2]].classList.add("winner")
                return;
            }
            
        }
        // console.log(`index0 : ${index0} val0 : ${val0}`);
        // console.log(index0 , val0 , index1, val1, index2, val2);


    }

    if (count === 9 ){
        h2.innerText = 'draw'
    }
}


rstbtn.addEventListener("click" , () => {
    h2.innerText = ''
    count = 0
    tictac.addEventListener("click" , (startgame) )
    boxes.forEach((item) => {
        item.innerText = '';
        item.classList.remove("winner")
        
    })
})
