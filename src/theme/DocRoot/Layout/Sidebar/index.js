import React, {useEffect, useRef, useState} from 'react';
import OriginalSidebar from '@theme-original/DocRoot/Layout/Sidebar';
import styles from './styles.module.css';

const STORAGE_KEY = 'crs-doc-sidebar-width';
const DEFAULT_WIDTH = 300;
const MIN_WIDTH = 240;
const MAX_WIDTH = 600;

function maxWidth() {
  return Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, window.innerWidth / 2));
}

function clampWidth(width) {
  return Math.round(Math.max(MIN_WIDTH, Math.min(maxWidth(), width)));
}

export default function Sidebar(props) {
  const [width, setWidth] = useState(DEFAULT_WIDTH);
  const [limit, setLimit] = useState(MAX_WIDTH);
  const [dragging, setDragging] = useState(false);
  const drag = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    const previousWidth = root.style.getPropertyValue('--doc-sidebar-width');
    let savedWidth;
    try {
      savedWidth = Number(window.localStorage.getItem(STORAGE_KEY));
    } catch {
      // Resizing still works when browser storage is unavailable.
    }
    setWidth(clampWidth(savedWidth > 0 ? savedWidth : DEFAULT_WIDTH));

    const onResize = () => {
      setLimit(maxWidth());
      setWidth((current) => clampWidth(current));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
      if (previousWidth) {
        root.style.setProperty('--doc-sidebar-width', previousWidth);
      } else {
        root.style.removeProperty('--doc-sidebar-width');
      }
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--doc-sidebar-width', `${width}px`);
    try {
      window.localStorage.setItem(STORAGE_KEY, String(width));
    } catch {
      // Browser storage is optional.
    }
  }, [width]);

  useEffect(() => {
    if (!dragging) {
      return undefined;
    }
    document.documentElement.classList.add('doc-sidebar-resizing');
    return () => document.documentElement.classList.remove('doc-sidebar-resizing');
  }, [dragging]);

  useEffect(() => {
    if (props.hiddenSidebarContainer) {
      drag.current = null;
      setDragging(false);
    }
  }, [props.hiddenSidebarContainer]);

  function stopDragging(event) {
    drag.current = null;
    setDragging(false);
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function onKeyDown(event) {
    const nextWidth = {
      ArrowLeft: width - 20,
      ArrowRight: width + 20,
      Home: MIN_WIDTH,
      End: limit,
    }[event.key];
    if (nextWidth !== undefined) {
      event.preventDefault();
      setWidth(clampWidth(nextWidth));
    }
  }

  return (
    <>
      <OriginalSidebar {...props} />
      {!props.hiddenSidebarContainer && (
        <div
          className={styles.resizeHandle}
          role="separator"
          aria-label="Resize documentation sidebar"
          aria-orientation="vertical"
          aria-valuemin={MIN_WIDTH}
          aria-valuemax={limit}
          aria-valuenow={width}
          tabIndex={0}
          title="Drag to resize sidebar; double-click to reset"
          onPointerDown={(event) => {
            if (event.button !== 0 || !event.isPrimary) {
              return;
            }
            event.preventDefault();
            event.currentTarget.focus();
            event.currentTarget.setPointerCapture(event.pointerId);
            drag.current = {x: event.clientX, width};
            setDragging(true);
          }}
          onPointerMove={(event) => {
            if (drag.current) {
              setWidth(clampWidth(drag.current.width + event.clientX - drag.current.x));
            }
          }}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onLostPointerCapture={() => {
            drag.current = null;
            setDragging(false);
          }}
          onDoubleClick={() => setWidth(clampWidth(DEFAULT_WIDTH))}
          onKeyDown={onKeyDown}
        />
      )}
    </>
  );
}
