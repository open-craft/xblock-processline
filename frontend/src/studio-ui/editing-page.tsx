import * as React from 'react';
import {
  ActionRow,
  Alert,
  Button,
  Card,
  Form,
  Icon,
  IconButton,
  Sticky,
} from '@openedx/paragon';
import { DeleteOutline } from '@openedx/paragon/icons';
import {
  clampPosition,
  DEFAULT_ITEM,
  normalizePositions,
  positionToPercent,
  sortItemsByPosition,
} from '../processline-helpers';
import type {
  ProcessLineConfiguration,
  ProcessLineItem,
  ProcessLineStyling,
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
    if (indexToDelete < selectedItemIndex) {
      setSelectedItemIndex(selectedItemIndex - 1);
    }
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
      <Card className="studio-page-content">
        <Card.Body>
          <div className="form-stack">
            <Form.Group controlId="processline-display-name">
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                value={configuration.displayName}
                onChange={(event) => updateConfiguration((currentConfiguration) => ({
                  ...currentConfiguration,
                  displayName: event.target.value,
                }))}
              />
            </Form.Group>
            <Form.Group className="mb-0" controlId="processline-introduction-text">
              <Form.Label>Introduction Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={6}
                value={configuration.introductionText}
                onChange={(event) => updateConfiguration((currentConfiguration) => ({
                  ...currentConfiguration,
                  introductionText: event.target.value,
                }))}
              />
            </Form.Group>
          </div>
        </Card.Body>
      </Card>
    ),
    styling: (
      <div className="styling-page">
        <Card className="studio-page-content">
          <Card.Body>
            <h3 className="section-title">Styling of Line Items</h3>
            <div className="style-grid two-column">
              <Form.Group controlId="lineItemTitleColor">
                <Form.Label>Title text color</Form.Label>
                <Form.Control
                  type="text"
                  value={configuration.styling.lineItemTitleColor}
                  onChange={(event) => updateStyling('lineItemTitleColor', event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="lineItemTitleFontSize">
                <Form.Label>Title font size</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={configuration.styling.lineItemTitleFontSize}
                  onChange={(event) => updateStyling('lineItemTitleFontSize', Number(event.target.value) || 1)}
                />
              </Form.Group>
              <Form.Group controlId="lineItemLabelColor">
                <Form.Label>Label text color</Form.Label>
                <Form.Control
                  type="text"
                  value={configuration.styling.lineItemLabelColor}
                  onChange={(event) => updateStyling('lineItemLabelColor', event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="lineItemLabelFontSize">
                <Form.Label>Label font size</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={configuration.styling.lineItemLabelFontSize}
                  onChange={(event) => updateStyling('lineItemLabelFontSize', Number(event.target.value) || 1)}
                />
              </Form.Group>
              <Form.Group className="single-span mb-0" controlId="highlightColor">
                <Form.Label>Highlight color</Form.Label>
                <Form.Control
                  type="text"
                  value={configuration.styling.highlightColor}
                  onChange={(event) => updateStyling('highlightColor', event.target.value)}
                />
                <Form.Text muted>
                  Color of the title, dot, and progress pill when selected.
                </Form.Text>
              </Form.Group>
            </div>
          </Card.Body>
        </Card>
        <Card className="studio-page-content">
          <Card.Body>
            <h3 className="section-title">Styling of Cards</h3>
            <div className="style-grid two-column">
              <Form.Group className="single-span" controlId="cardBackgroundColor">
                <Form.Label>Card background color</Form.Label>
                <Form.Control
                  type="text"
                  value={configuration.styling.cardBackgroundColor}
                  onChange={(event) => updateStyling('cardBackgroundColor', event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="cardTitleColor">
                <Form.Label>Title text color</Form.Label>
                <Form.Control
                  type="text"
                  value={configuration.styling.cardTitleColor}
                  onChange={(event) => updateStyling('cardTitleColor', event.target.value)}
                />
              </Form.Group>
              <Form.Group controlId="cardTitleFontSize">
                <Form.Label>Title font size</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={configuration.styling.cardTitleFontSize}
                  onChange={(event) => updateStyling('cardTitleFontSize', Number(event.target.value) || 1)}
                />
              </Form.Group>
              <Form.Group controlId="cardDescriptionColor">
                <Form.Label>Description text color</Form.Label>
                <Form.Control
                  type="text"
                  value={configuration.styling.cardDescriptionColor}
                  onChange={(event) => updateStyling('cardDescriptionColor', event.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-0" controlId="cardDescriptionFontSize">
                <Form.Label>Description font size</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={configuration.styling.cardDescriptionFontSize}
                  onChange={(event) => updateStyling('cardDescriptionFontSize', Number(event.target.value) || 1)}
                />
              </Form.Group>
            </div>
          </Card.Body>
        </Card>
      </div>
    ),
    items: (
      <Card className="studio-page-content">
        <Card.Body className="items-page">
          <aside className="items-sidebar">
            <Button className="add-item-button" type="button" onClick={addItem}>
              + Add line item
            </Button>
            <div className="items-list">
              {configuration.items.map((item, index) => (
                <div
                  key={`${item.title}-${item.label}-${item.position}`}
                  className={`item-row ${index === selectedItemIndex ? 'selected' : ''}`}
                >
                  <Button
                    className="item-select-button"
                    type="button"
                    variant={index === selectedItemIndex ? 'primary' : 'tertiary'}
                    onClick={() => setSelectedItemIndex(index)}
                  >
                    {item.title || `Item ${index + 1}`}
                  </Button>
                  <IconButton
                    className="item-delete-button"
                    src={DeleteOutline}
                    iconAs={Icon}
                    variant="danger"
                    alt={`Delete ${item.title || `Item ${index + 1}`}`}
                    onClick={() => deleteItem(index)}
                  />
                </div>
              ))}
            </div>
          </aside>
          <div className="item-editor-panel">
            {selectedItem ? (
              <div className="form-stack">
                <Form.Group controlId="lineItemTitle">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedItem.title}
                    onChange={(event) => updateSelectedItem((currentItem) => ({
                      ...currentItem,
                      title: event.target.value,
                    }))}
                  />
                </Form.Group>
                <Form.Group controlId="lineItemLabel">
                  <Form.Label>Label</Form.Label>
                  <Form.Control
                    type="text"
                    value={selectedItem.label}
                    onChange={(event) => updateSelectedItem((currentItem) => ({
                      ...currentItem,
                      label: event.target.value,
                    }))}
                  />
                </Form.Group>
                <Form.Group controlId="lineItemDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    value={selectedItem.description}
                    onChange={(event) => updateSelectedItem((currentItem) => ({
                      ...currentItem,
                      description: event.target.value,
                    }))}
                  />
                </Form.Group>
                <Form.Group className="mb-0">
                  <Form.Label>Label placement</Form.Label>
                  <div className="radio-field-group">
                    <Form.Check
                      id={`displayAboveLine-${selectedItemIndex}`}
                      type="radio"
                      name="labelPlacement"
                      label="Display above line"
                      checked={selectedItem.displayAboveLine}
                      onChange={() => updateSelectedItem((currentItem) => ({
                        ...currentItem,
                        displayAboveLine: true,
                      }))}
                    />
                    <Form.Check
                      id={`displayBelowLine-${selectedItemIndex}`}
                      type="radio"
                      name="labelPlacement"
                      label="Display below line"
                      checked={!selectedItem.displayAboveLine}
                      onChange={() => updateSelectedItem((currentItem) => ({
                        ...currentItem,
                        displayAboveLine: false,
                      }))}
                    />
                  </div>
                </Form.Group>
              </div>
            ) : (
              <Alert variant="light" className="mb-0 empty-editor-state">
                Add a line item to begin configuring the process line.
              </Alert>
            )}
          </div>
        </Card.Body>
      </Card>
    ),
    placement: (
      <div className="placement-page">
        <Card className="studio-page-content placement-card">
          <Card.Body>
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
            <Button variant="outline-primary" type="button" onClick={setItemsEvenly}>
              Space items evenly
            </Button>
          </Card.Body>
        </Card>
        <Card as="section" className="student-preview-section" aria-label="Student preview">
          <Card.Body className="student-preview-shell">
            <h4 className="student-preview-title">Student preview</h4>
            <StudentUi
              configuration={configuration}
              selectedIndex={selectedItemIndex}
              onSelectedIndexChange={setSelectedItemIndex}
            />
          </Card.Body>
        </Card>
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
        {saveError && (
          <Alert className="save-error" variant="danger">
            {saveError}
          </Alert>
        )}
        <Sticky position="bottom" className="editor-actions border-top p-3">
          <ActionRow>
            <ActionRow.Spacer />
            <Button variant="tertiary" type="button" onClick={onCancel} disabled={isSaving}>
              Cancel
            </Button>
            {page !== 'basic' && (
              <Button variant="outline-primary" type="button" onClick={handleBack} disabled={isSaving}>
                Back
              </Button>
            )}
            <Button
              variant="primary"
              type="button"
              onClick={nextButton.onClick}
              disabled={isSaving || (page === 'items' && !configuration.items.length)}
            >
              {isSaving ? 'Saving…' : nextButton.label}
            </Button>
          </ActionRow>
        </Sticky>
      </div>
    </div>
  );
}

export default EditingPage;
