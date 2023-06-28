// Tạo một mảng lưu trữ giá trị của các ô vuông
let gameBoard = ['', '', '', '', '', '', '', '', ''];

// Lấy danh sách các ô vuông
const squares = document.querySelectorAll('.square');

// Gắn sự kiện click cho mỗi ô vuông
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    if (gameBoard[index] === '') {
      square.textContent = 'X';
      gameBoard[index] = 'X';
      // Gọi hàm kiểm tra kết quả sau mỗi lần đánh
      checkResult();
      // Lượt của máy
      computerTurn();
    }
  });
});

// Hàm kiểm tra kết quả
function checkResult() {
  // Kiểm tra các trường hợp thắng
  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winCases.length; i++) {
    const [a, b, c] = winCases[i];
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      alert('Bạn đã thắng!');
      resetGame();
      return;
    }
  }

  // Kiểm tra hòa
  if (!gameBoard.includes('')) {
    alert('Hòa!');
    resetGame();
    return;
  }
}

// Lượt của máy
function computerTurn() {
  const emptySquares = gameBoard.reduce((acc, currentValue, index) => {
    if (currentValue === '') {
      acc.push(index);
    }
    return acc;
  }, []);

  if (emptySquares.length > 0) {
    const randomIndex = Math.floor(Math.random() * emptySquares.length);
    const computerIndex = emptySquares[randomIndex];

    setTimeout(() => {
      squares[computerIndex].textContent = 'O';
      gameBoard[computerIndex] = 'O';
      checkResult();
    }, 500);
  }
}

// Hàm reset game
function resetGame() {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  squares.forEach(square => {
    square.textContent = '';
  });
}