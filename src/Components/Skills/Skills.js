import React from 'react'
import './Skills.css'
import Carousel from '../SkillsCarossel/SkillsCarrossel.js';
import Slider from "react-slick";

const itens = [
  {
    nome: "React",
    img: "/images/React-logo.png"
  },
  {
    nome: "JavaScript",
    img: "/images/JavaScript-logo.png"
  },
  {
    nome: "NodeJs",
    img: "/images/NodeJs-logo.png"
  },
  {
    nome: "Bootstrap",
    img: "/images/Bootstrap.png"
  },
  {
    nome: "Express",
    img: "/images/Express.png"
  },
  {
    nome: "Java",
    img: "/images/Java.png"
  },
  {
    nome: "CSS3",
    img: "/images/CSS3.png"
  },
  {
    nome: "HTML5",
    img: "/images/Html.png"
  },
  {
    nome: "MongoDB",
    img: "/images/MongoDb.png"
  },
  {
    nome: "MySql",
    img: "/images/MySQL.png"
  },
  {
    nome: "AWS",
    img: "/images/aws.png"
  },
  {
    nome: "Python",
    img: "/images/Python.png"
  },
  {
    nome: "C#",
    img: "/images/CSharp.png"
  }
];

let settings = {
  dots: true,
  infinite: true,
  speed: 400,
  centerMode: false,
  variableWidth: true,
  adaptiveHeight: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};


const Skills = () => {
  return (
    <div className="skills__container">
      <h2 className='skills__titulo' id='form'>Skills</h2>
      <div className="skills__img-and-carousel">
        <div className="skills__img-img">
          <img src='/images/imagemSkills.png'></img>
        </div>
        <div className='skills__carousel'>
          <div className='skills__carousel-items'>
            <div className="slider__container">
              <Slider {...settings}>
                {
                  itens.map((item, index) => (
                    <div className='skill__card-conteiner'>
                      <img src={item.img} alt={`logo ${item.nome}`} key={index}></img>
                      <p>{item.nome}</p>
                    </div>
                  ))
                }
              </Slider>
            </div>
            <div className='skills__texto'>
            <p>
              Estou sempre em busca de novos desafios e oportunidades para colaborar.
              Se você tem um projeto em mente, vamos tirá-lo do papel?
            </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
    }

      export default Skills

