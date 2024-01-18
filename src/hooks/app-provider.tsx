import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const AppProvider: React.FCWC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default AppProvider;
