class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = new Array(nums.length).fill(1);

        let left = 1;
        for(let i = 0; i < nums.length; i++) {
            result[i] = left;
            left *= nums[i];
        }

        
        let right = 1;
        for(let j = nums.length - 1; j >= 0; j--) {
            result[j] *= right;
            right *= nums[j];
        }

        return result;
    }
}
