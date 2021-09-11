function Dark(){
var d = document.body;
 
d.classList.toggle('dark-m')
 }

 function nav(){
    document.getElementById('show').innerHTML  = `  <ul id="list">
    <li><button class="glow-on-hover" type="button"><a
      class="nav-link "href="#diplomes"
      >Diplomes</a></button></li>
    <li><button class="glow-on-hover" type="button"><a class="nav-link active"
      aria-current="page" href="#compet">Mes Competances</a></button></li>
    <li><button class="glow-on-hover" type="button"><a class="nav-link active"
      aria-current="page" href="#realisations"
        >Mes Realisations</a></button></li>
    <li><button class="glow-on-hover" type="button"><a class="nav-link active"
      aria-current="page" href="#cont">Contact</a></button></li>
    <li><button class="glow-on-hover" type="button"><a class="nav-link active"
      aria-current="page" href="#follow">Follow Me</a></button></li>
    <li><button id="DM" onclick="Dark()"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="50"  fill=yellow class="bi bi-circle-half" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
  </svg></button></li>
      </ul>
        </div>
       </div>
    <li><svg onclick="closeIt()" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="white" class="bi bi-x-square-fill" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
  </svg></li>
  </ul>`;
 }
 
 
 function closeIt(){
     document.getElementById('show').innerHTML  = ``;
 }