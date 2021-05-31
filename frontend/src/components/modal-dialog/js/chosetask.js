import translation from '../../tasks/translation/index';
import rounding from '../../tasks/rounding/index';
import listening from '../../tasks/listening/index';
import geography from '../../tasks/geography/index';
import arithmetic from '../../tasks/arithmetic/index';
import animals from '../../tasks/animals/index';
import ordering from '../../tasks/ordering/index';
import binary from '../../tasks/binary system/index';
import shapes from '../../tasks/shapes/index';

const chosetask = (taskname)  => {

  switch (taskname) {
    case 'translation':
      return translation;

    case 'rounding':
      return rounding;

    case 'listening':
    return listening;

    case 'geography':
      return geography;

    case 'arithmetic':
      return arithmetic;

    case 'animals':
      return animals;

    case 'ordering':
      return ordering;

    case 'binary system':
      return binary;

    default:
      return shapes;
  }
}

export default chosetask