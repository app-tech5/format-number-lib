/**
 * Formats a number with thousand separators.
 * @param {number} num - The number to format.
 * @returns {string} The formatted number.
 */
function formatNumber(num) {
    if (typeof num !== 'number') {
        throw new Error('L\'entrée doit être un nombre.');
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

module.exports = formatNumber;
