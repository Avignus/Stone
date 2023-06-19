import React from 'react';
import {ReactComponent as SVGBAG} from '../../assets/shopping-bag.svg';

type Props = {
  width: number;
  height: number;
};
const SVGBagComponent: React.FC<Props> = (props: Props) => {
  const {width, height} = props;
  return <SVGBAG width={width} height={height} />;
};

export default SVGBagComponent;
