class TimeSpan {
	public readonly totalMilliseconds: number;
	public readonly totalSeconds: number;
	public readonly totalMinutes: number;
	public readonly totalHours: number;
	public readonly totalDays: number;
	public readonly days: number;
	public readonly hours: number;
	public readonly minutes: number;
	public readonly seconds: number;
	public readonly milliseconds: number;

	/**
	 * @param {number} milliseconds
	 * @throws {TypeError}
	 * @throws {RangeError}
	 */
	public constructor(milliseconds: number) {
		if (isNaN(milliseconds))
			throw new TypeError(`Type 'number' expected. Received type '${typeof milliseconds}'`);

		if (milliseconds < Number.MIN_SAFE_INTEGER || milliseconds > Number.MAX_SAFE_INTEGER)
			throw new RangeError("Argument must be within range Number.MIN_SAFE_INTEGER and Number.MAX_SAFE_INTEGER");

		this.totalMilliseconds = Math.round(milliseconds);
		this.totalSeconds = this.totalMilliseconds / TimeSpan.MILLISECONDS_PER_SECOND;
		this.totalMinutes = this.totalMilliseconds / TimeSpan.MILLISECONDS_PER_MINUTE;
		this.totalHours = this.totalMilliseconds / TimeSpan.MILLISECONDS_PER_HOUR;
		this.totalDays = this.totalMilliseconds / TimeSpan.MILLISECONDS_PER_DAY;
		this.days = Math.floor(this.totalDays);
		this.hours = Math.floor(this.totalHours % 24);
		this.minutes = Math.floor(this.totalMinutes % 60);
		this.seconds = Math.floor(this.totalSeconds % 60);
		this.milliseconds = Math.floor(this.totalMilliseconds % 1000);
	}

	public equals(timespan: TimeSpan): boolean {
		return this.totalMilliseconds === timespan.totalMilliseconds;
	}

	public add(timespan: TimeSpan): TimeSpan {
		return new TimeSpan(this.totalMilliseconds + timespan.totalMilliseconds);
	}

	public subtract(timespan: TimeSpan): TimeSpan {
		return new TimeSpan(this.totalMilliseconds - timespan.totalMilliseconds);
	}

	public multiply(value: number): TimeSpan {
		return new TimeSpan(this.totalMilliseconds * value);
	}

	public divide(value: number | TimeSpan): number | TimeSpan {
		if (value instanceof TimeSpan)
			return this.totalMilliseconds / value.totalMilliseconds;

		return new TimeSpan(this.totalMilliseconds / value);
	}

	/**
	 * @param {boolean} [precise=false] - Whether or not to include the millisecond component.
	 */
	public toString(precise: boolean = false): string {
		const hrs = this.hours >= 10 ? this.hours : "0" + this.hours;
		const mins = this.minutes >= 10 ? this.minutes : "0" + this.minutes;
		const secs = this.seconds >= 10 ? this.seconds : "0" + this.seconds;

		let interval = `${hrs}:${mins}:${secs}`;

		if (this.days > 0) interval = `${this.days}.${interval}`;

		if (precise && this.milliseconds > 0) {
			if (this.milliseconds < 10) {
				interval += ".00" + this.milliseconds;
			}
			else if (this.milliseconds < 100) {
				interval += ".0" + this.milliseconds;
			}
			else {
				interval += "." + this.milliseconds;
			}
		}

		return interval;
	}

	/**
	 * @returns {number} The primitive value in milliseconds.
	 */
	public valueOf(): number {
		return this.totalMilliseconds;
	}

	public static get MAX_VALUE(): TimeSpan {
		return new TimeSpan(Number.MAX_SAFE_INTEGER);
	}

	public static get MIN_VALUE(): TimeSpan {
		return new TimeSpan(Number.MIN_SAFE_INTEGER);
	}

	public static get MILLISECONDS_PER_SECOND(): number {
		return 1e3;
	}

	public static get MILLISECONDS_PER_MINUTE(): number {
		return 6e4;
	}

	public static get MILLISECONDS_PER_HOUR(): number {
		return 3.6e6;
	}

	public static get MILLISECONDS_PER_DAY(): number {
		return 8.64e7;
	}

	public static fromMilliseconds(milliseconds: number): TimeSpan {
		return new TimeSpan(milliseconds);
	}

	public static fromSeconds(seconds: number): TimeSpan {
		return new TimeSpan(seconds * TimeSpan.MILLISECONDS_PER_SECOND);
	}

	public static fromMinutes(minutes: number): TimeSpan {
		return new TimeSpan(minutes * TimeSpan.MILLISECONDS_PER_MINUTE);
	}

	public static fromHours(hours: number): TimeSpan {
		return new TimeSpan(hours * TimeSpan.MILLISECONDS_PER_HOUR);
	}

	public static fromDays(days: number): TimeSpan {
		return new TimeSpan(days * TimeSpan.MILLISECONDS_PER_DAY);
	}

	/**
	 * @example
	 * const ts1 = TimeSpan.parse("2.04:10:05.006");
	 * const ts2 = TimeSpan.parse("2 days 4 hrs 10 mins 5.006 secs".split(" "));
	 * const ts3 = TimeSpan.parse([2, 4, 10, 5, 6]);
	 */
	public static parse(value: string | Array<string | number>): TimeSpan {
		let totalMilliseconds = 0;

		if (typeof value === "string") {
			const ts = value.split(":");

			totalMilliseconds += (
				parseInt(ts[1]) * TimeSpan.MILLISECONDS_PER_MINUTE +
				parseFloat(ts[2]) * TimeSpan.MILLISECONDS_PER_SECOND
			);

			if (!ts[0].includes(".")) {
				totalMilliseconds += parseInt(ts[0]) * TimeSpan.MILLISECONDS_PER_HOUR;
			}
			else {
				const [days, hours] = ts[0].split(".");

				totalMilliseconds += (
					parseInt(days) * TimeSpan.MILLISECONDS_PER_DAY +
					parseInt(hours) * TimeSpan.MILLISECONDS_PER_HOUR
				);
			}
		}
		else if (typeof value[0] === "number") {
			if (value.length === 3) {
				totalMilliseconds = (
					(value[0] as number) * TimeSpan.MILLISECONDS_PER_HOUR +
					(value[1] as number) * TimeSpan.MILLISECONDS_PER_MINUTE +
					(value[2] as number) * TimeSpan.MILLISECONDS_PER_SECOND
				);
			}
			else if (value.length === 4) {
				totalMilliseconds = (
					(value[0] as number) * TimeSpan.MILLISECONDS_PER_DAY +
					(value[1] as number) * TimeSpan.MILLISECONDS_PER_HOUR +
					(value[2] as number) * TimeSpan.MILLISECONDS_PER_MINUTE +
					(value[3] as number) * TimeSpan.MILLISECONDS_PER_SECOND
				);
			}
			else if (value.length === 5) {
				totalMilliseconds = (
					(value[0] as number) * TimeSpan.MILLISECONDS_PER_DAY +
					(value[1] as number) * TimeSpan.MILLISECONDS_PER_HOUR +
					(value[2] as number) * TimeSpan.MILLISECONDS_PER_MINUTE +
					(value[3] as number) * TimeSpan.MILLISECONDS_PER_SECOND +
					(value[4] as number)
				);
			}
		}
		else {
			const d = ["day", "days"];
			const h = ["hour", "hours", "hr", "hrs"];
			const m = ["minute", "minutes", "min", "mins"];
			const s = ["second", "seconds", "sec", "secs"];

			for (let i = value.length - 1; i > 0; i--) {
				if (d.includes(value[i] as string)) {
					totalMilliseconds += parseFloat(value[i - 1] as string) * TimeSpan.MILLISECONDS_PER_DAY;
				}
				else if (h.includes(value[i] as string)) {
					totalMilliseconds += parseFloat(value[i - 1] as string) * TimeSpan.MILLISECONDS_PER_HOUR;
				}
				else if (m.includes(value[i] as string)) {
					totalMilliseconds += parseFloat(value[i - 1] as string) * TimeSpan.MILLISECONDS_PER_MINUTE;
				}
				else if (s.includes(value[i] as string)) {
					totalMilliseconds += parseFloat(value[i - 1] as string) * TimeSpan.MILLISECONDS_PER_SECOND;
				}
			}
		}

		return new TimeSpan(totalMilliseconds);
	}

	/**
	 * Returns `null` if argument cannot be parsed into TimeSpan.
	 * @returns {TimeSpan} ?TimeSpan
	 * @example
	 * const ts1 = TimeSpan.tryParse("2.04:10:05.006");
	 * const ts2 = TimeSpan.tryParse("2 days 4 hrs 10 mins 5.006 secs".split(" "));
	 * const ts3 = TimeSpan.tryParse([2, 4, 10, 5, 6]);
	 */
	public static tryParse(value: string | Array<string | number>): TimeSpan | null {
		try { return this.parse(value); }
		catch{ return null; }
	}
}

export default TimeSpan;
export { TimeSpan };