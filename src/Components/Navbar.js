import React from 'react';
import '../App.css';
export default () => {


return (

<nav  class="navbar navbar-expand-lg navbar-light bg-light ">
<a class="navbar-brand" href="/">Home</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
 
  <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto nav-fill w-100">
         <li class="nav-item active">
        <a class="nav-link" href="/forums">Forums <span class="sr-only">(current)</span></a>
      </li>
   
      <li class="nav-item active">
        <a class="nav-link" href="/forsale">For Sale <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="/videos">Videos <span class="sr-only">(current)</span></a>
      </li>
   
      <li class="nav-item active">
        <a class="nav-link" href="/help">Help <span class="sr-only">(current)</span></a>
      </li>
   
        </ul>
    </div>
</nav>
)}