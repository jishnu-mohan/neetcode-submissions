class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while(left < right) {
            while(left < right && !this.isAlphaNumeric(s[left])) {
                left++;
            }
            while(left < right && !this.isAlphaNumeric(s[right])) {
                right--;
            }
            if(s[left].toLowerCase() === s[right].toLowerCase()) {
                left++;
                right--;
            } else {
                return false;
            }
        }
        return true;
    }

    isAlphaNumeric(char: string): boolean {
        const code = char.charCodeAt(0);

        return ((code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) ||
        (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) || 
        (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)))
    }
}
