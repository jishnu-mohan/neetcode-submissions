class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];
        nums.sort((a, b) => a - b);

        for(let i = 0; i < nums.length; i++) {
            // skip duplicate for i
            if(i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let j = i + 1;
            let k = nums.length - 1;

            while(j < k) {
                const sum = nums[i] + nums[j] + nums[k];

                if(sum === 0) {
                    result.push([nums[i], nums[j], nums[k]]);

                    // skip duplicate for j
                    while(j < k && nums[j] === nums[j + 1]) {
                        j++;
                    }
                    // skip duplicate for k
                    while(j < k && nums[k] === nums[k - 1]) {
                        k--;
                    }
                    j++;
                    k--;
                }
                else if(sum < 0) {
                    j++;
                }
                else {
                    k--;
                }
            }
        }
        return result;
    }
}
