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
          class: 'text-orange font-bold bg-transparent hover:bg-blue active:bg-blue max-md:px-0 text-sm md:text-2xl lg:text-2xl xl:text-2xl whitespace-nowrap tracking-tighter md:tracking-normal xl:tracking-wide'
        },
        {
          color: 'primary',
          variant: 'ghost',
          class: {
            base: 'text-orange font-bold bg-transparent hover:bg-orange/15',
            trailingIcon: 'size-10'
          }
        },
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-dark-orange text-orange text-[1.2rem] font-bold rounded-lg px-6 py-3 hover:bg-orange hover:text-dark-orange'
        }
      ]
    },
    badge: {
      compoundVariants: [
        {
          color: 'neutral',
          variant: 'solid',
          class: 'text-orange bg-dark-blue'
        },
        {
          color: 'primary',
          variant: 'solid',
          class: 'text-orange bg-dark-orange text-lg font-semibold px-3 py-1'
        }
      ]
    },
    carousel: {
      slots: {
        dot: 'bg-dark-blue opacity-60'
      },
      variants: {
        active: {
          true: {
            dot: 'data-[state=active]:bg-orange data-[state=active]:opacity-100'
          }
        }
      }
    },
    dropdownMenu: {
      slots: {
        content: 'bg-dark-blue ring-0',
        itemLabel: 'text-orange'
      }
    }
  }
})
