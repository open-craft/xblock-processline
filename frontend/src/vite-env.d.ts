/// <reference types="vite/client" />
declare let $: JQueryStatic;

type XBlockNotificationAction = 'cancel' | 'error' | 'save';

type XBlockElementLike = Element | { readonly 0: Element; readonly jquery: string };

interface XBlockRuntime {
    handlerUrl: (element: XBlockElementLike | null, action: string) => string
    notify: (action: XBlockNotificationAction, data: object) => void
}

interface XBlockData {
    url?: string
    displayName?: string
    introductionText?: string
    styling?: object
    items?: object[]
}
