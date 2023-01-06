export function toFixed(value) {
    if (!value) {
        return value;
    }

    const [beforePoint, afterPoint] = value.split('.');

    if (afterPoint) {
        const num = `${ beforePoint }.${ afterPoint.slice(0, 2) }`;

        return parseFloat(num).toString();
    }

    return value;
}
