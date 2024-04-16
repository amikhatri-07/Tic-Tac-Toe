let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turn0 = true;
let count=0;
const win=[
    [0,1,2],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,8] 
];
boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn0)
        {
            box.innerText="0";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true; 
        }
        box.disabled=true;
        count++;
        let isWinner = checkWinner();
        if (count === 9 && !isWinner){
            msg.innerText = `Game was a Draw.`;
            msgContainer.classList.remove("hide");  
        }

        
        checkWinner();
        
    })
    
})
const checkWinner = () => {
    for (let pattern of win) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
           msg.innerText = `Congratulations, Winner is ${pos1Val}`;
            msgContainer.classList.remove("hide");
            for (box of boxes) {
                box.disabled = true;
              }
         // return true;
        }
      }
    }
  };
reset.addEventListener("click",() => {
    boxes.forEach((box) => {
        box.innerText=null;
        box.disabled=false;
})
})

