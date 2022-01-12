import { fireEvent, screen } from '@testing-library/react'
import faker from 'faker'

const populateField = (testId: string, value = faker.random.word()) => {
  const el = screen.getByTestId(testId)
  fireEvent.input(el, { target: { value } })
}

export { populateField }
