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

slider.oninput = function()
{
    sliderText.textContent = slider.value;
    updateDivs(slider.value);
}

function updateDivs(size)
{
    for(r = 0; r < size; r++)
    {
        for(c = 0; c < size; c++)
        {
            const tempBox = document.createElement('div');
            container.append(tempBox);
            tempBox.style.width = `${size / 500}px`;
            tempBox.style.height = `${size / 500}px`;
            tempBox.style.flex = "0 0 1";
            tempBox.style.outline = "2px solid red";
        }
    }
}