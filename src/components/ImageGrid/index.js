import style from './Image.module.scss';
import classNames from 'classnames/bind';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '~/actions';
import Button from '../Button';
const cl = classNames.bind(style);
function Image(props) {
  let { loadImages, error, images } = props;

  const componentDidMounth = () => {};

  useEffect(() => {
    componentDidMounth();
  });

  return (
    <div className={cl('wrapper')}>
      <section className="grid">
        {images &&
          images.map((image) => (
            <div key={image.id} className={cl(`item item-${Math.ceil(image.height / image.width)}`)}>
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          ))}
      </section>
      <Button onClick={loadImages}>loadImages</Button>
      {error && <div className={cl('error')}>{JSON.stringify(error)}</div>}
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
