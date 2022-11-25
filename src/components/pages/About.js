import React from 'react';

// import img
import Image from '../../assets/img/about.png';

const About = () => {
  return (
    <section className='section bg-secondary' id='about'>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-24 pt-20'>
          <img
            className='object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl'
            src={Image}
            alt=''
          />
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
            <div className='flex flex-col'>
              <h2 className='text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block'>
                Samara Silvia
              </h2>
              <p className='mb-4 text-violet-500'>
                Freelance Frontend Web Developer
              </p>
              <hr className='mb-8 opacity-5' />
              <p className='mb-8'>

                Olá! Eu sou Samara. Eu tenho 19 anos e já fazem quase 2 anos que estou atuando na área de programação.
                A cada dia que passa eu vou me superando e amando tecnologia cada vez mais. Por agora eu estou mais apegada ao front, mas 
                também aprecio o back-end.
                <br/><br/>
                Sobre o meio acadêmico, eu estou caminhando para o 4° período da minha graduação. Eu faço Sistemas para Internet na Universidade 
                Católica de Pernambuco, por meio da bolsa de estudos do programa Embarque Digital.
                <br/><br/>
                Esse portfólio é resultado de um projeto passado para compor minha nota final. Espero que gostem!!!
              </p>
            </div>
            <a href='/contact'>
              <button className='btn btn-md md:btn-lg transition ease-in-out delay-150 bg-violet-900 hover:-translate-y-1 hover:scale-110 hover:bg-violet-800 duration-300'>
                Contact me
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
