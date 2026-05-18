class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const itemsSet = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (itemsSet.has(nums[i])) {
                return true;
            } else {
                itemsSet.add(nums[i]);
            }
        }
        return false;
    }
}
