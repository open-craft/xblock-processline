function ProcesslineEditor(runtime, element, data) {
  if (!data.url) {
    // eslint-disable-next-line no-console
    console.error('Missing studio bundle URL for ProcesslineEditor');
    return;
  }
  const editorRoot = element && element.jquery ? element[0] : element;
  (async () => {
    const { renderEditor } = await import(data.url);
    renderEditor(runtime, editorRoot, data);
  })();
}
