# event-mitter

A tiny (less than 1k) event emitter library.

## Install

### npm

```
npm install event-mitter --save
```

## Usage

```js
var Emitter = require('event-mitter');
var emitter = new Emitter();

emitter.on('some-event', function (arg1, arg2, arg3) {
 //
});

emitter.emit('some-event', 'arg1 value', 'arg2 value', 'arg3 value');
```

Alternatively, you can skip the initialization step by requiring `event-mitter/instance` instead. This pulls in an already initialized emitter.

```js
var emitter = require('event-mitter/instance');

emitter.on('some-event', function (arg1, arg2, arg3) {
 //
});

emitter.emit('some-event', 'arg1 value', 'arg2 value', 'arg3 value');
```

## Instance Methods

### on(event, callback[, context])

Subscribe to an event

* `event` - the name of the event to subscribe to
* `callback` - the function to call when event is emitted
* `context` - (OPTIONAL) - the context to bind the event callback to

### once(event, callback[, context])

Subscribe to an event only **once**

* `event` - the name of the event to subscribe to
* `callback` - the function to call when event is emitted
* `context` - (OPTIONAL) - the context to bind the event callback to

### off(event[, callback])

Unsubscribe from an event or all events. If no callback is provided, it unsubscribes you from all events.

* `event` - the name of the event to unsubscribe from
* `callback` - the function used when binding to the event

### emit(event[, arguments...])

Trigger a named event

* `event` - the event name to emit
* `arguments...` - any number of arguments to pass to the event subscribers

## Test and Build

Build (Tests, Browserifies, and minifies)

```
npm install
npm run build
```

Test

```
npm install
npm test
```

## License

[MIT](https://github.com/qiutian00/event-mitter/blob/master/LICENSE)
