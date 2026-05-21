class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let result = 0;

        for(const num of numSet) {
            if(!numSet.has(num - 1)) {
                let current = num;
                let length = 1;

                while(numSet.has(current + 1)) {
                    current = current + 1;
                    length ++;
                }
                result = Math.max(result, length);
            }
        }
        return result;
    }
}
