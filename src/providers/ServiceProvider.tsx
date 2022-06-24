import React from "react";
import { InversifyContext } from '../context/inversify-services-context';
import { ContainerProviderProps } from '../models/service-container';

export const InjectorContainerProvider: React.FC<ContainerProviderProps> = (
  { container, children },
) => (
  <InversifyContext.Provider value={{ container }}>
    {children}
  </InversifyContext.Provider>
);