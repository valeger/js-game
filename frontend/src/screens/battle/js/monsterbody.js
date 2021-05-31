import { monster } from './createentities'
import forIn from 'lodash.forIn';

export const bodyGeneration = (canvas, resource = monster) => {

  canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

  const draw = ({ image, x, y, frames }) => {
    const randomValue = Math.round(2*Math.random());

    canvas.getContext('2d').drawImage( image,
      randomValue * image.width / frames, 0,
      image.width / frames, image.height,
      x, y,
      image.width / frames, image.height
    );
  }

  forIn(resource, draw);
}
