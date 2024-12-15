import { SerializableDate } from '$lib/types/serializableDate';

export function load() {
	return {
		nowUtc: new SerializableDate(new Date().toISOString())
	};
}
