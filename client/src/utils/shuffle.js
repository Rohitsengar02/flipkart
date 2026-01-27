export const getShuffleProducts = (products, count = 10) => {
    if (!products || products.length === 0) return [];
    // Create a copy to avoid mutating the original
    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
};
