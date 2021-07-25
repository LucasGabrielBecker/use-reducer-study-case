export const initialState = {
  loading: false,
  logged: false,
  error: '',
}

export const loginReducer = (state, action) => {
  switch (action.type) {
    case 'login': {
      return {
        ...state,
        error: '',
        username: action.payload.username,
        password: action.payload.password,
        loading: true,
        logged: true,
      }
    }

    case 'succes': {
      return {
        ...state,
        loading: false,
      }
    }

    case 'error': {
      return {
        ...state,
        loading: false,
        error: 'Some error occurred',
        username: '',
        password: '',
      }
    }

    case 'logout': {
      return {
        ...state,
        loading: false,
        logged: false,
        error: '',
        username: '',
        password: '',
      }
    }

    default:
      break
  }
}
