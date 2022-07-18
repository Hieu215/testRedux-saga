import style from './Image.module.scss';
import classNames from 'classnames/bind';

import { useEffect } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '~/actions';
import Button from '../Button';
import Stats from '../Stats/Stats';

const cl = classNames.bind(style);
function Image(props) {
  let { loadImages, error, images, imagesStats } = props;

  const componentDidMounth = () => {};

  useEffect(() => {
    componentDidMounth();
  });

  return (
    <div className={cl('wrapper')}>
      <section className={cl('grid')}>
        {images.map((image) => (
          <div key={images.id} className={cl('item', `item-${Math.ceil(image.height / image.width)}`)}>
            <Stats stats={imagesStats[image.id]} />
            <img src={image.urls.small} alt={image.user.username} />
          </div>
        ))}
      </section>
      <Button onClick={loadImages}>loadImages</Button>
      {error && <div className={cl('error')}>{JSON.stringify(error)}</div>}
    </div>
  );
}
const mapStateToProps = ({ loading, images, error, imagesStats }) => ({
  loading,
  images,
  error,
  imagesStats,
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadImages: () => dispatch(loadImages()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Image);
