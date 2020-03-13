class Resposive {
  constructor() {
    this.xs = '0'
    this.sm = '576px'
    this.md = '768px'
    this.lg = '992px'
    this.xl = '1200px'
  }

  matchBreakpoint(state, breakpoint, callback) {
    let x

    if (state == 'down') {
      x = window.matchMedia(`(max-width: ${breakpoint})`)
    }
    if (state == 'up') {
      x = window.matchMedia(`(min-width: ${breakpoint})`)
    }

    x.addListener(callback)

    if (x.matches) {
      callback(x)
    }
  }

  breakpointDown(breakpoint, callback) {
    if (breakpoint == 'xs') {
      this.matchBreakpoint('down', this.xs, callback)
    } else if (breakpoint == 'sm') {
      this.matchBreakpoint('down', this.sm, callback)
    } else if (breakpoint == 'md') {
      this.matchBreakpoint('down', this.md, callback)
    } else if (breakpoint == 'lg') {
      this.matchBreakpoint('down', this.lg, callback)
    } else if (breakpoint == 'xl') {
      this.matchBreakpoint('down', this.xl, callback)
    }
  }

  breakpointUp(breakpoint, callback) {
    if (breakpoint == 'xl') {
      this.matchBreakpoint('up', this.xl, callback)
    } else if (breakpoint == 'lg') {
      this.matchBreakpoint('up', this.lg, callback)
    } else if (breakpoint == 'md') {
      this.matchBreakpoint('up', this.md, callback)
    } else if (breakpoint == 'sm') {
      this.matchBreakpoint('up', this.sm, callback)
    } else if (breakpoint == 'xs') {
      this.matchBreakpoint('up', this.xs, callback)
    }
  }

}

export default Resposive
