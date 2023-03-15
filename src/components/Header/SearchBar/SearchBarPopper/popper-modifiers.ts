import { HideModifier } from '@popperjs/core/lib/modifiers/hide';

const sameWidthModifier: HideModifier = {
  name: 'hide',
  enabled: true,
  phase: 'beforeWrite',
  requires: ['computeStyles'],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    if (state.elements.reference instanceof HTMLElement) {
      state.elements.popper.style.width = `${state.elements.reference.offsetWidth}px`;
    }
  },
};

export { sameWidthModifier };
