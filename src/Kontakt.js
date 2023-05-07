import React, {Component} from 'react';
import ReactDOM from 'react-dom';

    


class Kontakt extends React.Component {
    constructor(props) {
    super(props);
    this.state = { Ime: "" , Tekst: "" , Email:"",Naslov:"",prezime:""};
    }
    
    hendlerViseDogadjaja = ev => {
    var ime = ev.target.name;
    var vrednost = ev.target.value;
    this.setState({[ime]: vrednost});
    }


    
    submitHendler = () => {
 
     document.querySelector('.wrapper').innerHTML=
     '<div class=poruka>'+
     '<h1 id="poruka">'+"Hvala sto ste nas kontaktirali"+'</h1>'+'<br>'+
     '<h1 id="span">'+"Uskoro cemo vas kontaktirati zelimo vam prijatan dan"+'</h1>'+
     '<h4 >'+"Uneti podaci:"+'</h4>'
     +'<h2>'+'<span>'+"Ime:"+'</span>'+this.state.Ime+'</h2>'
     +'<h2>'+'<span>'+"Prezime:"+'</span>'+this.state.prezime+'</h2>'
     +'<h2>'+'<span>'+"Email:"+'</span>'+this.state.Email+'</h2>'+
     '<h2>'+'<span>'+"Naslov:"+'</span>'+this.state.Naslov+'</h2>'+
     '<div class="message">'+ '<h2>'+'<span>'+"Poruka:"+'</span>'+this.state.Tekst+'</h2>'+'<div>'+
     '<a href="#/" class="btn">'+ "Povratak"+'</a>'+
     '</div>';
     document.querySelector('.wrapper').style.display='block';
    
      
    }
    render() {
        var tekst="";
        if (this.state.Ime) {
        tekst = <h4><span>Ime:</span>{this.state.Ime}</h4>;
        } else {
        tekst = "";
        }
        var tekst1="";
        if(this.state.prezime)
        tekst1=<h4><span>Prezime:</span> {this.state.prezime}</h4>
        var tekst2="";
        if(this.state.Email)
        tekst2=<h4><span>Email:</span>{this.state.Email}</h4>;
        var tekst3="";
        if(this.state.Naslov)
        tekst3=<h4><span>Naslov:</span>{this.state.Naslov}</h4>;
       
        
        
        
        return (
            <section>
            <div class="wrapper">
                <div className='slika'></div>
                
            <form onSubmit={this.submitHendler}>
            <h2>Kontaktirajte nas</h2>
                <h4>Kontakt forma</h4>
                <div class="input_group">
                    <div class="input_box">
                    <input type="text" name="Ime" placeholder='Ime' className='name' required onChange={this.hendlerViseDogadjaja}/>
                       <i class='bx bxs-user'></i>
                    </div>
                    <div class="input_box">
                        <input type="text" name='prezime' placeholder="Prezime" required className="name" onChange={this.hendlerViseDogadjaja} />
                        <i class='bx bxs-user'></i>
                    </div>
                </div>
                <div class="input_group">
                    <div class="input_box">
                        <input type="email" name='Email' placeholder="Email" required class="name" onChange={this.hendlerViseDogadjaja}/>
                        <i class='bx bx-envelope'></i>
                    </div>
                </div>
                <div class="input_group">
                    <div class="input_box">
                        <input type="text" name='Naslov' placeholder="Naslov" required class="name" onChange={this.hendlerViseDogadjaja}/>
                        <i class='bx bx-star'></i>
                    </div>
                </div>
                    <textarea id="w3review" placeholder='Poruka...' name="Tekst" rows="4" cols="50" required onChange={this.hendlerViseDogadjaja}></textarea>
                  
             
                <h4>Uneti podaci</h4>
                <div className='podaci'> {tekst} {tekst1} {tekst2} {tekst3}</div>
                <div class="input_group">
                    <div class="input_box">
                        <button>Kontaktiraj</button>
                    </div>
                </div>
            </form>
        </div>
        </section>
        );
        }
        }



export default Kontakt;