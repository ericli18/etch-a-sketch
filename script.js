const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', // or 'monolith', or 'nano'
    default: '#000000',
    swatches: [
        'rgba(244, 67, 54, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            input: true,
            clear: true,
            save: true
        }
    }
});
const slider = document.getElementById("slider");
const sliderText = document.getElementById("slider-result");
const container = document.querySelector(".sketcher");

main();

function main ()
{
    updateDivs(slider.value);
    updateColors();
    slider.oninput = function()
    {
    sliderText.textContent = slider.value;
    updateDivs(slider.value);
    updateColors();
    }
}

function updateColors()
{
    let divs = document.querySelectorAll(".draw");
    divs.forEach(div => {
        div.addEventListener('click', function(e){
            div.style.backgroundColor = "blue";
        })
    })
}

function updateDivs(size)
{
    container.innerHTML = "";
    for(r = 0; r < size; r++)
    {
        for(c = 0; c < size; c++)
        {
            let tempBox = document.createElement('div');
            container.appendChild(tempBox);
            tempBox.classList.add("draw");
            tempBox.style.width = `${500/size}px`;
            tempBox.style.height = `${500/size}px`;
            tempBox.style.flex = "0 0 1";
            tempBox.style.outline = "1px solid black";
        }
    }
}