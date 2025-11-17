class BracketValidator {
    isValid(s: string): boolean {
        const stack: string[] = [];
        const bracketPairs: { [key: string]: string } = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const char of s) {
            if (char === '('  char === '{'  char === '[') {
                stack.push(char);
            } else if (char in bracketPairs) {
                if (stack.pop() !== bracketPairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

const validator = new BracketValidator();

const testCases = [
    "()", "()[]{}", "(]", "([)]", "{[]}", ""
];
class BracketValidator {
    isValid(s: string): boolean {
        const stack: string[] = [];
        const bracketPairs: { [key: string]: string } = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const char of s) {
            if (char === '(' || char === '{' || char === '[') {
                stack.push(char);
            } else if (char in bracketPairs) {
                if (stack.length === 0 || stack.pop() !== bracketPairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

const validator = new BracketValidator();
const testCases = [
    "()", "()[]{}", "(]", "([)]", "{[]}", ""
];

testCases.forEach(test => {
    console.log(`${test} -> ${validator.isValid(test)}`);
});
testCases.forEach(test => {
    console.log("${test}" -> ${validator.isValid(test)});
});