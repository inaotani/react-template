import { api } from '@/config/api';

export default class TestService {
	static async getTest(id: string) {
		const { data } = await api.get(`/test/${id}`);
		return data;
	}
}
