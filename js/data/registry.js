/**
 * Central data registry — maps level-qualified mode strings to datasets.
 * Mode format: "n2-kanji-meaning", "n1-grammar-meaning", etc.
 */
const DATA_REGISTRY = {
  n1: {
    kanji: {
      data: () => KANJI_N1,
      examples: (key) => KANJI_EXAMPLES_N1[key],
      keyProp: 'kanji'
    },
    grammar: {
      data: () => GRAMMAR_N1,
      examples: (key) => GRAMMAR_EXAMPLES_N1[key],
      keyProp: 'japanese'
    }
  },
  n2: {
    kanji: {
      data: () => KANJI_N2,
      examples: (key) => KANJI_EXAMPLES[key],
      keyProp: 'kanji'
    },
    grammar: {
      data: () => GRAMMAR_N2,
      examples: (key) => GRAMMAR_EXAMPLES[key] || GRAMMAR_EXAMPLES_2[key],
      keyProp: 'japanese'
    }
  },
  n3: {
    kanji: {
      data: () => KANJI_N3,
      examples: (key) => KANJI_EXAMPLES_N3[key],
      keyProp: 'kanji'
    },
    grammar: {
      data: () => GRAMMAR_N3,
      examples: (key) => GRAMMAR_EXAMPLES_N3[key],
      keyProp: 'japanese'
    }
  }
};

/**
 * Parse a mode string like "n2-kanji-meaning" into parts.
 * Returns { level: "n2", type: "kanji", quiz: "meaning" }
 */
function parseMode(mode) {
  const parts = mode.split('-');
  return {
    level: parts[0],        // "n1", "n2", "n3"
    type: parts[1],         // "kanji" or "grammar"
    quiz: parts.slice(2).join('-')  // "meaning" or "reading"
  };
}

/**
 * Get registry entry for a mode string.
 * Returns { data(), examples(), keyProp } or null.
 */
function getRegistryEntry(mode) {
  const { level, type } = parseMode(mode);
  const levelReg = DATA_REGISTRY[level];
  if (!levelReg) return null;
  return levelReg[type] || null;
}

/**
 * Get the progress type key from a mode string.
 * "n2-kanji-meaning" → "n2-kanji"
 */
function getProgressType(mode) {
  const { level, type } = parseMode(mode);
  return `${level}-${type}`;
}
