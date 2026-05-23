class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        let left = 0;
        let right = height.length - 1;
        let leftMax = height[left];
        let rightMax = height[right];
        let max = 0;

        while (left < right) {
            if(leftMax < rightMax) {
                left++;
                leftMax = Math.max(leftMax, height[left]);
                max += leftMax - height[left];
            } else {
                right--;
                rightMax = Math.max(rightMax, height[right]);
                max += rightMax - height[right];
            }
        }
        return max;
    }
}
