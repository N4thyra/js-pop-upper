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

# Copyright

MIT © [Jiri Laza](https://github.com/N4thyra)