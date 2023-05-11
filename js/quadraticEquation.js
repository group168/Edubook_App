function quadraticEquation(a, b, c) {
    if (a === 0) {
        if (b === 0) {
            if (c === 0) {
                return 'Phương trình có vô số nghiệm.';
            }
            return 'Phương trình vô nghiệm.';
        }
        return `Phương trình có một nghiệm x = ${-c / b}`;
    }
    const delta = b * b - 4 * a * c;
    if (delta > 0) {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return `Phương trình có hai nghiệm phân biệt x1 = ${x1}, x2 = ${x2}`;
    } else if (delta === 0) {
        const x = -b / (2 * a);
        return `Phương trình có nghiệm kép x = ${x}`;
    } else {
        return 'Phương trình vô nghiệm.';
    }
}
module.exports = quadraticEquation;