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
                if (stack.pop() !== bracketPairs[char]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}

// Экспортируем класс для использования в браузере
(window as any).BracketValidator = BracketValidator;

// Тестирование
const validator = new BracketValidator();
const testCases = ["()", "()[]{}", "(]", "([)]", "{[]}", ""];

console.log("Тесты валидатора скобок:");
testCases.forEach(test => {
    console.log(`"${test}" -> ${validator.isValid(test)}`);
});