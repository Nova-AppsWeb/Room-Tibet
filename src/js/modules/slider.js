import Swiper from 'swiper'
import { Navigation} from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

var swiper = new Swiper('.mySwiper', {
	modules: [Navigation],
	slidesPerView: 1,
	spaceBetween: 0,
	centeredSlides: false,
	navigation: {
		nextEl: '.button-next',
		prevEl: '.button-prev',
	},
})