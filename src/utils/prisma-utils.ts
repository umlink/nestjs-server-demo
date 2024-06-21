export function pageCursorUtils<T>(q: { take: number; key: string; cursor?: number }): T {
  const params: any = {
    take: q.take,
    skip: q.cursor ? 1 : 0,
  };
  if (q.cursor) {
    params.cursor = {
      [q.key]: q.cursor,
    };
  }
  return params;
}
