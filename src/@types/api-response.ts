export type ApiResponse<T> = {
	success: boolean;
	message: string;
	httpCode: number;
	errors: string[];
	response: T;
};
