/* -------------------------------------------------------------------------- */
/*                           Open dropdown on hover                           */
/* -------------------------------------------------------------------------- */
import utils from './utils';

const dropdownOnHover = () => {
	const navbarArea = document.querySelectorAll('[data-bs-toggle="dropdown"]');
	const navbar = document.querySelector('.navbar-freya');
	const breakPoint = utils.getBreakpoint(navbar);

	if (navbarArea) {
		navbarArea.forEach(navbarItem => {
			navbarItem.addEventListener('mouseover', e => {
				const dropdownInstance = new window.bootstrap.Dropdown(e.target, {
					autoClose: 'outside'
				});

				if (e.target.className.includes('dropdown-toggle') && window.innerWidth > breakPoint) {
					/* eslint-disable no-underscore-dangle */
					dropdownInstance._element.classList.add('show');
					dropdownInstance._menu.classList.add('show');
					dropdownInstance._menu.setAttribute('data-bs-popper', 'none');

					e.target.parentNode.addEventListener('mouseleave', () => {
						dropdownInstance.hide();
					});
				}
			});
		});
	}
};

export default dropdownOnHover;
