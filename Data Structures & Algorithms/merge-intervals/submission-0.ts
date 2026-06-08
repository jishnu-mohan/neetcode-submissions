class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        intervals.sort((a, b)=> a[0] - b[0]);

        const result: number[][] = [];
        result.push([intervals[0][0], intervals[0][1]]);

        for(let i = 1; i < intervals.length; i++) {
            const current = intervals[i];
            let last = result[result.length - 1];
            if(current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                result.push([current[0], current[1]]);
            }
        }

        return result;
    }
}
