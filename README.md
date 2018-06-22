# Pop-upper

A plain JavaScript plugin for creating fancy looking notification windows. 
No dependencies are needed.
**beta version!**

<img src="https://i.imgur.com/JRUUmTg.png" />

# How to use
**Success notification**
```javascript
new popAppItem({
	heading: 'Success',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'success',
	animationEnd: '',
	position: 'bottom-left'
});

```
**Error notification**
```javascript
new popAppItem({
	heading: 'Error',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'error',
	animationEnd: '',
	position: 'bottom-left'
});

```

**Warning notification**
```javascript
new popAppItem({
	heading: 'Warning',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'warning',
	animationEnd: '',
	position: 'bottom-left'
});

```

**Info notification**
```javascript
new popAppItem({
	heading: 'Info',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'info',
	animationEnd: '',
	position: 'bottom-left'
});

```

# Setting Options
**heading**
<ul>
<li>can be anything e.g. a string</li>
</ul>

**text**
<ul>
<li>can be anything e.g. a string</li>
</ul>

**removeTime**
<ul>
<li>can by any number (time is in ms) e.g. 3000</li>
</ul>

**type**
<ul>
<li>success</li>
<li>error</li>
<li>warning</li>
<li>information</li>
</ul>

**animationStart**
<ul>
<li>fadeOutLeft</li>
<li>fadeOutRight</li>
<li>fadeOutDown</li>
<li>zoomOutDown</li>
<li>zoomOutLeft</li>
<li>zoomOutRight</li>
</ul>

**animationEnd**
<ul>
<li>fadeInUp</li>
</ul>

**position**
<ul>
<li>bottom-left</li>
<li>bottom-right</li>
<li>top-right</li>
<li>top-left</li>
</ul>

# Copyright

MIT © [Jiri Laza](https://github.com/N4thyra)