import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const slider = (
  <AwesomeSlider
    media={[
      {
        source: '/path/to/image-0.png',
      },
      {
        source: '/path/to/image-1.png',
      },
      {
        source: '/path/to/image-2.png',
      },
    ]}
  />
);