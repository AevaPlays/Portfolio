export default defineAppConfig({
  shadows: {
    headerDecor: {
      dark: '48px 0 64px rgba(36, 11, 0, 0.6)',
      light: '48px 0 64px rgba(36, 11, 0, 0.3)'
    },
    headerDecorMobile: {
      dark: 'inset 0 100px 50px -64px rgba(0, 0, 0, 0.6)',
      light: 'inset 0 100px 50px -64px rgba(0, 0, 0, 0.3)'
    },
    navbar: {
      dark: '0 8px 27px rgba(0, 4, 21, 0.7)',
      light: '0 8px 27px rgba(0, 4, 21, 0.35)'
    },
    image: {
      dark: '0 8px 27px rgba(0, 4, 21, 0.6)',
      light: '0 8px 27px rgba(0, 4, 21, 0.3)'
    },
    button: {
      dark: '0 8px 20px rgba(0, 0, 0, 0.6)',
      light: '0 8px 20px rgba(0, 0, 0, 0.3)'
    },
    badge: {
      dark: '0 7px 12px rgba(0, 0, 0, 0.6)',
      light: '0 7px 12px rgba(0, 0, 0, 0.3)'
    },
    card: {
      dark: '0 12px 30px rgba(0, 0, 0, 0.6)',
      light: '0 12px 30px rgba(0, 0, 0, 0.3)'
    }
  },
  plasma: {
    headerDecor: {
      dark: {
        stops: [
          { color: '#a35139', position: 0.69 },
          { color: '#1b2632', position: 1 }
        ]
      },
      light: {
        stops: [
          { color: '#eee9df', position: 0.69 },
          { color: '#ffb162', position: 1 }
        ]
      },
      density: 2.7,
      speed: 2,
      intensity: 1.5,
      warp: 0.4,
      contrast: 1,
      balance: 50
    },
    projectCard: {
      opacity: 20
    }
  },
  cursorTrail: {
    stops: [
      { color: '#a35139', position: 0 },
      { color: '#ffb162', position: 1 }
    ],
    radius: 0.3,
    shrink: 0.7,
    length: 0.2,
    opacity: 50
  },
  marcelHearts: [
    { left: '20%', top: '20%', size: 'text-3xl md:text-7xl', rotate: -25, delay: 0 },
    { left: '10%', top: '10%', size: 'text-2xl md:text-5xl', rotate: 25, delay: 100 },
    { left: '80%', top: '80%', size: 'text-3xl md:text-7xl', rotate: 25, delay: 200 },
    { left: '70%', top: '70%', size: 'text-2xl md:text-5xl', rotate: -25, delay: 0 },
    { left: '65%', top: '80%', size: 'text-lg md:text-2xl', rotate: -35, delay: 100 }
  ],
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'sky'
    },
    button: {
      slots: {
        base: 'transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5'
      },
      variants: {
        variant: {
          neutral: '',
          backToTop: ''
        }
      },
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'ghost',
          class: 'text-[var(--color-heading)] font-bold bg-transparent hover:bg-[var(--color-surface)] active:bg-[var(--color-surface)] max-md:px-0 text-sm md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tighter md:tracking-normal xl:tracking-wide'
        },
        {
          color: 'primary',
          variant: 'ghost',
          class: {
            base: 'text-[var(--color-accent-text)] font-bold bg-transparent hover:bg-[var(--color-accent-text)]/15',
            trailingIcon: 'size-10'
          }
        },
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-[var(--color-accent-bg)] text-[var(--color-accent-text)] text-[1.2rem] font-bold rounded-lg px-6 py-3 hover:bg-[var(--color-accent-text)] hover:text-[var(--color-accent-bg)]'
        },
        {
          variant: 'neutral',
          class: 'w-[13rem] max-w-full whitespace-nowrap bg-[var(--color-accent-text)] text-[var(--color-accent-bg)] text-[1.1rem] font-bold rounded-lg px-6 py-3 hover:bg-[#d1814e]'
        },
        {
          variant: 'backToTop',
          class: 'fixed bottom-6 right-6 z-[1000] rounded-full p-3 bg-[var(--color-accent-bg)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-text)] hover:text-[var(--color-accent-bg)]'
        }
      ]
    },
    badge: {
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'solid',
          class: 'text-[var(--color-heading)] bg-[var(--color-surface-elevated)]'
        },
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-[var(--color-accent-text)] bg-[var(--color-accent-bg)] text-lg font-semibold px-3 py-1'
        }
      ]
    },
    carousel: {
      slots: {
        dot: 'bg-[var(--color-surface-elevated)] opacity-60 size-4'
      },
      variants: {
        active: {
          true: {
            dot: 'data-[state=active]:bg-[var(--color-heading)] data-[state=active]:opacity-100'
          }
        }
      }
    },
    dropdownMenu: {
      slots: {
        content: 'bg-[var(--color-surface-elevated)] ring-0',
        itemLabel: 'text-[var(--color-heading)]',
        separator: 'bg-[var(--color-surface)]'
      },
      variants: {
        active: {
          false: {
            item: 'data-highlighted:before:bg-[var(--color-surface)] data-[state=open]:before:bg-[var(--color-surface)]'
          }
        }
      }
    },
    separator: {
      variants: {
        color: {
          neutral: {
            border: 'border-[var(--color-surface-elevated)]'
          }
        }
      }
    }
  }
})
