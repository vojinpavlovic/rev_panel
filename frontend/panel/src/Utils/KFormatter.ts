const KFormatter = (num: number) => {
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"];

    var tier = Math.log10(Math.abs(num)) / 3 | 0;

    if (tier === 0) return num;

    var suffix = SI_SYMBOL[tier];
    var scale = Math.pow(10, tier * 3);

    var scaled = num / scale 

    return scaled.toFixed(1) + suffix
}

export default KFormatter