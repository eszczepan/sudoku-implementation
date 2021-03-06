import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { configureStore, unregister } from './core'
import { GlobalStyles, theme } from 'styles'
import { Card, Content, Title, Grid, Numbers } from 'components'

const store = configureStore()

ReactDOM.render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider store={store}>
        <Content data-cy="content">
          <Title data-cy="title">Sudoku</Title>
          <Card data-cy="card">
            <Grid />
            <Numbers />
          </Card>
        </Content>
      </Provider>
    </ThemeProvider>
  </>,
  document.getElementById('root')
)

unregister()
