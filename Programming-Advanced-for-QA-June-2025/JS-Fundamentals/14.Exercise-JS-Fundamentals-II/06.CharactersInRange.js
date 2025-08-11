function charactersInRange(a, b){
    let start = Math.min(a.charCodeAt(), b.charCodeAt())
    let end = Math.max(a.charCodeAt(), b.charCodeAt())

    let chars = []

    for (let i = start + 1; i < end; i++) {
        chars.push(String.fromCharCode(i))
    }

    console.log(chars.join(' '))
}