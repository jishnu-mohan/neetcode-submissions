class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string, string[]>();

        for(const str of strs) {
            const count = new Array(26).fill(0);

            for(const ch of str) {
                count[ch.charCodeAt(0) - 97]++; // 'a'.charCodeAt(0) = 97
            }
            
            const key = count.join('#');

            if(!map.has(key)) {
                map.set(key, []);
            }

            map.get(key).push(str);
        }

        return Array.from(map.values());
    }
}
