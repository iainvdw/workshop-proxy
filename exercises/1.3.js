module.exports = (fn) => {
	if (typeof fn !== 'function') {
		throw new Error(`"${fn}" is not a function`);
	}

	const cache = new Map();

	return (...args) => {
		const key = args.join('-');

		if (cache.has(key)) {
			return cache.get(key);
		}

		// eslint-disable-next-line no-undefined, prefer-spread
		const returnValue = fn.apply(undefined, args);

		cache.set(key, returnValue);

		return returnValue;
	};
};
