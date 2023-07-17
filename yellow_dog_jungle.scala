object ThePowerOfPlay {
  def main(args: Array[String]): Unit = {

    // Initial setup
    val gameBoard = Array.ofDim[String](3, 3)

    for {
      row <- 0 to 2
      col <- 0 to 2
    } {
      gameBoard(row)(col) = "-"
    }

    // Printing game board
    def printGameBoard(): Unit = {
      for {
        row <- gameBoard
      } {
        for {
          col <- row
        } println(col)
      }
    }

    // Game logic
    def updateGameBoard(position: Int, player: String): Boolean = {
      val row = (position - 1) / 3
      val col = (position - 1) % 3
      if (gameBoard(row)(col) == "-") {
        gameBoard(row)(col) = player
        true
      } else false
    }

    def checkRow(): String = {
      var rowWinner = ""
      for {
        rowIndex <- 0 to 2
        if rowWinner == "" 
      } {
        rowWinner = checkRowCol(0, rowIndex, 1, 0) 
      }
      rowWinner
    }

    def checkCol(): String = {
      var colWinner = ""
      for {
        colIndex <- 0 to 2
        if colWinner == "" 
      } {
        colWinner = checkRowCol(colIndex, 0, 0, 1) // checkCol
      }
      colWinner
    }

    def checkDiag(): String = {
      var diagWinner = ""
      if (diagWinner == "") diagWinner = checkRowCol(0, 0, 1, 1) 
      if (diagWinner == "") diagWinner = checkRowCol(2, 0, -1, 1)
      diagWinner
    }

    def checkRowCol(startRow: Int, startCol: Int, rowStep: Int, colStep: Int): String = {
      var player = gameBoard(startRow)(startCol)
      var count = 0
      var rowIndex = startRow
      var colIndex = startCol

      while (player != "-" && count < 3) {
        count += 1
        rowIndex += rowStep
        colIndex += colStep

        if (rowIndex >= 0 && rowIndex <= 2 && colIndex >= 0 && colIndex <= 2) {
          if (player != gameBoard(rowIndex)(colIndex)) player = "-"
        } else player = "-"
      }

      if (count == 3) player else "-"
    }

    def checkWinner(): String = {
      var winner: String = checkRow()
      if (winner == "-") winner = checkCol()
      if (winner == "-") winner = checkDiag()
      winner
    }

    def isDraw(): Boolean = {
      !gameBoard.flatten.contains("-")
    }

    def playGame(): Unit = {
      var player: String = "X"
      var position: Int = 0
      var winner: String = "-"
      var draw: Boolean = false

      while (winner == "-" && !draw) {
        println(s"It's $player's turn")
        printGameBoard()
        println("Please enter position to play (1-9)")

        do {
          try {
            position = scala.io.StdIn.readLine().toInt
            if (position < 1 || position > 9) {
              println("Please enter a valid position (1-9)")
            }
          } catch {
            case _: Exception => println("Please enter a valid position (1-9)")
          }
        } while (position < 1 || position > 9)

        val updatedBoard = updateGameBoard(position, player)
        if (updatedBoard) {
          winner = checkWinner()
          draw = isDraw()
          player = if (player == "X") "O" else "X"
        }
      }

      if (winner != "-") println(s"And the winner is $winner!")
      if (draw) println("It's a draw")
    }

    playGame()
  }
}