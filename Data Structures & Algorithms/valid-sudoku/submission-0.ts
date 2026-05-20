class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        const set = new Set<string>();

        for(let i = 0; i < 9; i++) {
            for(let j = 0; j < 9; j++) {
                const num = board[i][j];
                if(num === '.') {
                    continue;
                }

                const rowKey = `r${i}-${num}`;
                const colKey = `c${j}-${num}`;
                const boxRow = Math.floor(i / 3);
                const boxCol = Math.floor(j / 3);
                const boxKey = `b${boxRow}- ${boxCol}-${num}`;

                if(set.has(rowKey) || set.has(colKey) || set.has(boxKey)) {
                    return false;
                } else {
                    set.add(rowKey);
                    set.add(colKey);
                    set.add(boxKey);
                }
            }
        }
        return true;
    }
}
