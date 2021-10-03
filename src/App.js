import logo from './logo.svg';
import './App.css';
import image from './imageInSrc.jpg';
import './style.css';


function App() {
  return (
    <div className="App">
<div style={{border: "solid",borderWidth:"1px", color:"#6497b1",maxWidth:"100vw"}}>

<h1 className="title red">Wael SAID</h1>

<br />

<img src= {image} />

<br />

<img src="/imageInPublic.jpg" />

</div>

<video style={{width:"320px", height:"240px"}} controls>

<source src="myVideo.mp4" type="video/mp4" />
</video>

    </div>
  );
}

export default App;
