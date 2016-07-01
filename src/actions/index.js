export function addOperator(number) {
  return {
    type: 'ADD_NUMBER',
    payload: number
  };
}

export function subtractOperator(number) {
  return {
    type: 'SUBTRACT_NUMBER',
    payload: number
  }
}

export function clearOperator() {
  return {
    type: 'CLEAR_NUMBERS',
    payload: 0
  }
}
