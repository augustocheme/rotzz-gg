import useSWR from 'swr';

export function useFetch(url: string, params?: object) {
  console.log(params);
  const { data, error } = useSWR(url, async url => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  });

  return { data, error };
}
