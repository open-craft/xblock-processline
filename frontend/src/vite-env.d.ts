/// <reference types="vite/client" />
declare let $: JQueryStatic;

type XBlockNotificationAction = 'cancel' | 'error' | 'save';

interface XBlockRuntime {
    handlerUrl: (element: Element | null, action: string) => string
    notify: (action: XBlockNotificationAction, data: object) => void
}

interface XBlockData {
    url?: string
    displayName?: string
    introductionText?: string
    styling?: object
    items?: object[]
}
