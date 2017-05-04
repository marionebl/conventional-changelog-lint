import ensureMaxLength from '../library/ensure-max-length';

export default (parsed, when, value) => {
	const input = parsed.body;

	if (!input) {
		return [true];
	}

	return [
		ensureMaxLength(input, value),
		`body must not be longer than ${value} characters`
	];
};
