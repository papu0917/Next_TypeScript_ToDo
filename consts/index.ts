export const FILTER = {
  ALL: 'all',
  CHECKED: 'checked',
  UNCHECKED: 'unchecked',
  REMOVED: 'removed'
} as const;

export type Filter = typeof FILTER[keyof typeof FILTER]
