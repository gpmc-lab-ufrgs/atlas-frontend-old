// A modifier for popper-js to make the popup menu the same width as its
// source element. Copied from
// https://github.com/popperjs/popper-core/issues/794#issuecomment-640747771.
//
// Usage:
//   const popperModifiers = useMemo(
//     () => [sameWidthModifier], []
//   )
//
//   const [referenceElement, setReferenceElement] = useState(null)
//   const [popperElement, setPopperElement] = useState(null)
//   const { styles, attributes } = usePopper(referenceElement, popperElement, {
//     modifiers: popperModifiers
//   })


const sameWidthModifier = {
  name: "sameWidth",
  enabled: true,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state }) => {
    state.styles.popper.width = `${state.rects.reference.width}px`;
  },
  effect: ({ state }) => {
    state.elements.popper.style.width = `${
      state.elements.reference.offsetWidth
    }px`
  }
}

export {
  sameWidthModifier
}