class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const tMap = new Map<string, number>();

        for(const s of t) {
            tMap.set(s, (tMap.get(s) || 0) + 1);
        }

        const windowMap = new Map<string, number>();

        let formed = 0;
        let tLength = tMap.size;
        let l = 0;
        let start = 0
        let minLength = Infinity;

        for(let r = 0; r < s.length; r++) {
            windowMap.set(s[r], (windowMap.get(s[r]) || 0) + 1);

            if(tMap.has(s[r]) && windowMap.get(s[r]) === tMap.get(s[r])) formed++;

            while(formed === tLength) {
                const windowLength = r - l + 1;
                if(windowLength < minLength) {
                    minLength = windowLength;
                    start = l;
                }

                const leftChar = s[l];

                // remove left character
                windowMap.set(leftChar, windowMap.get(leftChar) - 1);

                if(tMap.has(leftChar) && tMap.get(leftChar) > windowMap.get(leftChar)) {
                    formed--;
                }
                l++;
            }
        }

        const minSubstring = minLength === Infinity ? '' : s.substring(start, start + minLength);
        return minSubstring;
    }
}
