import logo from './logo.svg';
import './App.css';
import image from './logo.jpg';

function App() {
  return (
    <div class="hi">
    
    <h1><b><i>This is Full Stack Development class</i></b></h1>
    <p>In this class we learn about HTML,CSS,JAVASCRIPT</p>
    <p>ReactJs,NodeJS</p>
    <h2>HTML</h2>
    <p>Hyper Text Markup Language <a href="https://developer.mozilla.org/en-US/">MDN</a></p>
    <p id="hello">I am in 3rd year.</p>
           <button type="button" onclick="myFunfor1st()">1st</button>
           <button type="button" onclick="myFunfor2nd()">2nd</button>
           <button type="button" onclick="myFunfor3rd()">3rd</button>
           <button type="button" onclick="myFunfor4th()">4th</button>
    <div class="pic">
    <img src={image} alt="panda" title="panda" />
    
    </div>
    <h2><b>HTML TAGS</b></h2>
    <div>
    <fieldset>
        <ol type="a" start="5">
            <li>head</li>
            <li>body</li>
            <li>title</li>
        </ol>
    </fieldset>
</div>
    
    <br />
    <h2><b>HTML TAGS</b></h2>
    <fieldset>
        <ul>
            <li>head</li>
            <li>body</li>
            <li>title</li>
        </ul>
    </fieldset>
    <hr />
    <br />
    <div class="grid-container">
        <div class="grid-item">1</div>
        <div class="grid-item">2</div>
        <div class="grid-item">3</div>
        <div class="grid-item">4</div>
        
      </div>
      <hr />
      <br />

      <div class="container">
        <div class="bpx">1</div>
        <div class="bpx">2</div>
        <div class="bpx">3</div>
        <div class="bpx">4</div>
        <div class="bpx">5</div>
      </div>
    

</div>

  );
}

export default App;
