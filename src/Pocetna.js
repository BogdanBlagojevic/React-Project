import React, {Component} from 'react';
class Pocetna extends Component{
    Poruka = (vreme) => {
        var today = new Date();
        vreme= today.getHours() 
      if(vreme>=1 && vreme<=12){
        document.querySelector('.dobrodosli').innerHTML=
        '<h2>'+"Dobrodosli zelimo vam prijatano jutro"+'<span>'+"!!!"+'</span>'+'</h2>'
      }
      if(vreme>=13 && vreme<20){
        document.querySelector('.dobrodosli').innerHTML=
        '<h2>'+"Dobrodosli zelimo vam prijatan dan"+'<span>'+"!!!"+'</span>'+'</h2>'
      }
      if(vreme>=20 && vreme<24){
        document.querySelector('.dobrodosli').innerHTML=
        '<h2>'+"Dobrodosli zelimo vam prijatano vece"+'<span>'+"!!!"+'</span>'+'</h2>'
      }
        }

       Vise = () => {
        document.querySelector('#tekst').innerHTML =
        '<p>'+"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae temporibus<br>labore ad tempore minus dolores omnis neque! Eum molestias labore quidem sapiente itaque earum<br> voluptas ducimus inventore temporibus veniam! Sed hic ipsum explicabo!"+'</p>'+
        '<p>'+"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae recusandae temporibus<br>labore ad tempore minus dolores omnis neque! Eum molestias labore quidem sapiente itaque earum<br> voluptas ducimus inventore temporibus veniam! Sed hic ipsum explicabo!"+'</p>'
       }

render(){
return(

<section class="home" id="home">
        <div class="text">
            <h2 class="dobrodosli"></h2>
            <h1><span>Izrada</span> Web sajta</h1>
            <h2 id='home-h2'>Zelis da kreiras veb sajt? Dosao si na pravo mesto.</h2>
            <p id='tekst'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur.<br></br>labore ad tempore minus dolores omnis neque! Eum molestias labore quidem sapiente itaque </p>
            <div class="home-btn">
                <button  onClick={this.Poruka}>Poruka</button>
                <button  onClick={this.Vise}>vise</button>
            </div>
        </div>
        <div className='hero'></div>
        </section>
      
);
}
}
export default Pocetna;