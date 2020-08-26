//
// Your implementations
// 

const SCOREBOARD = new Map<number, string>([
    [0, "love"],
    [1, "fifteen"],
    [2, "thirty"],
    [3, "forty"]
]);

export function updateGameScore(player1Points: number, player2Points: number) {
    return [player1Points, player2Points];
}

export function decideGameWinner(scores: number[]) {
    if (scores[0] < 3 || scores[1] < 3) {
        return (scores[0] >= (scores[1] + 2)) ? "Player 1" : "Player 2";
    } else {
        return (scores[0] > scores[1]) ? "Player 1" : "Player 2";
    }
}

export function printScore(scores: number[]) {
    if (scores[0] < 3 && scores[1] < 3) {
        return SCOREBOARD.get(scores[0]) + " - " + SCOREBOARD.get(scores[1]);
    } else {
        if (scores[0] == scores[1]) {
            return "deuce";
        } else {
            return (scores[0] > scores[1]) ? "advantage player 1" : "advantage player 2";
        }
    }
}