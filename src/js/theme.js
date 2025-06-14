import { docReady } from './utils';
import detectorInit from './detector';
import tooltipInit from './tooltip';
import popoverInit from './popover';
import toastInit from './toast';
import initMap from './googleMap';
import scrollToTop from './scroll-to-top';
import swiperInit from './swiper';
import dropdownOnHover from './dropdown-on-hover';
import scrollbarInit from './scrollbar';
import dropdownMenuInit from './dropdown-menu';
import lightboxInit from './lightbox';
import bgPlayerInit from './bg-player';
import hamburgerInit from './hamburger';
import zanimationInit from './zanimation';
import inertiaInit from './inertia';
import preloaderInit from './preloader';
import rellaxInit from './rellax';

/* -------------------------------------------------------------------------- */
/*                            Theme Initialization                            */
/* -------------------------------------------------------------------------- */
docReady(detectorInit);

docReady(tooltipInit);
docReady(popoverInit);
docReady(toastInit);
docReady(initMap);

docReady(scrollToTop);

docReady(swiperInit);

docReady(dropdownOnHover);

docReady(scrollbarInit);

docReady(dropdownMenuInit);
docReady(lightboxInit);
docReady(bgPlayerInit);
docReady(hamburgerInit);
docReady(zanimationInit);
docReady(inertiaInit);
docReady(preloaderInit);
docReady(rellaxInit);
