function ProcesslineBlock(runtime, element, data) {
  let accordionHtml = $(element).find('#xblock-processline-student');
  (async () => {
    const { renderBlock } = await import(data.url);
    renderBlock(accordionHtml, data);
  })();
}
