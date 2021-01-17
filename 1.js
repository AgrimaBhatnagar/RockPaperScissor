

function rps(yourchoice){
   var humanchoice,botchoice;
   humanchoice=yourchoice.id;
   botchoice= numberTochoice(randombot())
   result=decideWinner(humanchoice,botchoice)
   message=finalMessage(result)
   
   rpsF=rpsFront(humanchoice,botchoice,message);
   console.log(rpsF)

}
function randombot(){
   return(Math.floor(Math.random()*3))
}
function numberTochoice(number){
   return ['rock','paper','scissors'][number]
}
function decideWinner(yourchoice,botchoice){
   let rpsdatabase={
      'rock':{'rock':0.5,'paper':0,'scissors':1},
      'paper':{'scissors':0,'paper':0.5,'rock':1},
      'scissors':{'rock':0,'paper':1,'scissors':0.5}
      

   };
   let yourscore=rpsdatabase[yourchoice][botchoice]
   let botscore=rpsdatabase[botchoice][yourchoice]
   return [yourscore,botscore]
};

function finalMessage ([yourscore,botscore]){
   if (yourscore==0){
      return  {'message':'You Lost','color':'red'}

   }
   else if (yourscore==0.5){
      return {'message':'You Tied', 'color': 'yellow'}

   }
   else{
     return {'message':'You Won', 'color' : 'green'}
   }

};
function rpsFront (humanchoice,botchoice,message){
   let imagedatabase={
      'rock': document.getElementById('rock').src,
      'paper': document.getElementById('paper').src,
      'scissors':document.getElementById('scissors').src
   };
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();
   var humandiv= document.createElement('div')
   var botdiv=document.createElement('div')
   var messagediv=document.createElement('div')
   humandiv.innerHTML="<img src='"+imagedatabase[humanchoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px rgba(37,50,233,1)' >"
   messagediv.innerHTML="<h1 style='color: "+message['color']+" '> "+message['message']+" </h1>"
   botdiv.innerHTML="<img src='"+imagedatabase[botchoice]+"' height=150 width=150 style='box-shadow:0px 10px 50px red' >"

   document.getElementById('rps').appendChild(humandiv)
   document.getElementById('rps').appendChild(messagediv)
   document.getElementById('rps').appendChild(botdiv)
   
};
