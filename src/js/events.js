export const NEED_RERENDER = 'needRerender'
export const rerenderEvent = new CustomEvent(NEED_RERENDER, { detail: { name: "This is custom event" } });