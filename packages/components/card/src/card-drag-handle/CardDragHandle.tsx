import React, { forwardRef } from 'react';
import { css, cx } from 'emotion';
import { usePrimitive } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { Drag } from '@contentful/f36-icons';
import tokens from '@contentful/f36-tokens';

import { styles } from './CardDragHandle.styles';

const generateStyles = ({ isActive }) => {
  return css({
    backgroundColor: isActive
      ? tokens.colorElementLight
      : tokens.colorElementLightest,

    cursor: isActive ? 'grabbing' : 'grab',
  });
};

export type CardDragHandleInternalProps = {
  /**
   * Applies styling for when the component is actively being dragged by
   * the user
   */
  isActive?: boolean;
  /**
   * Label rendered in CardDragHandle - not visible on screen as its purpose
   * is for screen readers only
   */
  label: string;
};

export type CardDragHandleProps = CommonProps & CardDragHandleInternalProps;

export const CardDragHandle = forwardRef<HTMLDivElement, CardDragHandleProps>(
  function CardDragHandle(
    { isActive, label, testId = 'cf-ui-card-drag-handle', ...otherProps },
    forwardedRef,
  ) {
    const { primitiveProps: commonProps, Element } = usePrimitive(otherProps);

    return (
      <Element
        as="div"
        {...commonProps}
        className={cx(styles.root, generateStyles({ isActive }))}
        testId={testId}
        ref={forwardedRef}
      >
        <Drag variant="muted" />
        <span className={styles.label}>{label}</span>
      </Element>
    );
  },
);
