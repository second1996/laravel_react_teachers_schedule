import { createStandaloneToast } from '@chakra-ui/react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ICommonResponse } from './types';

const { toast } = createStandaloneToast();

const tsAxios = axios.create({ baseURL: '/api' });

tsAxios.interceptors.response.use(
  (response: AxiosResponse) => {
    if (
      response.config.method !== 'get' &&
      response.data?.message !== undefined
    ) {
      toast({
        title: 'Success!',
        description: response.data.message,
        status: 'success',
        variant: 'top-accent',
        position: 'top',
        duration: 3500,
        isClosable: true,
      });
    }

    return response;
  },
  (error: AxiosError<ICommonResponse>) => {
    if (error.response?.data?.message !== undefined) {
      toast({
        title: 'Error!',
        description: error.response.data.message,
        status: 'error',
        position: 'top',
        variant: 'top-accent',
        duration: 3500,
        isClosable: true,
      });
    }

    return Promise.reject(error);
  }
);

export default tsAxios;
