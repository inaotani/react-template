import { fetchKeys } from '@/config/fetch-keys';
import TestService from '@/services';
import { useQuery } from 'react-query';

export const useGetTest = (id: string) => {
	const { data } = useQuery([fetchKeys.test, id], () => TestService.getTest(id));

	return data;
};
