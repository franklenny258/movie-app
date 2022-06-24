import React from "react";
import { ContainerContext } from '../models/service-container';

export const InversifyContext = React.createContext<ContainerContext>(
  { container: null },
);