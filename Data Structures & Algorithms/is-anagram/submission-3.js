class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        const freqMapS = new Map();
        const freqMapT = new Map();

        for (const ch of s) {
            freqMapS.set(ch, (freqMapS.get(ch) || 0) + 1);
        }

        for (const ch of t) {
            freqMapT.set(ch, (freqMapT.get(ch) || 0) + 1);
        }

        for (const [key, value] of freqMapS) {
            if (freqMapT.get(key) !== value) {
                return false;
            }
        }
        return true;
    }
}
