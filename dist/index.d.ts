export declare class TimeSpan {
    readonly totalMilliseconds: number;
    readonly totalSeconds: number;
    readonly totalMinutes: number;
    readonly totalHours: number;
    readonly totalDays: number;
    readonly days: number;
    readonly hours: number;
    readonly minutes: number;
    readonly seconds: number;
    readonly milliseconds: number;
    /**
     * @param {number} milliseconds
     * @throws {TypeError}
     * @throws {RangeError}
     */
    constructor(milliseconds: number);
    equals(timespan: TimeSpan): boolean;
    add(timespan: TimeSpan): TimeSpan;
    subtract(timespan: TimeSpan): TimeSpan;
    multiply(value: number): TimeSpan;
    divide(value: number | TimeSpan): number | TimeSpan;
    /**
     * @param {boolean} [precise=false] - Whether or not to include the millisecond component.
     */
    toString(precise?: boolean): string;
    /**
     * @returns {number} The primitive value in milliseconds.
     */
    valueOf(): number;
    static get MAX_VALUE(): TimeSpan;
    static get MIN_VALUE(): TimeSpan;
    static get MILLISECONDS_PER_SECOND(): number;
    static get MILLISECONDS_PER_MINUTE(): number;
    static get MILLISECONDS_PER_HOUR(): number;
    static get MILLISECONDS_PER_DAY(): number;
    static fromMilliseconds(milliseconds: number): TimeSpan;
    static fromSeconds(seconds: number): TimeSpan;
    static fromMinutes(minutes: number): TimeSpan;
    static fromHours(hours: number): TimeSpan;
    static fromDays(days: number): TimeSpan;
    /**
     * @example
     * const ts1 = TimeSpan.parse("2.04:10:05.006");
     * const ts2 = TimeSpan.parse("2 days 4 hrs 10 mins 5.006 secs".split(" "));
     * const ts3 = TimeSpan.parse([2, 4, 10, 5, 6]);
     */
    static parse(value: string | Array<string | number>): TimeSpan;
    /**
     * Returns `null` if argument cannot be parsed into TimeSpan.
     * @returns {TimeSpan} ?TimeSpan
     * @example
     * const ts1 = TimeSpan.tryParse("2.04:10:05.006");
     * const ts2 = TimeSpan.tryParse("2 days 4 hrs 10 mins 5.006 secs".split(" "));
     * const ts3 = TimeSpan.tryParse([2, 4, 10, 5, 6]);
     */
    static tryParse(value: string | Array<string | number>): TimeSpan | null;
}
