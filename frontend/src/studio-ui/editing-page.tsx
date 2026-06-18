import * as React from 'react';
import {
  clampPosition,
  DEFAULT_ITEM,
  normalizePositions,
  positionToPercent,
  ProcessLineConfiguration,
  ProcessLineItem,
  ProcessLineStyling,
  sortItemsByPosition,
} from '../processline-types';
import StudentUi from '../student-ui/student-ui';

type EditorPage = 'basic' | 'styling' | 'items' | 'placement';

interface EditingPageProps {
  initialConfiguration: ProcessLineConfiguration;
  isSaving: boolean;
  saveError: string;
  onSave: (configuration: ProcessLineConfiguration) => void;
  onCancel: () => void;
}

const getSortedConfiguration = (
  configuration: ProcessLineConfiguration,
): ProcessLineConfiguration => ({
  ...configuration,
  items: sortItemsByPosition(configuration.items),
});

function EditingPage({
  initialConfiguration,
  isSaving,
  saveError,
  onSave,
  onCancel,
}: EditingPageProps) {
  const [page, setPage] = React.useState<EditorPage>('basic');
  const [configuration, setConfiguration] = React.useState<ProcessLineConfiguration>(
    getSortedConfiguration(initialConfiguration),
  );
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const placementTrackRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setConfiguration(getSortedConfiguration(initialConfiguration));
  }, [initialConfiguration]);

  React.useEffect(() => {
    if (selectedItemIndex > configuration.items.length - 1) {
      setSelectedItemIndex(Math.max(configuration.items.length - 1, 0));
    }
  }, [configuration.items.length, selectedItemIndex]);

  const selectedItem = configuration.items[selectedItemIndex];

  const updateConfiguration = (
    updater: (currentConfiguration: ProcessLineConfiguration) => ProcessLineConfiguration,
  ) => {
    setConfiguration((currentConfiguration) => getSortedConfiguration(updater(currentConfiguration)));
  };

  const updateStyling = <K extends keyof ProcessLineStyling>(key: K, value: ProcessLineStyling[K]) => {
    updateConfiguration((currentConfiguration) => ({
      ...currentConfiguration,
      styling: {
        ...currentConfiguration.styling,
        [key]: value,
      },
    }));
  };

  const updateSelectedItem = (updater: (currentItem: ProcessLineItem) => ProcessLineItem) => {
    updateConfiguration((currentConfiguration) => ({
      ...currentConfiguration,
      items: currentConfiguration.items.map((item, index) => (
        index === selectedItemIndex ? updater(item) : item
      )),
    }));
  };

  const addItem = () => {
    updateConfiguration((currentConfiguration) => {
      const nextItems = [...currentConfiguration.items, DEFAULT_ITEM(currentConfiguration.items.length)];
      return {
        ...currentConfiguration,
        items: normalizePositions(nextItems),
      };
    });
    setSelectedItemIndex(configuration.items.length);
  };

  const deleteItem = (indexToDelete: number) => {
    updateConfiguration((currentConfiguration) => {
      const remainingItems = currentConfiguration.items.filter((_, index) => index !== indexToDelete);
      if (!remainingItems.length) {
        return {
          ...currentConfiguration,
          items: [],
        };
      }
      return {
        ...currentConfiguration,
        items: normalizePositions(remainingItems),
      };
    });
  };

  const setItemsEvenly = () => {
    updateConfiguration((currentConfiguration) => ({
      ...currentConfiguration,
      items: normalizePositions(currentConfiguration.items),
    }));
  };

  const moveToPlacement = () => {
    if (configuration.items.length) {
      setPage('placement');
    }
  };

  const handlePlacementDrag = (index: number, event: React.PointerEvent<HTMLButtonElement>) => {
    const track = placementTrackRef.current;
    if (!track) {
      return;
    }
    setSelectedItemIndex(index);
    event.preventDefault();
    const { pointerId } = event;
    const handleMove = (moveEvent: PointerEvent) => {
      const rect = track.getBoundingClientRect();
      const nextPosition = clampPosition((moveEvent.clientX - rect.left) / rect.width);
      updateConfiguration((currentConfiguration) => ({
        ...currentConfiguration,
        items: currentConfiguration.items.map((item, itemIndex) => (
          itemIndex === index
            ? { ...item, position: nextPosition }
            : item
        )),
      }));
    };
    const handlePointerUp = (upEvent: PointerEvent) => {
      if (upEvent.pointerId === pointerId) {
        window.removeEventListener('pointermove', handleMove);
        window.removeEventListener('pointerup', handlePointerUp);
      }
    };

    window.addEventListener('pointermove', handleMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  const pages: Record<EditorPage, React.ReactNode> = {
    basic: (
      <div className="studio-page-content">
        <div className="studio-field-group">
          <label htmlFor="processline-display-name">Display Name</label>
          <input
            id="processline-display-name"
            type="text"
            value={configuration.displayName}
            onChange={(event) => updateConfiguration((currentConfiguration) => ({
              ...currentConfiguration,
              displayName: event.target.value,
            }))}
          />
        </div>
        <div className="studio-field-group">
          <label htmlFor="processline-introduction-text">Introduction Text</label>
          <textarea
            id="processline-introduction-text"
            rows={6}
            value={configuration.introductionText}
            onChange={(event) => updateConfiguration((currentConfiguration) => ({
              ...currentConfiguration,
              introductionText: event.target.value,
            }))}
          />
        </div>
      </div>
    ),
    styling: (
      <div className="studio-page-content styling-page">
        <section className="styling-section">
          <h3>Styling of Line Items</h3>
          <div className="style-grid two-column">
            <div className="studio-field-group">
              <label htmlFor="lineItemTitleColor">Title text color</label>
              <input
                id="lineItemTitleColor"
                type="text"
                value={configuration.styling.lineItemTitleColor}
                onChange={(event) => updateStyling('lineItemTitleColor', event.target.value)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="lineItemTitleFontSize">Title font size</label>
              <input
                id="lineItemTitleFontSize"
                type="number"
                min={1}
                value={configuration.styling.lineItemTitleFontSize}
                onChange={(event) => updateStyling('lineItemTitleFontSize', Number(event.target.value) || 1)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="lineItemLabelColor">Label text color</label>
              <input
                id="lineItemLabelColor"
                type="text"
                value={configuration.styling.lineItemLabelColor}
                onChange={(event) => updateStyling('lineItemLabelColor', event.target.value)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="lineItemLabelFontSize">Label font size</label>
              <input
                id="lineItemLabelFontSize"
                type="number"
                min={1}
                value={configuration.styling.lineItemLabelFontSize}
                onChange={(event) => updateStyling('lineItemLabelFontSize', Number(event.target.value) || 1)}
              />
            </div>
            <div className="studio-field-group single-span">
              <label htmlFor="highlightColor">Highlight color</label>
              <input
                id="highlightColor"
                type="text"
                value={configuration.styling.highlightColor}
                onChange={(event) => updateStyling('highlightColor', event.target.value)}
              />
              <span className="field-hint">Color of the title, dot, and progress pill when selected.</span>
            </div>
          </div>
        </section>
        <section className="styling-section">
          <h3>Styling of Cards</h3>
          <div className="style-grid two-column">
            <div className="studio-field-group single-span">
              <label htmlFor="cardBackgroundColor">Card background color</label>
              <input
                id="cardBackgroundColor"
                type="text"
                value={configuration.styling.cardBackgroundColor}
                onChange={(event) => updateStyling('cardBackgroundColor', event.target.value)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="cardTitleColor">Title text color</label>
              <input
                id="cardTitleColor"
                type="text"
                value={configuration.styling.cardTitleColor}
                onChange={(event) => updateStyling('cardTitleColor', event.target.value)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="cardTitleFontSize">Title font size</label>
              <input
                id="cardTitleFontSize"
                type="number"
                min={1}
                value={configuration.styling.cardTitleFontSize}
                onChange={(event) => updateStyling('cardTitleFontSize', Number(event.target.value) || 1)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="cardDescriptionColor">Description text color</label>
              <input
                id="cardDescriptionColor"
                type="text"
                value={configuration.styling.cardDescriptionColor}
                onChange={(event) => updateStyling('cardDescriptionColor', event.target.value)}
              />
            </div>
            <div className="studio-field-group">
              <label htmlFor="cardDescriptionFontSize">Description font size</label>
              <input
                id="cardDescriptionFontSize"
                type="number"
                min={1}
                value={configuration.styling.cardDescriptionFontSize}
                onChange={(event) => updateStyling('cardDescriptionFontSize', Number(event.target.value) || 1)}
              />
            </div>
          </div>
        </section>
      </div>
    ),
    items: (
      <div className="studio-page-content items-page">
        <aside className="items-sidebar">
          <button className="primary-button add-item-button" type="button" onClick={addItem}>
            + Add line item
          </button>
          <div className="items-list">
            {configuration.items.map((item, index) => (
              <div
                key={`${item.title}-${item.label}-${item.position}`}
                className={`item-row ${index === selectedItemIndex ? 'selected' : ''}`}
              >
                <button
                  type="button"
                  className="item-select-button"
                  onClick={() => setSelectedItemIndex(index)}
                >
                  {item.title || `Item ${index + 1}`}
                </button>
                <button
                  type="button"
                  className="item-delete-button"
                  onClick={() => deleteItem(index)}
                  aria-label={`Delete ${item.title || `Item ${index + 1}`}`}
                >
                  🗑
                </button>
              </div>
            ))}
          </div>
        </aside>
        <div className="item-editor-panel">
          {selectedItem ? (
            <>
              <div className="studio-field-group">
                <label htmlFor="lineItemTitle">Title</label>
                <input
                  id="lineItemTitle"
                  type="text"
                  value={selectedItem.title}
                  onChange={(event) => updateSelectedItem((currentItem) => ({
                    ...currentItem,
                    title: event.target.value,
                  }))}
                />
              </div>
              <div className="studio-field-group">
                <label htmlFor="lineItemLabel">Label</label>
                <input
                  id="lineItemLabel"
                  type="text"
                  value={selectedItem.label}
                  onChange={(event) => updateSelectedItem((currentItem) => ({
                    ...currentItem,
                    label: event.target.value,
                  }))}
                />
              </div>
              <div className="studio-field-group">
                <label htmlFor="lineItemDescription">Description</label>
                <textarea
                  id="lineItemDescription"
                  rows={6}
                  value={selectedItem.description}
                  onChange={(event) => updateSelectedItem((currentItem) => ({
                    ...currentItem,
                    description: event.target.value,
                  }))}
                />
              </div>
              <fieldset className="radio-field-group">
                <legend>Label placement</legend>
                <label htmlFor={`displayAboveLine-${selectedItemIndex}`}>
                  <input
                    id={`displayAboveLine-${selectedItemIndex}`}
                    type="radio"
                    name="labelPlacement"
                    checked={selectedItem.displayAboveLine}
                    onChange={() => updateSelectedItem((currentItem) => ({
                      ...currentItem,
                      displayAboveLine: true,
                    }))}
                  />
                  Display above line
                </label>
                <label htmlFor={`displayBelowLine-${selectedItemIndex}`}>
                  <input
                    id={`displayBelowLine-${selectedItemIndex}`}
                    type="radio"
                    name="labelPlacement"
                    checked={!selectedItem.displayAboveLine}
                    onChange={() => updateSelectedItem((currentItem) => ({
                      ...currentItem,
                      displayAboveLine: false,
                    }))}
                  />
                  Display below line
                </label>
              </fieldset>
            </>
          ) : (
            <div className="empty-editor-state">Add a line item to begin configuring the process line.</div>
          )}
        </div>
      </div>
    ),
    placement: (
      <div className="studio-page-content placement-page">
        <h3>Placement of Line Items</h3>
        <p className="placement-copy">
          Drag items to position them along the line. Use the button below to space them evenly.
        </p>
        <div className="placement-shell">
          <div ref={placementTrackRef} className="placement-track">
            {sortItemsByPosition(configuration.items).map((item, index) => (
              <button
                key={`${item.title}-${item.label}-${item.position}`}
                type="button"
                className={`placement-marker ${item.displayAboveLine ? 'above' : 'below'} ${index === selectedItemIndex ? 'selected' : ''}`}
                style={{ left: `${positionToPercent(item.position)}%` }}
                onPointerDown={(event) => handlePlacementDrag(index, event)}
                onClick={() => setSelectedItemIndex(index)}
                onFocus={() => setSelectedItemIndex(index)}
                aria-label={`Select ${item.title || `Item ${index + 1}`}`}
                aria-pressed={index === selectedItemIndex}
              >
                <span className="placement-node" />
                <span className="placement-label">{item.title || `Item ${index + 1}`}</span>
              </button>
            ))}
          </div>
        </div>
        <section className="student-preview-section" aria-label="Student preview">
          <h4 className="student-preview-title">Student preview</h4>
          <div className="student-preview-shell">
            <StudentUi
              configuration={configuration}
              selectedIndex={selectedItemIndex}
              onSelectedIndexChange={setSelectedItemIndex}
            />
          </div>
        </section>
        <button className="secondary-button evenly-space-button" type="button" onClick={setItemsEvenly}>
          Space items evenly
        </button>
      </div>
    ),
  };

  const nextButton = {
    basic: {
      label: 'Continue',
      onClick: () => setPage('styling' as EditorPage),
    },
    styling: {
      label: 'Continue',
      onClick: () => setPage('items' as EditorPage),
    },
    items: {
      label: 'Continue',
      onClick: moveToPlacement,
    },
    placement: {
      label: 'Save',
      onClick: () => onSave(configuration),
    },
  }[page];

  const handleBack = () => {
    if (page === 'styling') {
      setPage('basic');
    } else if (page === 'items') {
      setPage('styling');
    } else if (page === 'placement') {
      setPage('items');
    }
  };

  return (
    <div className="xblock-processline-editor">
      <div className="editor-shell">
        <h2 className="editor-title">Editing: Process Line</h2>
        {pages[page]}
        {saveError && <div className="save-error" role="alert">{saveError}</div>}
        <div className="editor-actions">
          <button
            className="primary-button"
            type="button"
            onClick={nextButton.onClick}
            disabled={isSaving || (page === 'items' && !configuration.items.length)}
          >
            {isSaving ? 'Saving…' : nextButton.label}
          </button>
          {page !== 'basic' && (
            <button className="secondary-button" type="button" onClick={handleBack} disabled={isSaving}>
              Back
            </button>
          )}
          <button className="link-button" type="button" onClick={onCancel} disabled={isSaving}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditingPage;
