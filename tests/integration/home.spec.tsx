
import { render, screen } from '@testing-library/react'
import { describe, expect, test} from '@jest/globals'
import Home from '../../src/pages'
import * as React from 'react'

describe('Home', () => {
  test('should render the home page', () => {
    render(<Home />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })
})
