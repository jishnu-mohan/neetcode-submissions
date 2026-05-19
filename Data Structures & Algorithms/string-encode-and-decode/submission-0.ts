class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encoded = '';
        for(const str of strs) {
            encoded += `${str.length}#${str}` 
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;

        while(i < str.length) {
            let j = i;

            while(str[j] !== '#') {
                j++;
            }

            const strLen = parseInt(str.substring(i,j));
            const word = str.substring(j + 1, j + 1 + strLen);
            result.push(word);

            i = j + 1 + strLen;
        }


        return result;
    }
}
