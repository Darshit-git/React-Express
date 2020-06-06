import React from "react";

import {hydrate} from "react-dom";

import App from '../pages/index'

import {BrowserRouter} from 'react-router-dom';

hydrate(<BrowserRouter><App/></BrowserRouter>, document.getElementById("root"));