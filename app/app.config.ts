export default defineAppConfig({
  ui: {
    colors: {
      primary: 'orange',
      neutral: 'sky'
    },
    button: {
      slots: {
        base: 'transition-[background-color,color,transform] duration-200 hover:-translate-y-0.5'
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
        dot: 'bg-[var(--color-surface-elevated)] opacity-60'
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
