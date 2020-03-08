import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../components/slider.css';





class Slider extends React.Component {


  render() {

    const images = [
      {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
      },
      {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
      },
    ];

    return (
        <div className="SliderWrapper">
            <div> 
                <ImageGallery items={images}  autoPlay={true}/>
            </div>
        </div>
    );
  }

}
export default Slider