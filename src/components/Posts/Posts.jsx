import React from "react";
import "./Posts.css";
import Post from "../Post/Post";

const Posts = () => {
    const blogPosts = [
        {
            title: "JAVASCRIPT",
            body: `JavaScript® (a menudo abreviado como JS) es un lenguaje ligero, interpretado y orientado a objetos con funciones de primera clase,
                    y mejor conocido como el lenguaje de programación para las páginas Web, pero también se utiliza en muchos entornos que no son de navegador.
                    Es un lenguaje de scripts que es dinámico, multiparadigma, basado en prototipos y admite estilos de programación orientados a objetos, imperativos y funcionales.

                    JavaScript se ejecuta en el lado del cliente de la web, y se puede utilizar para estilizar/programar cómo se comportan las páginas web cuando ocurre un evento.
                    JavaScript es un potente lenguaje de scripts y fácil de aprender, ampliamente utilizado para controlar el comportamiento de las páginas web.

                    Contrariamente a la creencia popular, JavaScript no es "Java interpretado".
                    En pocas palabras, JavaScript es un lenguaje de scripts dinámico que admite construcción de objetos basada en prototipos.
                    Intencionalmente, la sintaxis básica es similar a Java y C++ para reducir la cantidad de conceptos nuevos necesarios para aprender el lenguaje.
                    Construcciones del lenguaje, como las declaraciones if, los bucles for y while, y switch y los bloques try...catch funcionan igual que en esos lenguajes (o casi).`,
            author: "JavaScript - MDN Web Docs - Mozilla",
            imgUrl: "https://i.postimg.cc/0MN7zbn7/js-logo.jpg",
        },
        {
            title: "HTML",
            body: `HTML (Lenguaje de Marcas de Hipertexto, del inglés HyperText Markup Language) es el componente más básico de la Web. Define el significado y la estructura del contenido web. 
                    Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web (CSS) o la funcionalidad/comportamiento (JavaScript).
                    "Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. 
                    Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «World Wide Web» (Red Informática Mundial).`,
            author: "HTML: Lenguaje de etiquetas de hipertexto - MDN Web Docs",
            imgUrl: "https://i.postimg.cc/wBs0LZxp/html-logo.png",
        },
        {
            title: "NPM",
            body: `npm is the world's largest software registry. Open source developers from every continent use npm to share and borrow packages, and many organizations use npm to manage private development as well.`,
            author: "Npm Docs",
            imgUrl: "https://i.postimg.cc/Wzs8R4GN/npm-logo.png",
        },
        {
            title: "PHP",
            body: `PHP (acrónimo recursivo de PHP: Hypertext Preprocessor) es un lenguaje de código abierto muy popular especialmente adecuado para el desarrollo web y que puede ser incrustado en HTML.
                    Lo que distingue a PHP de algo del lado del cliente como Javascript es que el código es ejecutado en el servidor, generando HTML y enviándolo al cliente. El cliente recibirá el resultado de ejecutar el script, 
                    aunque no se sabrá el código subyacente que era. El servidor web puede ser configurado incluso para que procese todos los ficheros HTML con PHP, por lo que no hay manera de que los usuarios puedan saber qué se tiene debajo de la manga.

                    Lo mejor de utilizar PHP es su extrema simplicidad para el principiante, pero a su vez ofrece muchas características avanzadas para los programadores profesionales
                    `,
            author: "¿Qué es PHP? - Manual",
            imgUrl: "https://i.postimg.cc/k43wcsDt/php-logo.jpg",
        },
    ];

    return (
        <div className="posts-container">
            {
                blogPosts.map(
                    (post, index) => (
                        <Post key={index} index={index} post={post} />
                    )
                )
            }
        </div>
    );
};

export default Posts;