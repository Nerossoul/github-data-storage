import './style.css'

import { Auth } from '../src'

import {getAuthTokens} from "./auth-flow.js";

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Hello</h1>
    <div class="card">
      <button id="authButton" type="button">Auth</button>
    </div>
  </div>
`

getAuthTokens(document.querySelector('#authButton'), Auth)
