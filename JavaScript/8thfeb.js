let tea = ["green", "black" , "oolong", "white", "herbal" ]

tea.push("Chamomile Tea")
console.log(tea)

// remove
for (let i = 0; i < tea.length; i++) {
   if(tea[i] == "oolong"){
    tea.splice(i,1);
    i--;
   }
}
console.log(tea)