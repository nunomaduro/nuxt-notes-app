import type { Note } from '~/types'

export function getNotes(): Note[] {
  return [
    { id: 1, title: 'First note', content: 'This is the first note' },
    { id: 2, title: 'Second note', content: 'This is the second note' },
    { id: 3, title: 'Third note', content: 'This is the third note' },
  ]
}