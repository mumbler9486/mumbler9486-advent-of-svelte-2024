import { SerializableDate } from '$lib/types/serializableDate';

/** @type {import('@sveltejs/kit').Transport} */
export const transport = {
	SerializableDate: {
		encode: (value: unknown) => value instanceof SerializableDate && value.raw,
		decode: (rawDate: string) => new SerializableDate(rawDate)
	}
};
