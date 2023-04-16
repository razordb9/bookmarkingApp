import { writable } from "svelte/store";
import type { Bookmark } from "$lib/Interfaces/bookmark";


function createBookmarkStore () {
    const { subscribe, set, update} = writable([]);
    const updateBookmark = (_bookmark:Bookmark) => update((state):any => {
        const currentState:Array<Bookmark> = [...state];
        let newState = currentState.map(bookmark => bookmark.id === _bookmark.id ? _bookmark : bookmark);
        return newState;
    })
    const addBookmark = (_bookmark:Bookmark) => update((state):any => {
        const currentState:Array<Bookmark> = [...state];
        let newState = [...currentState, _bookmark];
        return newState;
    })
    const removeBookmark = (_bookmark:Bookmark) => update((state):any => {
        const currentState:Array<Bookmark> = [...state];
        let newState = currentState.filter(bookmark => bookmark.id !== _bookmark.id);
        return newState;
    })
    return {subscribe, updateBookmark, addBookmark, removeBookmark}
}

export const bookmarks = createBookmarkStore();