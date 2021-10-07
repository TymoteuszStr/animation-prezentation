colorQuess = "#445544"
colorAnswer = "#557766"

function getRGB(colorHex) {
    const r = Number(colorHex[1])*16+Number(colorHex[2])
    const g = Number(colorHex[3])*16+Number(colorHex[4])
    const b = Number(colorHex[5])*16+Number(colorHex[6])
    return {r,g,b}
}

function calculateDiff(colorQuess, colorAnswer) {
    const rgbQuess = getRGB(colorQuess)
    const rgbAnswer = getRGB(colorAnswer)
    const diffR = Math.abs(rgbQuess.r - rgbAnswer.r)
    const diffB = Math.abs(rgbQuess.b - rgbAnswer.b)
    const diffG = Math.abs(rgbQuess.g - rgbAnswer.g)
    return diffR+diffG+diffB

}

console.log(calculateDiff(colorQuess, colorAnswer) );