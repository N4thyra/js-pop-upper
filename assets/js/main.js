var popApp = {};
popApp.items = [];
popApp.destruct = function () {
	for (var item of this.items) {
		item.remove();
	}
};

this.popAppItem = function () {
	if (!(this instanceof popAppItem)) {
		return new popAppItem(arguments[0])
	}

	var _ = this;
	var container;

	_.options = {
		heading: 'Success',
		text: 'Here is a random text',
		removeTime: '3000',
		type: 'success',
		position: 'bottom-left',
		animationStart: 'fadeInUp',
		animationEnd: 'fadeOutLeft'
	};

	var re = /(bottom|top)-\w+/i;

	_.options = _.helpers().extendDefaults(_.options, arguments[0], _.helpers().animationList);

	container = _.buildContainer(_.options);

	if (!_.helpers().selectors.popUpWrapper) {
		container.wrapper.appendChild(container.item);
		container.fragment.appendChild(container.wrapper);
		_.helpers().selectors.body.appendChild(container.fragment);
	} else {
		container.fragment.appendChild(container.item);
		_.helpers().selectors.popUpWrapper.appendChild(container.fragment);
	}

	if(_.helpers().selectors.popUpWrapper.className.match(re)[0] !== _.options.position) {
		_.helpers().selectors.popUpWrapper.className = _.helpers().selectors.popUpWrapper.className.replace(re,_.options.position);
	}

	_.helpers().animationProgress(container.loader);
	_.helpers().removeAnimation(container.item, ['animated', 'fadeInUp'], 1000);

	_.item = container.item;
	container.btn.addEventListener('click', function () {
		_.remove();
	});

	popApp.items.push(this);

	if (_.options.removeTime > 0) {
		setTimeout(function () {
			_.remove();
		}, _.options.removeTime);
	}
};

popAppItem.prototype.buildContainer = function (options) {
	var container = {
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


	container.wrapper.setAttribute('class', 'pop-up__wrapper pop-up__wrapper--' + options.position);
	container.item.setAttribute('class', 'pop-up__item pop-up__item--' + options.type + ' animated fadeInUp');
	container.loader.setAttribute('class', 'pop-up__loader');
	container.img.setAttribute('class', 'pop-up__img pop-up__img--info');
	container.content.setAttribute('class', 'pop-up__content');
	container.heading.setAttribute('class', 'pop-up__heading');
	container.text.setAttribute('class', 'pop-up__text');
	container.btn.setAttribute('class', 'pop-up__close');

	container.heading.innerHTML = options.heading;
	container.text.innerHTML = options.text;

	container.item.appendChild(container.loader);
	container.item.appendChild(container.img);
	container.item.appendChild(container.content);
	container.item.appendChild(container.btn);
	container.content.appendChild(container.heading);
	container.content.appendChild(container.text);

	return container;
};

popAppItem.prototype.remove = function () {
	var _ = this;
	_.item.className += ' animated ' + _.options.animationEnd;
	setTimeout(function () {
		_.item.remove();
	}, 1000);
};

popAppItem.prototype.helpers = function () {

	// Helper variables
	var animationList = {
		in: ['fadeInUp'],
		out: ['fadeOutLeft', 'fadeOutRight', 'fadeOutDown', 'zoomOutDown', 'zoomOutLeft', 'zoomOutRight']
	};

	var selectors = {
		body: document.querySelector('body'),
		popUpWrapper: document.querySelector('.pop-up__wrapper')
	};

	// Helper functions
	function animationProgress(el) {
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

	return {
		animationList: animationList,
		selectors: selectors,
		animationProgress: animationProgress,
		removeAnimation: removeAnimation,
		extendDefaults: extendDefaults,
	}
};



new popAppItem({
	heading: 'Error',
	text: 'I don\' know what to put here',
	removeTime: '5000',
	type: 'warning',
	animationStart: '',
	animationEnd: 'fadeOutRight',
	position: 'bottom-right'
});
