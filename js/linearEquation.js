function linearEquation(a, b) {
    if (a === 0) {
        if (b === 0) {
            return 'Phương trình vô số nghiệm.';
        } else {
            return 'Phương trình vô nghiệm.';
        }
    } else {
        let x = -b / a;
        return 'Phương trình có nghiệm x = ' + x;
    }
}
module.exports = linearEquation;