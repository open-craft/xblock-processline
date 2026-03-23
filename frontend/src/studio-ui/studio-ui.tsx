import * as React from 'react';
import EditingPage from './editing-page';


interface StudioUiProps {
    studioSaveUrl: string
    runtime: XBlockRuntime
}

export default function StudioUi({
    studioSaveUrl, runtime,
}: StudioUiProps) {

    const handleSave = () => {
        runtime.notify('save', { state: 'start' });
        $.post(studioSaveUrl, JSON.stringify({}))
            .done(() => {
                runtime.notify('save', { state: 'end' });
            })
            .fail(() => {
                runtime.notify('error', { title: 'Save Error', message: 'Failed to save accordion configuration' });
            });
    };

    return (
        <div className="xblock-processline">
        </div>
    );
}
