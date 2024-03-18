function refresh() {
    var n1 = Math.floor(Math.random() * 6) + 1;
    var n2 = Math.floor(Math.random() * 6) + 1;
  
    // Update the src attribute of the dice images to display the corresponding dice face
    document.querySelector(".img1").src = `./images/dice${n1}.png`;
    document.querySelector(".img2").src = `./images/dice${n2}.png`;
  
    // Determine the winner based on the values of n1 and n2
    if (n1 > n2)
      document.querySelector(".Header").innerHTML = "Player 1 Wins";
    else if (n1 < n2)
      document.querySelector(".Header").innerHTML = "Player 2 Wins";
    else
      document.querySelector(".Header").innerHTML = "Draw the match";
  }
  