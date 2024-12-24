//For Day 10 shenanigans

let magicNumberState = $state(false);

export const getMagicNumberState = () => magicNumberState;

export const prepareMagicNumber = async () => {
	console.log('[Day 10] Preparing Magic Number Creator...');
	await new Promise((resolve) => setTimeout(resolve, 2000));
	magicNumberState = true;
	console.log('[Day 10] Finished creating Magic Number Creator...');
};
