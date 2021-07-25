import { css } from 'emotion';
import tokens from '@contentful/f36-tokens';

export const styles = {
  contentBody: css({
    gridColumn: 'content',
    gridRow: 'content',
    paddingBottom: tokens.spacingM,
    paddingLeft: tokens.spacingM,
    paddingRight: tokens.spacingM,
  }),
  dragHandle: css({
    borderBottomLeftRadius: tokens.borderRadiusMedium,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    height: '100%',
    gridColumn: 'dragHandle',
    gridRow: 'header / span 2',
  }),
  header: css({
    alignItems: 'center',
    // @todo: grey / 200
    borderBottomColor: tokens.colorElementMid,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderTopLeftRadius: tokens.borderRadiusMedium,
    borderTopRightRadius: tokens.borderRadiusMedium,
    boxSizing: 'border-box',
    // @todo: grey / 600
    color: tokens.colorTextLight,
    fontSize: tokens.fontSizeM,
    fontWeight: tokens.fontWeightNormal,
    gridColumn: 'content',
    gridRow: 'header',
    lineHeight: tokens.lineHeightM,
    // marginBottom: tokens.spacingM,
    // marginRight: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
    paddingBottom: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
    paddingLeft: tokens.spacingM,
    paddingRight: tokens.spacingM,
    paddingTop: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
  }),
  headerItem: css({
    marginLeft: `calc(1rem * (10 / ${tokens.fontBaseDefault}))`,
  }),
  headerWithActions: css({
    paddingBottom: 0,
    paddingRight: 0,
    paddingTop: 0,
  }),
  root: css({
    // @todo: revisit colours
    backgroundColor: tokens.colorWhite,
    borderColor: tokens.colorElementMid,
    borderRadius: tokens.borderRadiusMedium,
    borderStyle: 'solid',
    borderWidth: 1,
    // @todo: grey / 900
    color: tokens.colorTextDark,
    display: 'grid',
    gridTemplateColumns: '[dragHandle] auto [content] 1fr',
    gridTemplateRows: '[header] auto [content] 1fr',
    fontSize: tokens.fontSizeM,
    fontWeight: tokens.fontWeightNormal,
    lineHeight: tokens.lineHeightM,
    // overflow: 'hidden',
    position: 'relative',
    textDecoration: 'none',
    transition: `border-color ${tokens.transitionDurationDefault} ${tokens.transitionEasingDefault},
    box-shadow ${tokens.transitionDurationShort} ${tokens.transitionEasingDefault}`,
  }),
};
