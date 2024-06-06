document.querySelectorAll('.color-box').forEach(element => {
    element.addEventListener('click', event => {
        const hexColor = rgbToHex(event.currentTarget.style.backgroundColor);
        navigator.clipboard.writeText(hexColor);

        const tooltip = document.getElementById('tooltip');

        const boundingBox = event.currentTarget.getBoundingClientRect();
        tooltip.style.left = `${boundingBox.left + window.scrollX}px`;
        tooltip.style.top = `${boundingBox.bottom + window.scrollY + 8}px`;
        
        tooltip.style.visibility = 'visible';


        setTimeout(() => {
            tooltip.style.visibility = 'hidden';
        }, 1000);
    });
});

function rgbToHex(rgb) {
    const result = rgb.match(/\d+/g).map(num => parseInt(num).toString(16).padStart(2, '0')).join('');
    return `#${result}`;
}