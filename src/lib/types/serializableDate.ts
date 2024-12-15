// For Day 12 shenanigans

export class SerializableDate {
	private dateObj: Date;
	private rawDate: string;

	constructor(isoString: string) {
		this.dateObj = new Date(isoString);
		this.rawDate = isoString;
	}

	public get raw() {
		return this.rawDate;
	}

	public get date() {
		return this.dateObj;
	}
}
