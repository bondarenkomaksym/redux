import { connect } from 'react-redux';
import { selectedOptionsSelector } from './options.selectors';
import Options from './Options';
import { toggleOption } from './options.actions';

//подключаем эту компоненту к редаксу
const mapState = state => {
  return {
    options: selectedOptionsSelector(state),
  }
}

const mapDispatch = {
  moveOption: toggleOption,
}

export default connect(mapState, mapDispatch)(Options);