// Introducing an intentional bug to observe a failed workflow run
function add(a, b) {
    return a - b; // incorrect operator: should be a + b
}

module.exports = { add };
