import './App.css';
import CommonHOC from './components/HOC/CommonHOC';
import LikeImageHOC from './components/HOC/LikeImageHOC';
import LikePostHOC from './components/HOC/LikePostHOC';
import LikeImageProps from './components/RenderProps/LikeImageProps'
import LikePostProps from './components/RenderProps/LikePostProps';

function App() {
  return (
    <div>
      {/* <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost/>
        <LikeImage/>
      </div> */}

      {/*Part I - HOC logic */}
      <h1>Blog using HOC</h1>
      <div className='buttons'>
        <LikeImageHOC />
        <LikePostHOC />
        
      </div>

      {/*Part II - Props logic */}
      <h1>Blog using Props</h1>
      <div className='buttons'>
        <LikeImageProps />
        <LikePostProps />
      </div>
    </div>
  );
}

export default App;
