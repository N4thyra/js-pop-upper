var popApp = {};
popApp.items = [];


// helpers
function animateProgress(el) {
	setTimeout(function () {
		el.style.width = 100 + '%';
	}, 500);
}

function removeAnimation(el, names, timer) {
	setTimeout(function () {
		for (var i = 0; i < names.length; i++) {
			el.classList.remove(names[i]);
		}
	}, timer)
}

function extendDefaults(source, properties, animationList) {
	var property;

	for (property in source) {
		if (properties.hasOwnProperty(property)) {
			if (property === 'animationStart' || property === 'animationEnd') {
				source[property] = isAnimationAllowed(property === 'animationStart' ? animationList.in : animationList.out, properties[property]) ? properties[property] : source[property];
			} else {
				source[property] = properties[property];
			}
		}
	}
	return source;
}

function isAnimationAllowed(list, animation) {
	var value;

	for (value of list) {
		if (value === animation) {
			return true;
		}
	}
	return false;
}


this.popAppItem = function () {
	if (!(this instanceof popAppItem)) {
		return new popAppItem(arguments[0])
	}

	this.closeButton = null;
	var _ = this;
	var _defaults = {
		heading: 'Success',
		text: 'Here is a random text',
		removeTime: '3000',
		type: 'success',
		position: 'bottom-left',
		animationStart: 'fadeInUp',
		animationEnd: 'fadeOutLeft'
	};


	var _selectors = {
		body: document.querySelector('body'),
		popUpWrapper: document.querySelector('.pop-up__wrapper')
	};

	var _container = {
		fragment: document.createDocumentFragment(),
		wrapper: document.createElement('div'),
		item: document.createElement('div'),
		loader: document.createElement('div'),
		img: document.createElement('div'),
		content: document.createElement('div'),
		heading: document.createElement('div'),
		text: document.createElement('div'),
		btn: document.createElement('div'),
	};

	var _animationList = {
		in: ['fadeInUp'],
		out: ['fadeOutLeft', 'fadeOutDown', 'zoomOutDown', 'zoomOutLeft']
	};

	_defaults = extendDefaults(_defaults, arguments[0], _animationList);

	_container.wrapper.setAttribute('class', `pop-up__wrapper pop-up__wrapper--${_defaults.position}`);
	_container.item.setAttribute('class', `pop-up__item pop-up__item--${_defaults.type} animated fadeInUp`);
	_container.loader.setAttribute('class', `pop-up__loader`);
	_container.img.setAttribute('class', `pop-up__img pop-up__img--info`);
	_container.content.setAttribute('class', `pop-up__content`);
	_container.heading.setAttribute('class', `pop-up__heading`);
	_container.text.setAttribute('class', `pop-up__text`);
	_container.btn.setAttribute('class', `pop-up__close`);

	_container.heading.innerHTML = _defaults.heading;
	_container.text.innerHTML = _defaults.text;

	_container.item.appendChild(_container.loader);
	_container.item.appendChild(_container.img);
	_container.item.appendChild(_container.content);
	_container.item.appendChild(_container.btn);
	_container.content.appendChild(_container.heading);
	_container.content.appendChild(_container.text);


	if (!_selectors.popUpWrapper) {
		_container.wrapper.appendChild(_container.item);
		_container.fragment.appendChild(_container.wrapper);
		_selectors.body.appendChild(_container.fragment);
	} else {
		_container.fragment.appendChild(_container.item);
		_selectors.popUpWrapper.appendChild(_container.fragment);
	}

	animateProgress(_container.loader);
	removeAnimation(_container.item, ['animated', 'fadeInUp'], 1000);

	_.item = _container.item;
	_.closeButton = _container.btn;
	_.closeButton.addEventListener('click', function () {
		_.close(_defaults);
	});

	popApp.items.push(_container.item);

	setTimeout(function () {
//		_.close(_defaults);
	}, _defaults.removeTime);
};


popAppItem.prototype.close = function (defaults) {
	var _ = this;
	_.item.className += ' animated ' + defaults.animationEnd;
	setTimeout(function () {
		_.item.remove();
	}, 1000);
};

new popAppItem({
	heading: 'Error',
	text: 'I don\' know what to put here',
	removeTime: '3000',
	type: 'error',
	animationEnd: '',
	position: 'bottom-left'
});

