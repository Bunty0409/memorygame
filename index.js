let timer;
      let movesCounter = 0;
      let matchedImages = 0;

     
      const timerSpan = document.getElementById("timer");
      const movesSpan = document.getElementById("moves");

      // Array of images for the game
      const image = [
      {
          Name: "Bike",
          Img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0&q=80",
        },
        {
          Name: "Apple",
          Img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
        },
        {
          Name: "AC",
          Img: "https://imgeng.jagran.com/images/2022/aug/Best%20AC%20In%20India%20Cover%20Image1659937788611.jpg",
        },
        {
          Name: "Books",
          Img: "https://i.pinimg.com/736x/7a/07/5a/7a075ae77e31249f5585f38cbeb77dd0.jpg",
        },
        {
          Name: "Bottol",
          Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHO6XDdKXzBGor4y14ls5Xc56JLHZ4jrEkq0Meb9tkdQ&s",
        },
        {
          Name: "Car",
          Img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
        },
        {
          Name: "Chair",
          Img: "https://www.furniturewallet.com/media/catalog/product/cache/23/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/0/8/08_22.jpg",
        },
        {
          Name: "Cycle",
          Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zesGU7s6TOyxuiCrL3G7EFldDOQKXgqVEvNfU3okXg&s",
        },
        {
          Name: "Bike",
          Img: "https://imgd.aeplcdn.com/370x208/n/cw/ec/124013/hunter-350-right-front-three-quarter.jpeg?isig=0&q=80",
        },
        {
          Name: "Apple",
          Img: "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
        },
        {
          Name: "AC",
          Img: "https://imgeng.jagran.com/images/2022/aug/Best%20AC%20In%20India%20Cover%20Image1659937788611.jpg",
        },
        {
          Name: "Books",
          Img: "https://i.pinimg.com/736x/7a/07/5a/7a075ae77e31249f5585f38cbeb77dd0.jpg",
        },
        {
          Name: "Bottol",
          Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHO6XDdKXzBGor4y14ls5Xc56JLHZ4jrEkq0Meb9tkdQ&s",
        },
        {
          Name: "Car",
          Img: "https://img.freepik.com/free-photo/luxurious-car-parked-highway-with-illuminated-headlight-sunset_181624-60607.jpg",
        },
        {
          Name: "Chair",
          Img: "https://www.furniturewallet.com/media/catalog/product/cache/23/image/1000x1000/9df78eab33525d08d6e5fb8d27136e95/0/8/08_22.jpg",
        },
        {
          Name: "Cycle",
          Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-zesGU7s6TOyxuiCrL3G7EFldDOQKXgqVEvNfU3okXg&s",
        },
      ];

      // Function to start the game
      function startGame() {
        imageShow();
      }

      // Function to update the display of the timer
      function updateTimerDisplay(seconds) {
        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
        timerSpan.innerText = `Time: 00:${displaySeconds}`;
      }

      // Function to start the timer
      function startTimer(seconds) {
        timer = setTimeout(() => {
          updateTimerDisplay(seconds);
          if (seconds > 0) {
            startTimer(seconds - 1);
          } else {
            // Alert when time is up
            alert(`Time's Up! Moves: ${movesCounter}`);
            resetGame();
          }
        }, 1000);
      }

      // Function to update the display of moves
      function updateMovesDisplay() {
        movesSpan.innerText = `Moves: ${movesCounter}`;
      }

      // Function to increment the moves counter
      function incrementMovesCounter() {
        movesCounter++;
        updateMovesDisplay();
      }

      // Array of all boxes on the game board
      let boxes = document.querySelectorAll(".boxes");
      let selectedBoxes = [];

      // Function to show images on the game board
      function imageShow() {
        setTimeout(() => {
          // Hide the images after 2 seconds
          boxes.forEach((box, index) => {
            box.firstChild.style.display = "none";
          });
        }, 2000);

        // Generate random indexes 
        let randomIndex = [];
        while (randomIndex.length < 16) {
          let abc = Math.floor(Math.random() * 16);
          if (!randomIndex.includes(abc)) {
            randomIndex.push(abc);
          }
        }

        // Render images on the boxes
        for (let index = 0; index < boxes.length; index++) {
          randomIndexNo = randomIndex[index];
          const imgee = document.createElement("img");
          imgee.src = image[randomIndexNo].Img;
          imgee.style.width = "100%";
          imgee.style.height = "100%";
          boxes[index].innerHTML = "";
          boxes[index].appendChild(imgee);
        }

        // Start the timer and assign click event to each box
        updateTimerDisplay(30);
        startTimer(30);

        boxes.forEach((box, index) => {
          box.addEventListener("click", () => {
            if (box.firstChild.style.display !== "block") {
              box.firstChild.style.display = "block";
              incrementMovesCounter();
              selectedBoxes.push({
                box: box,
                src: box.firstChild.src,
              });

              if (selectedBoxes.length === 2) {
                if (selectedBoxes[0].src === selectedBoxes[1].src) {
                  // Clear selected boxes after a match images and check for game completion
                  selectedBoxes = [];
                  matchedImages += 2;

                  if (matchedImages === 16) {
                    // Alert when all images are matched
                    alert(`You Win! Moves: ${movesCounter}`);
                    resetGame();
                   
                  }
                } else {
                  // Hide the boxes if not match imagees
                  setTimeout(() => {
                    selectedBoxes.forEach((selected) => {
                      selected.box.firstChild.style.display = "none";
                    });
                    selectedBoxes = [];
                  }, 1000);
                }
              }
            }
          });
        });
      }
      // Function for Reset Game
      function resetGame() {
        clearTimeout(timer);
        updateTimerDisplay(30);
        movesCounter = 0;
        matchedImages = 0;
        updateMovesDisplay();
        setTimeout(() => {
          window.location.reload("Refresh")
        }, 1000);
        
      }

      