const div = document.querySelector('.fon')
const text = document.querySelector('.msg')
const stylesModes = ['overlay', 'soft-light', 'hard-light', 'darken', 'multiply', 'color-burn', 'lighten', 'screen', 'color-dodge', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity']
const stylesPath = ['circle', 'ellipse']
let lastKeyPressTime = 0;
const doublePressDelay = 300;
let img = 'glaz.jpg'


console.log("если нажать пробел 2 раза то можно сменить картинку")



div.style.background = `url('${img}')`

let getRand = (min,max) => Math.floor(Math.random() * (max - min + 1)) + min

let changeEffecto = () => {
	let colorBack = `rgb(${getRand(0,255)},${getRand(0,255)},${getRand(0,255)})`
	let oneOfModes = getRand(0,14)
	let oneOfPath = getRand(0,1)

	text.remove()
	div.style.backgroundColor = colorBack
	div.style.backgroundBlendMode = stylesModes[oneOfModes]

	if (oneOfPath == 0){div.style.clipPath = stylesPath[oneOfPath] + `(${getRand(0,100)}% at ${event.clientX}px ${event.clientY}px)`}
	if (oneOfPath == 1){div.style.clipPath = stylesPath[oneOfPath] + `(${getRand(0,100)}% ${getRand(0,100)}% at ${event.clientX}px ${event.clientY}px)`}
}

document.addEventListener("keydown", event => {
	if (event.code === "Space") {
		const currentTime = new Date().getTime()
        if (currentTime - lastKeyPressTime <= doublePressDelay) {
			let pic = prompt('Введите ссылку на картинку', 'https://sun9-east.userapi.com/sun9-17/s/v1/ig2/-hRS1sN0I1EyHsEr2eO4I3DahfvmFH0n7ldR9dHmbiOfegCezOrzABOhh5gmEwfYENZCs2FXkr2cI7w3pIq2CcII.jpg?size=736x920&quality=96&type=album');
			div.style.background = `url('${pic}')`;
		}     
		lastKeyPressTime = currentTime;
	}
});
