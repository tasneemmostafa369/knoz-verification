/**
 * SSP-ID Cipher & Validation Utility
 *
 * Handles validating and decoding the custom cipher format:
 * Dictionary:
 * A -> 0, B -> 1, C -> 2, D -> 3, E -> 4,
 * F -> 5, G -> 6, H -> 7, I -> 8, J -> 9
 *
 * Format:
 * Alternating Alpha + Num pairs (e.g. 10637 -> B1A0G6D3H7)
 */

export const SSP_ALPHA_TO_DIGIT: Record<string, string> = {
  'A': '0',
  'B': '1',
  'C': '2',
  'D': '3',
  'E': '4',
  'F': '5',
  'G': '6',
  'H': '7',
  'I': '8',
  'J': '9'
};

export interface CipherValidationResult {
  isValid: boolean;
  numericId: string | null;
  errorReason?: 'START_WITH_NUM' | 'END_WITH_ALPHA' | 'ALPHA_ALPHA' | 'NUM_NUM' | 'INVALID_CHAR' | 'MISMATCH_PAIR' | 'EMPTY' | 'FORMAT_ERROR';
}

/**
 * Validates and decodes an encoded SSP-ID according to the verification rules:
 * 1. Structural Checks:
 *    - Must start with Alpha, not Num
 *    - Must end with Num, not Alpha
 *    - No consecutive letters (Alpha + Alpha)
 *    - No consecutive numbers (Num + Num)
 *    - Length must be even (pairs of Alpha + Num)
 * 2. Dictionary & Pair Matching:
 *    - Letters must be within dictionary (A-J)
 *    - Each letter must strictly match its corresponding digit
 * 3. Extraction:
 *    - Extracts and returns the numeric SSP-ID
 */
export function validateAndDecodeSspId(input: string | null | undefined): CipherValidationResult {
  if (!input || !input.trim()) {
    return { isValid: false, numericId: null, errorReason: 'EMPTY' };
  }

  const trimmed = input.trim();

  // Rule: Check if input starts with a number
  if (/^\d/.test(trimmed)) {
    return { isValid: false, numericId: null, errorReason: 'START_WITH_NUM' };
  }

  // Rule: Check if input ends with an alphabet character
  if (/[a-zA-Z]$/.test(trimmed)) {
    return { isValid: false, numericId: null, errorReason: 'END_WITH_ALPHA' };
  }

  // Rule: Check if contains consecutive alphabets (Alpha + Alpha)
  if (/[a-zA-Z]{2,}/.test(trimmed)) {
    return { isValid: false, numericId: null, errorReason: 'ALPHA_ALPHA' };
  }

  // Rule: Check if contains consecutive numbers (Num + Num)
  if (/\d{2,}/.test(trimmed)) {
    return { isValid: false, numericId: null, errorReason: 'NUM_NUM' };
  }

  // Length must be even because each pair is 1 Alpha + 1 Num
  if (trimmed.length % 2 !== 0) {
    return { isValid: false, numericId: null, errorReason: 'FORMAT_ERROR' };
  }

  let extractedNumericId = '';

  // Process each 2-character pair (Alpha, Num)
  for (let i = 0; i < trimmed.length; i += 2) {
    const alpha = trimmed[i].toUpperCase();
    const digit = trimmed[i + 1];

    // Check if alpha is within the dictionary (A-J)
    if (!(alpha in SSP_ALPHA_TO_DIGIT)) {
      return { isValid: false, numericId: null, errorReason: 'INVALID_CHAR' };
    }

    // Check if digit is a valid number 0-9
    if (!/^\d$/.test(digit)) {
      return { isValid: false, numericId: null, errorReason: 'FORMAT_ERROR' };
    }

    // Check if the alpha strictly matches the digit according to the dictionary
    if (SSP_ALPHA_TO_DIGIT[alpha] !== digit) {
      return { isValid: false, numericId: null, errorReason: 'MISMATCH_PAIR' };
    }

    extractedNumericId += digit;
  }

  return {
    isValid: true,
    numericId: extractedNumericId
  };
}
