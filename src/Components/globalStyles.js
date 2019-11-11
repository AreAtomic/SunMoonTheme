import React from 'react'
import { Global, css } from 'emotion'

export default props => (
  <div>
    <Global
      styles={css`
        html,
        #root {
          width: 100vw;
          height: 100vh;
          padding: 0;
          margin: 0;
        }
      `}
    />
  </div>
)
