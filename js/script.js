const logo = document.getElementById("logo");
const headings = document.querySelectorAll("h2");
const colors = ['#fbc531', '#1abc9c', '#00a8ff'];

let i = 0;

const changeColor = () => {
    const color = colors[++i % colors.length]
    logo.style.boxShadow = `5px 5px ${color}`;
    headings.forEach(h => h.style.borderBottom = `5px solid ${color}`);
}

logo.onmousedown = () => logo.style.boxShadow = 'none';
logo.onmouseup = changeColor;