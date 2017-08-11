import utilities.FileManager;


class BoardGameTester {
    static int stop = 1;

    public static void main(String args[]) {
        int turn = 0;
        Board ticTacToe = new Board(3, 3);
        Board connectFour = new Board(6, 7);
        Board mastermind = new Board(5, 8);

       ticTacToe.setCell(Mark.RED, 0 , 0);
       connectFour.setCell(Mark.BLUE, 0 , 1);
       mastermind.setCell(Mark.ORANGE, 0 , 1);

       System.out.println("TIC, TA, TOE");
        System.out.println(ticTacToe.toString());

       System.out.println("CONNECT FOUR");
        System.out.println(connectFour.toString());
        
       System.out.println("MASTERMIND");
         System.out.println(mastermind.toString());

       FileManager.writeToFileAsync(ticTacToe.toString(),
        "ttt.txt" );
        FileManager.writeToFileAsync(connectFour.toString(
        ), "c4.txt" );
        FileManager.writeToFileAsync(mastermind.toString()
        , "mm.txt" );
    }
       
}