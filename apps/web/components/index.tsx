// @ts-nocheck
import { lazy } from 'react'

export const COMPONENTS: Record<string, any> = {
  'button-example': {
    name: 'button-example',
    type: 'components:examples',
    component: lazy(
      () => import('@/components/examples/buttons/button-example')
    ),
    file: '/components/examples/button-example.tsx',
  },
  input: {
    name: 'input',
    type: 'components:examples',
    component: lazy(() => import('@/components/inputs/input')),
    file: '/components/inputs/input-example.tsx',
  },
}
