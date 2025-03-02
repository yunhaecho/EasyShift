'use client';

import { GetStoresResponse } from '@/api/endpoints/stores/types';
import { createContext } from 'react';

export const StoresPageContext = createContext<GetStoresResponse | null>(null);
