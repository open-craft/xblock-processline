/// <reference types="vite/client" />
declare let $: JQueryStatic;

interface XBlockRuntime {
    handlerUrl: (element: Element | null, action: string) => string
    notify: (action: string, data: object) => void
}

interface XBlockData { }
