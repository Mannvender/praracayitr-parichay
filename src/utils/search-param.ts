export const getSearchParam = (search: string) => {
  const string_parts = search.split("=")
  if (string_parts.length >= 2) return string_parts[1]
  return ''
}
