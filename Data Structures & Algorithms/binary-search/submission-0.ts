class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        const ans: number = -1;
        let i = 0;
        let j = nums.length - 1;

        while (i <= j) {
            const mid = i + Math.floor((j - i) / 2);
            if(nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                j = mid - 1;
            } else {
                i = mid + 1;
            }
        }
        return ans;
    }
}
