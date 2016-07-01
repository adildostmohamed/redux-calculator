export default function(state = 0, action) {
  switch (action.type) {
    case 'ADD_NUMBER':
      return (parseFloat(state) + parseFloat(action.payload))
    case 'SUBTRACT_NUMBER':
      return (parseFloat(state) - parseFloat(action.payload))
    case 'CLEAR_NUMBERS':
      return parseFloat(action.payload)
    default:
      return state
  }
}
