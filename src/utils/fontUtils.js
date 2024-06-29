
export const findClosestWeight = (targetWeight, variants, preferItalic) => {
  const weights = variants.map(variant => {
    const italic = variant.includes('italic');
    const weight = parseInt(variant.replace('italic', ''));
    return { weight, italic };
  });

  // Filter variants based on the italic preference
  let filteredWeights = weights.filter(w => w.italic === preferItalic);
  if (filteredWeights.length === 0) {
    // If no variants match the italic preference, use all weights
    filteredWeights = weights;
  }

  // Find the closest weight
  filteredWeights.sort((a, b) => Math.abs(a.weight - targetWeight) - Math.abs(b.weight - targetWeight));
  return filteredWeights[0];
};
