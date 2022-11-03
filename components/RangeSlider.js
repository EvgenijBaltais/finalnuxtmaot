import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function RangeSlider ({sliderMin, sliderMax, setIsResearch, startReDraw}) {

    const renewValues = value => {

        document.querySelector('.aside-slider-from').value = 'от ' + value[0] + ' ₽'
        document.querySelector('.aside-slider-to').value = 'до ' + value[1] + ' ₽'
    
        setIsResearch(true)
    }

    return (
        <>
            <Slider
                step = {1}
                range
                defaultValue={[sliderMin, sliderMax]}
                min={0}
                max={(sliderMax + 10000)}
                onChange={value => renewValues(value)}
                onAfterChange = {startReDraw}
            />
        </>
    )
}