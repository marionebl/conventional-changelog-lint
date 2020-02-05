import {case as ensureCase} from '@commitlint/ensure';
import message from '@commitlint/message';
import {TargetCaseType, Rule} from '@commitlint/types';

export const bodyCase: Rule<TargetCaseType> = (
	parsed,
	when = 'always',
	value = undefined
) => {
	const {body} = parsed;

	if (!body) {
		return [true];
	}

	const negated = when === 'never';

	const result = ensureCase(body, value);
	return [
		negated ? !result : result,
		message([`body must`, negated ? `not` : null, `be ${value}`])
	];
};
