import style from './Image.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '~/actions';

const cl = classNames.bind(style);
function Image(props) {
  const [states, setSates] = useState([]);
  const componentDidMounth = () => {
    axios.get('https://dog.ceo/api/breeds/image/random').then((res) => setSates(res.data.message));
  };

  useEffect(() => {
    componentDidMounth();
  }, []);

  return (
    <div className={cl('wrapper')}>
      {<img src={states} alt="error"></img>}
      <button onClick={props.loadImages}>loadImages</button>
    </div>
  );
}
const mapStateToProps = ({ loading, images, error }) => ({
  loading,
  images,
  error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadImages: () => dispatch(loadImages()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Image);
