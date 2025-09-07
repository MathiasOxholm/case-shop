import { createSearchParamsCache, parseAsInteger, parseAsString } from 'nuqs/server';

export const searchParams = {
  sortOrder: parseAsString.withDefault('asc'),
  page: parseAsInteger.withDefault(1),
}

export const searchParamsCache = createSearchParamsCache(searchParams);