let magicNumberState = $state(false);

export const getMagicNumberState = () => magicNumberState;

export const prepareMagicNumber = async () => {
	console.log('Preparing Magic Number Creator...');
	await new Promise((resolve) => setTimeout(resolve, 2000));
	magicNumberState = true;
	console.log('Finished creating Magic Number Creator...');
};
