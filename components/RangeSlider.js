import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

export default function RangeSlider ({sliderMin, sliderMax, isResearch, setIsResearch, setCheckBoxesResearch}) {

    const renewValues = value => {

        document.querySelector('.aside-slider-from').value = 'от ' + value[0] + ' ₽'
        document.querySelector('.aside-slider-to').value = 'до ' + value[1] + ' ₽'
    
        setIsResearch(true)
    }
    
    const startReDraw = () => {
    
        if (event.target.classList.contains('aside-food-target')) {
    
            event.target.parentElement.classList.contains('active') ?
                event.target.parentElement.classList.remove('active') :
                event.target.parentElement.classList.add('active')
        }
    
        if (event.target.classList.contains('aside-block-clickarea')) {
    
            let isThisActive = event.target.parentElement.classList.contains('active')
    
            document.querySelectorAll('.aside-block-clickarea').forEach(el => {
                el.parentElement.classList.remove('active')
            })
    
            isThisActive ? '' : event.target.parentElement.classList.add('active')
        }
    
        if (isResearch == true) return false
        if (sliderMin == 0 && sliderMax == 0) return
    
        setIsResearch(true)
        setCheckBoxesResearch(true)
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