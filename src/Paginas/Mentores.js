import React, { useState } from 'react'
import './Mentores.css'
import mentor1 from '../Recursos/PedroInacio.jpg'
import mentor2 from '../Recursos/AnaClara.jpg'
import mentor3 from '../Recursos/VascoLopes.jpg'
import mentor4 from '../Recursos/BrunoSilva.jpg'
import mentor5 from '../Recursos/PedroGaspar.jpg'
import mentor6 from '../Recursos/JhonnyOcampo.jpg'
import mentor7 from '../Recursos/JoaoLeitao.png'
import mentor8 from '../Recursos/HugoMiguel.jpg'
import mentor9 from '../Recursos/GoncaloFonseca.jpg'
import mentor10 from '../Recursos/DinaPereira.jpg'
import mentor11 from '../Recursos/TiagoOliveira.jpg'

function Mentores() {

  const [name, setName] = useState('Pedro Inácio')
  const [about, setAbout] = useState('Professor Associado do Departamento de Informática na Faculdade de Engenharia da Universidade da Beira Interior (UBI), é Doutorado em Ciências e Engenharia Informática pela UBI, sendo atualmente Pró-Reitor da Universidade Digital e Encarregado de Proteção de Dados da UBI. Os seus principais tópicos de investigação são a garantia e a segurança da informação, a simulação baseada em computador e a monitorização, análise e classificação do tráfego de rede.')


  return (
    <div className='page_content'>

      <div className='tablediv'></div>

      <div className='first_line'>

      
      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor1} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>{name}</h1> 
          <p>{about}</p>
        </div>
      </div>

      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor2} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>Ana Clara Cristóvão</h1> 
          <p>CEO e Fundadora da Startup NeuroSoV, incubada na UBImedical, sendo Doutorada em Biologia pela Universidade de Coimbra na especialidade de biologia celular – ramo das neurociências, tendo também uma Pós-Graduação em Empreendedorismo e Inovação em Bio-saúde pela Universidade da Beira Interior. Com mais de 15 anos de experiência no ramo das neurociências, é atualmente investigadora em neurociências no Centro de Investigação de Ciências da Saúde (CICS-UBI).</p>
        </div>
      </div>

      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor3} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>Vasco Lopes</h1> 
          <p>Fundador e CEO da Startup DeepNeuronic, incubada na UBImedical, é doutorando em Engenharia Informática pela Universidade da Beira Interior, tendo mestrado também em Engenharia Informática na mesma Universidade. O Vasco Lopes tem uma vasta experiência em projetos relacionados com Inteligência Artificial, Machine Learning, Deep Learning e Computer Vision.</p>
        </div>
      </div>

      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor4} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>Bruno Silva</h1> 
          <p>Professor Bruno Silva (PI) (IT/UBI), Professor Auxiliar, no Departamento de Informática da UBI, Covilhã, Portugal. É investigador no Instituto de Telecomunicações da UBI, co-coordenador do SINS Lab, integrado no grupo de investigação (IT-Covilhã) Network Applications and Services. É membro IEEE, e as suas áreas de investigação incluem: Redes de Computadores; Computação móvel; Internet das Coisas; e desenvolvimento web e jogos digitais;</p>
        </div>
      </div>
      </div>

      <div className='next_line'>

      
      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor5} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>Pedro Dinis Gaspar</h1> 
          <p>Professor no Departamento de Engenharia Eletromecânica da Universidade da Beira Interior (UBI), Portugal, é Doutorado em Engenharia Mecânica pela UBI. É investigador integrado do Centro de I&D em Mecânica e Ciências e Tecnologias Aeroespaciais (CMAST) e investigador colaborador do ALLab - Assisted Living Computing and Telecommunications Laboratory, Instituto de Telecomunicações (IT). As suas principais áreas de investigação são a termodinâmica e transferência de calor, Sistemas de Energia, Engenharia e Gestão Industrial, Automação, Robótica, Sistemas Embebidos e Sistemas de Controlo.</p>
        </div>
      </div>

      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor6} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>Jhonny Ocampo</h1> 
          <p>Fundador e CEO da startup Nomad-e, incubada na UBImedical, é também Professor de Tecnologias de Informação na Escola Profissional do Fundão. Entusiasta das tecnologias e inovação, tem uma vasta experiência em gestão de projetos, liderança de equipas e desenvolvimento de produtos, além de experiência em metodologias ágeis, como o Scrum, além de conhecimento em Inteligência Artificial, aplicações Blockchain e Robotic Process Automation (RPA).</p>
        </div>
      </div>

      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor7} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>João Leitão</h1> 
          <p>Professor Associado com Agregação na Faculdade de Ciências Sociais e Humanas da Universidade da Beira Interior (UBI), é Doutorado em Economia pela UBI, vice-coordenador e investigador integrado no NECE – Núcleo de Estudos em Ciências Empresariais da UBI e investigador colaborador no CEG-IST – Centro de Estudos de Gestão (IST-Universidade de Lisboa), bem como investigador associado no ICS – Instituto de Ciências Sociais da Universidade de Lisboa, tendo como interesses de investigação: o empreendedorismo; a inovação; o desenvolvimento sustentável; e as políticas públicas. Desempenha ainda as funções de Diretor da UBIExecutive, escola de negócios da UBI, e é atualmente o Presidente da Associação Portuguesa para o Desenvolvimento Regional (APDR).</p>
        </div>
      </div>

      <div className='mentor_card'>
        <div className='upper_container'>
          <div className='image_container'>
            <img src={mentor8} alt='' height="100px" width="100px"/>
          </div>
        </div>
        <div className='lower_container'>
          <h1>Hugo Miguel Maia</h1> 
          <p>Operations & Innovation Director na Quilaban, tem uma sólida carreira na área da saúde e med tech, desenvolvida em várias empresas (Associação Nacional de Farmácias, Alliance Healthcare, Faminveste IPG. e Glintt GIT). Com profundo conhecimento de Gestão em Saúde, nomeadamente na Indústria Farmacêutica, Plataformas de Inovação, Supply Chain e Marketing e Vendas, detém formação académica em saúde e gestão empresarial (Executive Master Business Administration - AESE | IESE Business School, Programa Avançado de Marketing para Executivos - Universidade Católica de Lisboa, Mestrado em Gestão de Empresas no IBS - ISCTE BUSINESS SCHOOL, Kaizen e Lean Management, pelo Kaizen Institute Portugal).</p>
        </div>
      </div>
      </div>



      <div className='last_line'>

        <div className='mentor_card'>
          <div className='upper_container'>
            <div className='image_container'>
              <img src={mentor9} alt='' height="100px" width="100px"/>
            </div>
          </div>
          <div className='lower_container'>
            <h1>Gonçalo Fonseca</h1> 
            <p>Fundador e CEO da Startup BEDEV, incubada na UBImedical, é Mestre em Bioengenharia pela Universidade da Beira Interior (UBI), tendo também uma Pós-Graduação em Empreendedorismo e Inovação em Bio-saúde pela mesma Universidade. As suas áreas de trabalho são o desenvolvimento de dispositivos médicos e a impressão 3D.</p>
          </div>
        </div>

        <div className='mentor_card'>
          <div className='upper_container'>
            <div className='image_container'>
              <img src={mentor10} alt='' height="100px" width="100px"/>
            </div>
          </div>
          <div className='lower_container'>
            <h1>Dina Pereira</h1> 
            <p>Doutorada em Engenharia e Gestão Industrial, é gestora executiva da UBImedical, a incubadora de empresas da Universidade da Beira Interior (UBI). É Investigadora no CEG-IST - Centro de Estudos de Gestão (IST-Universidade de Lisboa) e no NECE - Núcleo de Estudos em Ciências Empresariais (UBI), onde as suas principais áreas de investigação são o empreendedorismo e a inovação. É sócia-fundadora de uma spin-off da UBI, colaboradora da FEFAL – Fundação para os Estudos e Formação das Autarquias Locais e mentora da EIT Health Mentoring and Coaching Network (MCN) e da BGI – Building Global Innovators.</p>
          </div>
        </div>

        <div className='mentor_card'>
          <div className='upper_container'>
            <div className='image_container'>
              <img src={mentor11} alt='' height="100px" width="100px"/>
            </div>
          </div>
          <div className='lower_container'>
            <h1>Tiago Oliveira</h1> 
            <p>Licenciado e Mestre em Marketing pela Universidade da Beira Interior (UBI), detém ainda um MBA pela mesma Universidade, sendo atualmente doutorando em Gestão na UBI. Com vasta experiência em marketing estratégico, gestão comercial e recursos humanos nas áreas da banca/seguros e organização de eventos, é atualmente Técnico Superior na UBImedical, a incubadora de empresas da UBI, sendo também investigador do NECE – Núcleo de Estudos em Ciências Empresariais da UBI.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Mentores
