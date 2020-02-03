import execa from 'execa';
import path from 'path';
import fs from 'fs-extra';

import * as git from './git';

export async function bootstrap(fixture: string, directory?: string) {
	const cwd = await git.bootstrap(fixture, directory);

	if (await fs.pathExists(path.join(cwd, 'package.json'))) {
		await execa('npm', ['install'], {cwd});
	}

	return cwd;
}
