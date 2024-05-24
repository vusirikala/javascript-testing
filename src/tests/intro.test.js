import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max, factorial } from "../intro";

// describe -- For creating a test suite or a group of related tests
// test -- For creating a testcase

describe('max', () => {
    it('should return the first argument if it is greater than second argument', () => {
        /// AAA paradigm -- Arrange, Act, Assert

        // Arrange: Setup the test environment
        const a = 5;
        const b = 3;
        
        // Act: Perform the actions
        const result = max(a, b);
        
        // Assert: Check the results
        expect(result).toBe(a);
    });

    it('should return the second argument if it is greater than first argument', () => {
        const a = 3;
        const b = 5;
        const result = max(a, b);
        expect(result).toBe(b);
    });

    it('should return the first argument if both arguments are equal', () => {
        const a = 3;
        const b = 3;
        const result = max(a, b);
        expect(result).toBe(a);
    });
})


describe('fizzBuzz', () => {
    it('should return FizzBuzz if the number is divisible by 3 and 5', () => {
        const n = 15;
        const result = fizzBuzz(n);
        expect(result).toBe('FizzBuzz');
    });

    it('should return Fizz if the number is divisible by 3', () => {
        const n = 3;
        const result = fizzBuzz(n);
        expect(result).toBe('Fizz');
    });

    it('should return Buzz if the number is divisible by 5', () => {
        const n = 5;
        const result = fizzBuzz(n);
        expect(result).toBe('Buzz');
    });

    it('should return the number as a string if it is not divisible by 3 or 5', () => {
        const n = 7;
        const result = fizzBuzz(n);
        expect(result).toBe('7');
    });
});

describe('factorial', () => {
    it('should return 1 if the number is 0', () => {
        const n = 0;
        const result = factorial(n);
        expect(result).toBe(1);
    });

    it('should return 1 if the number is 1', () => {
        expect(factorial(1)).toBe(1);
    });

    it('should return 24 if the number is 4', () => {
        expect(factorial(4)).toBe(24);
    });

    it('should return undefined if the number is negative', () => {
        // Same as expect(factorial(-1)).toBeUndefined();
        expect(factorial(-1)).toBe(undefined);
    });

})