import { interfaces } from 'inversify';
import { useContext } from 'react';
import { InversifyContext } from '../context/inversify-services-context';

export function useInjection<T>(
  identifier: interfaces.ServiceIdentifier<T>
): T {
  const { container } = useContext(InversifyContext);
  if (!container) {
    throw new Error('The container should not be null');
  }
  try {
    return container.get<T>(identifier);
  } catch (e) {
    return container.resolve<T>(identifier as interfaces.Newable<T>);
  }
}