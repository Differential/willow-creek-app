import PropTypes from 'prop-types';
import Svg, { Path } from 'react-native-svg';

import { makeIcon } from '@apollosproject/ui-kit';

const Icon = makeIcon(({ size, fill } = {}) => (
  <Svg width={size} height={size} viewBox="0 0 57 57" fill="none">
    <Path
      d="M44.96 10.3569L50.009 22.6259L50.992 22.6189C52.1652 18.344 53.8515 14.2267 56.014 10.3569H44.96Z"
      fill={fill}
    />
    <Path
      d="M16.472 19.6339C14.689 14.9929 18.928 10.3599 18.928 10.3599L0 10.3759L14.706 46.0569H17.618L19.923 40.1409C22.709 32.1409 22.532 34.3269 19.802 27.7129L16.472 19.6339Z"
      fill={fill}
    />
    <Path
      d="M38.764 19.6339C36.98 14.9929 41.22 10.3599 41.22 10.3599L22.292 10.3759L36.998 46.0569H39.91L42.215 40.1409C45.002 32.1409 44.825 34.3269 42.094 27.7129L38.764 19.6339Z"
      fill={fill}
    />
  </Svg>
));

Icon.propTypes = {
  size: PropTypes.number,
  fill: PropTypes.string,
};

export default Icon;
