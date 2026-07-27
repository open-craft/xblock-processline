function ProcesslineEditor(runtime, element, data) {
  if (!data.url) {
    // eslint-disable-next-line no-console
    console.error('Missing studio bundle URL for ProcesslineEditor');
    return;
  }
  (async () => {
    const { renderEditor } = await import(data.url);
    renderEditor(runtime, element, data);
  })();
}
