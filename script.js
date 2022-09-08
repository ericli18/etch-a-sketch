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

slider.oninput = function()
{
    sliderText.textContent = slider.value;
}