# Pop-upper

A plain JavaScript plugin for creating fancy looking notification windows. 
No dependencies are needed.
** beta version! **

<img src="https://i.imgur.com/JRUUmTg.png" />

# How to use
```javascript
// Success notification
new popAppItem({
	heading: 'Success',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'success',
	animationEnd: '',
	position: 'bottom-left'
});

```

```javascript
// Error notification
new popAppItem({
	heading: 'Error',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'error',
	animationEnd: '',
	position: 'bottom-left'
});

```

```javascript
// Warning notification
new popAppItem({
	heading: 'Warning',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'warning',
	animationEnd: '',
	position: 'bottom-left'
});

```

```javascript
// Info notification
new popAppItem({
	heading: 'Info',
	text: 'You can put some text here.',
	removeTime: '3000',
	type: 'info',
	animationEnd: '',
	position: 'bottom-left'
});

```

# Copyright

MIT © [Jiri Laza](https://github.com/N4thyra)