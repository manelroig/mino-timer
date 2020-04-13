import { FormControl, FormLabel } from '@chakra-ui/core'
import React from 'react'
import { ExerciseSelect } from '../../components'
import { useStore } from '../../hooks/useStore'

export const ExerciseChoice = () => {
  const store = useStore()

  return (
    <FormControl mb='2'>
      <FormLabel htmlFor='exercise'>Exercise</FormLabel>
      <ExerciseSelect
        id='exercise'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          store.changeName(e.target.value)
        }}
        value={store.newExercise.name}
      />
    </FormControl>
  )
}