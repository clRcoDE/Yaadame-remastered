let a = {
    name: 'reza'
}
let b = {
    name: 'reza'
}

console.log(a===b)

// let theme = {
//     dark:{
//         background:'#333',
//         foreground:'#ff4',
//         fontColor:'#f5f5f5'

//     },
//     light:{
//         background:'#f5f5f5',
//         foreground:'#2060ff',
//         fontColor:'#333'
//     }
// }

// console.log(theme.dark===theme.light)


let theme = {
    dark:{
        background:'#333',
        foreground:'#ff4',
        fontColor:'#f5f5f5'

    },
    light:{
        background:'#f5f5f5',
        foreground:'#2060ff',
        fontColor:'#333'
    }
}

class Theme
{
    constructor(background, foreground, fontColor)
    {
        this.background = background;
        this.foreground = foreground;
        this.fontColor = fontColor
    }
}

let lightTheme = new Theme('#f5f5f5','#2060ff','#2060ff');
let lightTheme2 = new Theme('#f5f5f5','#2060ff','#2060ff');
let darkTheme = new Theme('#333','#ff4','#f5f5f5');

console.log(lightTheme)
console.log(darkTheme)

Theme.prototype.equals = function (other) {
    console.log(this)
    console.log(other)
    return (
        this.background === other.background &&
        this.foreground === other.foreground &&
        this.fontColor === other.fontColor);

}

console.log(lightTheme.equals(lightTheme2))

