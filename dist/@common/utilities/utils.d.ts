export declare function generateHash(password: string): string;
export declare function validateHash(password: string | undefined, hash: string | undefined | null): Promise<boolean>;
export declare function getVariableName<TResult>(getVar: () => TResult): string | undefined;
export declare function getString(key: string): string;
export declare function calculateScore(points: number[]): number;
