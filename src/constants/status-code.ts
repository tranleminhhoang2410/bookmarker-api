import { ErrorCode } from '../types';

export const RESPONSE_STATUS = {
	OK: 200,
	CREATED: 201,
	ACCEPTED: 202,
	NO_CONTENT: 204,
	INVALID_PARAM: 400,
	NOT_FOUND: 404,
	UNPROCESSABLE_CONTENT: 422,
	INTERNAL_SERVER_ERROR: 500
};

export const ERR_CODES: ErrorCode = {
	BAD_REQUEST: 'BAD_REQUEST',
	NOT_FOUND: 'NOT_FOUND'
};
