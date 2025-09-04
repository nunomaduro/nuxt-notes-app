import type { Note } from '~/types'

export function getNotesByQuery(query: string): Note[] {
    const notes = getNotes()

    return notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase()) ||
        note.content.toLowerCase().includes(query.toLowerCase())
    )
}

export function getNotes(): Note[] {
  return [
    { id: 1, title: 'First note', content: 'This is the first note' },
    { id: 2, title: 'Second note', content: 'This is the second note' },
    { id: 3, title: 'Third note', content: 'This is the third note' },
    { id: 4, title: 'Fourth note', content: 'This is the fourth note' },
  ]
}

export function getNoteById(id: number): Note | null {
    const notes = getNotes()

    return notes.find((note) => note.id === id) || null;
}
