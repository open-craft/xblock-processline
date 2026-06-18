function ProcesslineBlock(runtime, element, data) {
  const studentRoot = $(element).find('#xblock-processline-student');
  if (!data.url) {
    // eslint-disable-next-line no-console
    console.error('Missing student bundle URL for ProcesslineBlock');
    return;
  }
  (async () => {
    const { renderBlock } = await import(data.url);
    renderBlock(studentRoot, data);
  })();
}
