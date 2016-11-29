import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BillabongText from '../BillabongText';

describe('BillabongText', () => {
  const component = renderer.create(
    <BillabongText>
      Test!
    </BillabongText>
  );
  const tree = component.toJSON();

  it('renders correctly', () => {
    expect(tree).toMatchSnapshot();
  });
});
