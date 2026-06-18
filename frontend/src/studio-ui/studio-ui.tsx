import * as React from 'react';
import EditingPage from './editing-page';
import {
  buildDefaultConfiguration,
  ProcessLineConfiguration,
} from '../processline-types';

interface StudioUiProps {
  initialConfiguration: ProcessLineConfiguration;
  studioSaveUrl: string;
  runtime: XBlockRuntime;
}

export default function StudioUi({
  initialConfiguration,
  studioSaveUrl,
  runtime,
}: StudioUiProps) {
  const [configuration, setConfiguration] = React.useState<ProcessLineConfiguration>(initialConfiguration);
  const [isSaving, setIsSaving] = React.useState(false);
  const [saveError, setSaveError] = React.useState('');

  const handleCancel = () => {
    runtime.notify('cancel', {});
  };

  const handleSave = (nextConfiguration: ProcessLineConfiguration) => {
    setIsSaving(true);
    setSaveError('');
    runtime.notify('save', { state: 'start' });
    $.ajax({
      url: studioSaveUrl,
      method: 'POST',
      data: JSON.stringify(nextConfiguration),
      contentType: 'application/json',
    })
      .done((response) => {
        if (response?.result !== 'success') {
          setSaveError(response?.message || 'Failed to save Process Line configuration.');
          runtime.notify('error', {
            title: 'Save Error',
            message: response?.message || 'Failed to save Process Line configuration.',
          });
          setIsSaving(false);
          return;
        }
        setConfiguration(response.configuration || nextConfiguration);
        runtime.notify('save', { state: 'end' });
        setIsSaving(false);
      })
      .fail(() => {
        setSaveError('Failed to save Process Line configuration.');
        runtime.notify('error', {
          title: 'Save Error',
          message: 'Failed to save Process Line configuration.',
        });
        setIsSaving(false);
      });
  };

  return (
    <EditingPage
      initialConfiguration={configuration || buildDefaultConfiguration()}
      isSaving={isSaving}
      saveError={saveError}
      onCancel={handleCancel}
      onSave={handleSave}
    />
  );
}
