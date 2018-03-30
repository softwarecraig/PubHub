import { shallow } from 'enzyme';

export default function shallowWithStore(component, store) {
  return shallow(component, { context: { store } });
};
