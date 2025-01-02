/**
 * Formatte un nombre avec des séparateurs de milliers.
 * @param {number} num - Le nombre à formater.
 * @returns {string} Le nombre formaté.
 */
function formatNumber(num) {
    if (typeof num !== 'number') {
        throw new Error('L\'entrée doit être un nombre.');
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = formatNumber;
