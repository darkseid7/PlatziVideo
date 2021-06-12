import  React  from "react";
import  ReactDOM  from "react-dom";
import  HelloWorld  from "./components/HelloWorld";

//Hacemos la importacion de react y react-dom, hacemos uso del componente de react-dom para renderizar nuestros componentes
// el segundo parametro que recibe es el id del div en el que se va a mostrar nuestro componente, por asi decirlo el index.html
ReactDOM.render(<HelloWorld/>, document.getElementById("app"));