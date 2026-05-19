class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number, number>();

        for(const num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        const bucket: number[][] = new Array(nums.length + 1).fill(null).map(() =>  []);

        for(const[key, feq] of map.entries()) {
            bucket[feq].push(key);
        }

        const result: number[] = [];

        for(let i = bucket.length - 1; i >=0 && result.length < k; i--) {
            for(const num of bucket[i]) {
                result.push(num);
                if(result.length === k) {
                    return result;
                }
            }
        }

        return result;
    }
}
