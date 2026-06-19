import * as React from 'react';
import type { ProcessLineConfiguration, ProcessLineItem } from '../processline-types';
import { positionToPercent, sortItemsByPosition } from '../processline-helpers';

interface StudentUiProps {
  configuration: ProcessLineConfiguration;
  selectedIndex?: number;
  onSelectedIndexChange?: (index: number) => void;
}

function StudentUi({
  configuration,
  selectedIndex: controlledSelectedIndex,
  onSelectedIndexChange,
}: StudentUiProps) {
  const items = React.useMemo(
    () => sortItemsByPosition(configuration.items || []),
    [configuration.items],
  );
  const [internalSelectedIndex, setInternalSelectedIndex] = React.useState(0);
  const timelineViewportRef = React.useRef<HTMLDivElement | null>(null);
  const dragStateRef = React.useRef({
    active: false,
    pointerId: -1,
    startX: 0,
    startScrollLeft: 0,
    moved: false,
  });

  const selectedIndex = controlledSelectedIndex ?? internalSelectedIndex;

  const updateSelectedIndex = React.useCallback((nextIndex: number) => {
    const boundedIndex = items.length
      ? Math.max(0, Math.min(items.length - 1, nextIndex))
      : 0;

    if (controlledSelectedIndex === undefined) {
      setInternalSelectedIndex(boundedIndex);
    }
    if (onSelectedIndexChange) {
      onSelectedIndexChange(boundedIndex);
    }
  }, [controlledSelectedIndex, items.length, onSelectedIndexChange]);

  React.useEffect(() => {
    if (selectedIndex > items.length - 1) {
      updateSelectedIndex(Math.max(items.length - 1, 0));
    }
  }, [items.length, selectedIndex, updateSelectedIndex]);

  const selectedItem = items[selectedIndex];

  const moveSelection = (delta: number) => {
    updateSelectedIndex(selectedIndex + delta);
  };

  const scrollToItem = (index: number) => {
    const viewport = timelineViewportRef.current;
    if (!viewport) {
      return;
    }
    const marker = viewport.querySelector<HTMLElement>(`[data-step-index="${index}"]`);
    if (marker && typeof marker.scrollIntoView === 'function') {
      marker.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };

  React.useEffect(() => {
    scrollToItem(selectedIndex);
  }, [selectedIndex]);

  const handleSelect = (index: number) => {
    if (dragStateRef.current.moved) {
      return;
    }
    updateSelectedIndex(index);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = timelineViewportRef.current;
    if (!viewport) {
      return;
    }
    dragStateRef.current = {
      active: true,
      pointerId: event.pointerId,
      startX: event.clientX,
      startScrollLeft: viewport.scrollLeft,
      moved: false,
    };
    viewport.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = timelineViewportRef.current;
    const dragState = dragStateRef.current;
    if (!viewport || !dragState.active || dragState.pointerId !== event.pointerId) {
      return;
    }
    const delta = event.clientX - dragState.startX;
    if (Math.abs(delta) > 4) {
      dragState.moved = true;
    }
    viewport.scrollLeft = dragState.startScrollLeft - delta;
  };

  const finishDragging = (pointerId: number) => {
    const viewport = timelineViewportRef.current;
    if (viewport && viewport.hasPointerCapture(pointerId)) {
      viewport.releasePointerCapture(pointerId);
    }
    const dragState = dragStateRef.current;
    dragState.active = false;
    window.setTimeout(() => {
      dragStateRef.current.moved = false;
    }, 0);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId === event.pointerId) {
      finishDragging(event.pointerId);
    }
  };

  const handlePointerCancel = (event: React.PointerEvent<HTMLDivElement>) => {
    if (dragStateRef.current.pointerId === event.pointerId) {
      finishDragging(event.pointerId);
    }
  };

  const getMarkerStyle = (item: ProcessLineItem, index: number) => {
    const selected = index === selectedIndex;
    return {
      left: `${positionToPercent(item.position)}%`,
      '--processline-highlight-color': configuration.styling.highlightColor,
      '--processline-title-color': selected
        ? configuration.styling.highlightColor
        : configuration.styling.lineItemTitleColor,
      '--processline-label-color': configuration.styling.lineItemLabelColor,
      '--processline-title-font-size': `${configuration.styling.lineItemTitleFontSize}px`,
      '--processline-label-font-size': `${configuration.styling.lineItemLabelFontSize}px`,
    } as React.CSSProperties;
  };

  if (!items.length) {
    return (
      <div className="xblock-processline student-view empty-state">
        <h2 className="processline-heading">{configuration.displayName}</h2>
        <p className="processline-subheading">{configuration.introductionText}</p>
        <p className="processline-empty-message">No line items have been configured yet.</p>
      </div>
    );
  }

  return (
    <div className="xblock-processline student-view">
      <header className="processline-header">
        <h2 className="processline-heading">{configuration.displayName}</h2>
        <p className="processline-subheading">{configuration.introductionText}</p>
      </header>

      <section className="processline-timeline-section" aria-label="Process line navigation">
        <button
          className="timeline-side-button"
          type="button"
          onClick={() => moveSelection(-1)}
          disabled={selectedIndex === 0}
          aria-label="Previous item"
        >
          ←
        </button>
        <div
          ref={timelineViewportRef}
          className="timeline-viewport"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            className="timeline-canvas"
            style={{ minWidth: `${Math.max(960, items.length * 220)}px` }}
          >
            <div className="timeline-track" />
            {items.map((item, index) => {
              const selected = index === selectedIndex;
              return (
                <button
                  key={`${item.title}-${item.position}`}
                  className={`timeline-marker ${item.displayAboveLine ? 'above' : 'below'} ${selected ? 'selected' : ''}`}
                  data-step-index={index}
                  type="button"
                  style={getMarkerStyle(item, index)}
                  onPointerDown={(event) => event.stopPropagation()}
                  onClick={() => handleSelect(index)}
                  onFocus={() => updateSelectedIndex(index)}
                  aria-pressed={selected}
                >
                  <span className="timeline-node" />
                  <span className="timeline-marker-copy">
                    <span className="timeline-marker-title">{item.title}</span>
                    <span className="timeline-marker-label">{item.label}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <button
          className="timeline-side-button"
          type="button"
          onClick={() => moveSelection(1)}
          disabled={selectedIndex === items.length - 1}
          aria-label="Next item"
        >
          →
        </button>
      </section>

      {selectedItem && (
        <section
          className="processline-detail-card"
          style={{
            backgroundColor: configuration.styling.cardBackgroundColor,
            color: configuration.styling.cardDescriptionColor,
          }}
        >
          <span
            className="detail-progress-pill"
            style={{ backgroundColor: configuration.styling.highlightColor }}
          >
            {selectedIndex + 1}
            {' / '}
            {items.length}
          </span>
          <h3
            className="detail-title"
            style={{
              color: configuration.styling.cardTitleColor,
              fontSize: `${configuration.styling.cardTitleFontSize}px`,
            }}
          >
            {selectedItem.title}
            {selectedItem.label ? ` - ${selectedItem.label}` : ''}
          </h3>
          <p
            className="detail-description"
            style={{
              color: configuration.styling.cardDescriptionColor,
              fontSize: `${configuration.styling.cardDescriptionFontSize}px`,
            }}
          >
            {selectedItem.description}
          </p>
          <div className="detail-card-footer">
            <span className="detail-count">
              {selectedIndex + 1}
              {' of '}
              {items.length}
            </span>
            <div className="detail-actions">
              <button
                className="detail-nav-button"
                type="button"
                onClick={() => moveSelection(-1)}
                disabled={selectedIndex === 0}
                aria-label="Previous detail"
              >
                ←
              </button>
              <button
                className="detail-nav-button primary"
                type="button"
                onClick={() => moveSelection(1)}
                disabled={selectedIndex === items.length - 1}
                aria-label="Next detail"
              >
                →
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

StudentUi.defaultProps = {
  selectedIndex: undefined,
  onSelectedIndexChange: undefined,
};

export default StudentUi;
