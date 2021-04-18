import React from 'react';
import {useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import theme from '../../../theme';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

function ScreenWrapper(props: any, C: React.FC) {
  const queryClient = new QueryClient();
  const scheme = useColorScheme();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme(scheme)}>
        <C {...props} mode={scheme} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default ScreenWrapper;
