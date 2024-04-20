import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApple } from '../../types/IApple';
import { IAppleId } from '../../types/IAppleId';
import { IAppleProducts } from '../../types/IAppleProducts';
import { IBanner } from '../../types/IBanner';
import { IPopular } from '../../types/IPopular';

export const apiProduct = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    endpoints: builder => ({
        getApple: builder.query<IApple[], null>({
            query: () => '/apple'
        }),
        getAplleById: builder.query<IAppleId, number>({
            query: (id) => `/mac/${id}`
        }),
        getAppleProducts: builder.query<IAppleProducts[],string>({
            query: (models) => `/${models}`
        }),
        getBanner: builder.query<IBanner[],null>({
            query: () => '/banner'
        }),
        getPopular: builder.query<IPopular[],null>({
            query: () => '/popular'
        })
    }),
});

export const { useGetAplleByIdQuery, useGetAppleQuery, useGetAppleProductsQuery, useGetBannerQuery, useGetPopularQuery } = apiProduct;
