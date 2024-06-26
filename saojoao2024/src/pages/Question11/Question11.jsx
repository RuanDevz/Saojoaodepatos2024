import React,{useContext, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import Context from '../../Context/Context';
import Error from '../../components/Error/Error';
import BalaoESanfona from '../../components/balaoesanfona/balaoesanfona';

const Question11 = () => {

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};

    const [option, setOption] = useState(null);
    const navigate = useNavigate()
  
    const handleOptionSelection = (event) => {
        setOption(event);
    };

    const {setError, feedbacks, setFeedbacks} = useContext(Context)
    
  useEffect(() => {
    setError('')
  },[])
  
    const handleclick = () =>{
      if(!option){
        setError('Preencha o campo!')
      }else{
        window.scrollTo({top: 0});
        feedbacks.push(option)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question12')
      }
    }

  return (
    <div>
       <header className='flex justify-center items-center mt-10 lg:pb-5 2xl:mt-32'>
        <Logo/>
      </header>
      <main className='flex justify-center items-center flex-col gap-0 font-rockwell lg:flex-row lg:gap-40'>
      <h1 className='text-white font-bold  text-2xl  text-center pt-4 lg:text-5xl max-w-text2 lg:leading-normal'>Sobre suas intenções de volta:</h1>
        <section className='lg:text-3xl'>
        <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' 
            htmlFor="COMCERTEZAVOLTO">
                <InputCheck
                type='checkbox'
                id='COMCERTEZAVOLTO'
                value='COM CERTEZA VOLTO'
                checked={option === 'COM CERTEZA VOLTO'}
                onChange={() => handleOptionSelection('COM CERTEZA VOLTO')}
              />
              <span>COM CERTEZA VOLTO</span>
            </label>
          </div>
        <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="VOLTOELEVOAMIGOS">
            <InputCheck
                type='checkbox'
                id='VOLTOELEVOAMIGOS'
                value='VOLTO E LEVO AMIGOS'
                checked={option === 'VOLTO E LEVO AMIGOS'}
                onChange={() => handleOptionSelection('VOLTO E LEVO AMIGOS')}
              />
              <span>VOLTO E LEVO AMIGOS</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="NAOVOLTO">
              <InputCheck
                type='checkbox'
                id='NAOVOLTO'
                value='NÃO VOLTO'
                checked={option === 'NÃO VOLTO'}
                onChange={() => handleOptionSelection('NÃO VOLTO')}
              />
              <span>NÃO VOLTO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5  my-10 text-white font-bold' htmlFor="AINDATENHODUVIDAS">
              <InputCheck
                type='checkbox'
                id='AINDATENHODUVIDAS'
                value='AINDA TENHO DÚVIDAS'
                checked={option === 'AINDA TENHO DÚVIDAS'}
                onChange={() => handleOptionSelection('AINDA TENHO DÚVIDAS')}
              />
              <span>AINDA TENHO DÚVIDAS</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center lg:mt-20'>
      <Button onClick={handleclick}>PRÓXIMA PERGUNTA &gt;&gt;&gt;</Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error/>
      </div>
      <div>
          <BalaoESanfona />
      </div>
    </div>
  )
}

export default Question11
