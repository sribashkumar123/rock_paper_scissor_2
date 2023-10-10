const close_btn=document.getElementById("close");
const rules=document.getElementById("all_rules");
const rules_btn=document.getElementById("rules_btn");
const rock_btn=document.getElementsByClassName("rock");
const paper_btn=document.getElementsByClassName("paper");
const sessior_btn=document.getElementsByClassName("sessior");
const user_result_action=document.getElementsByClassName("user_result_action");
const pc_result_action=document.getElementsByClassName("pc_result_action");
const result_action=document.querySelector(".result_action");
const result_winner=document.querySelector(".result_winner");
const result_box=document.querySelector(".result_box");
const playing_area= document.querySelector(".playing_area");
const play_again_btn=document.querySelector(".play_again_btn");
const next_btn=document.getElementById("next_btn");
const user_score=document.getElementById("user_score");
const pc_score=document.getElementById("pc_score");
const userwin_box1=document.getElementById("userwinner_box1");
const userwin_box2=document.getElementById("userwinner_box2");
const pcwin_box1=document.getElementById("pcwinner_box1");
const pcwin_box2=document.getElementById("pcwinner_box2");
const conatinercls=document.querySelector(".container");
const hurraypage=document.querySelector(".hurraypage");
const hurray_rule_btn=document.getElementById("hurray_rule_btn");



next_btn.addEventListener("click",()=>
{
    conatinercls.style.display="none";
    hurraypage.style.display="flex";

})


let game_score = { user: 0, computer: 0};
if (localStorage.getItem("game_score")) {
    game_score = JSON.parse(localStorage.getItem("game_score"));
  }
  
  user_score.innerHTML = game_score.user;
  pc_score.innerHTML = game_score.computer;

  // localStorage.setItem("score", JSON.stringify(score));









let user_click_btn="";
close_btn.addEventListener("click",()=>
{
    rules.style.display="none";
});

rules_btn.addEventListener("click",()=>
{
    rules.style.display="block";
});

rock_btn[0].addEventListener("click",()=>
{
    user_click_btn="rock";
    result_box.style.display="flex";
    playing_area.style.display="none";
    changeimage(user_click_btn);
    changeimage_computer();
    game_deccsion();
});

paper_btn[0].addEventListener("click",()=>
{
    user_click_btn="paper";
    result_box.style.display="flex";
    playing_area.style.display="none";
    changeimage(user_click_btn);
    changeimage_computer();
    game_deccsion();
    
});


sessior_btn[0].addEventListener("click",()=>
{
    user_click_btn="scissor";
    result_box.style.display="flex";
    playing_area.style.display="none";
    changeimage(user_click_btn);
    changeimage_computer();
    game_deccsion();
    
});


const computer = ["rock", "paper", "scissor"];
function computerPicked() {
  let picked = Math.floor(Math.random() * computer.length);
  return computer[picked];
}

function set_images(picked) {
    let img = `<img src="./images/${picked}.png" alt=${picked} width="60px"/>`;
    return img;
  }
  
  function changeimage_computer()
  {
  for (let i = 0; i < pc_result_action.length; i++) {
    pc_result_action[i].innerHTML = set_images(computerPicked());
  }
}

function changeimage(userchoice)
{
  for (let i = 0; i < user_result_action.length; i++) {
    user_result_action[i].innerHTML = set_images(userchoice);
  }
}
function game_deccsion()
{
    console.log(user_click_btn);
    const c_pick=computerPicked();
    console.log(c_pick);
    
    
    if (user_click_btn === c_pick) {
      console.log("Match Tie");
      result_winner.innerHTML="MatcH Tie";
      pcwin_box1.style.background="transparent";
      pcwin_box2.style.background="transparent";
      userwin_box1.style.background="transparent";
        userwin_box2.style.background="transparent";
    } 
    else if (
      (user_click_btn === "rock" && c_pick === "scissor") ||
      (user_click_btn === "paper" && c_pick === "rock") ||
      (user_click_btn === "scissor" && c_pick === "paper")
    ) {
        game_score.user++;
        userwin_box1.style.background="#66b248";
        userwin_box2.style.background="#32a62f";
        pcwin_box1.style.background="transparent";
      pcwin_box2.style.background="transparent";
      
        console.log(game_score.user);
        updatescore();
        localStorage.setItem("game_score", JSON.stringify(game_score));

      console.log("user win");
      next_btn.style.display="block";
      result_winner.innerHTML="YOU WIN AGAINST PC";
      
      play_again_btn.innerHTML="REPLAY";
      
    } else {
        game_score.computer++;
        pcwin_box1.style.background="#66b248";
        pcwin_box2.style.background="#32a62f";
        userwin_box1.style.background="transparent";
        userwin_box2.style.background="transparent";
        localStorage.setItem("game_score", JSON.stringify(game_score));
        updatescore();
        result_winner.innerHTML="YOU LOSE AGAINST PC";
        console.log(game_score.computer);
        
        
        console.log("pc win");
     
    }  

    
}

function updatescore()
{
user_score.innerHTML = game_score.user;
pc_score.innerHTML = game_score.computer;

}

// ////////////////////////////////plya button////////////////////////////////////////////////////


play_again_btn.addEventListener("click",()=>
{
    result_box.style.display="none";
    playing_area.style.display="flex";
    next_btn.style.display="none";
}
);

/////////////////////////////////////////json score///////////////////////////


const hurray_all_rules=document.getElementById("hurray_all_rules");
const hurray_close=document.getElementById("hurray_close");

//////////////////////////////////hurraypage///////////////////////////
hurray_rule_btn.addEventListener("click",()=>
{
  hurray_all_rules.style.display="block";
  console.log("hurray ruke btn");
})

hurray_close.addEventListener("click",()=>
{
  hurray_all_rules.style.display="none";
})



