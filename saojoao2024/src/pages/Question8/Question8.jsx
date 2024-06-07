import React,{useContext, useState} from 'react'
import Logo from '../../components/Logo/Logo';
import InputCheck from '../../components/Input/InputCheck';
import Button from '../../components/Button/Button';
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom';
import Context from '../../Context/Context';

const Question8 = () => {

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};


    const [nota, setNota] = useState(null)

    const {setError, feedbacks, setFeedbacks} = useContext(Context)
    
    const navigate = useNavigate()

    const handleNotaSelected = (event) =>{
        setNota(event)
    }

    const handleclick = () =>{
      if(!nota){
        setError('Preencha o campo!')
        setTimeout(() => {
         setError('')
         return
        }, 3000);
      }else{
        feedbacks.push(nota)
        setFeedbacks(feedbacks)
        console.log(feedbacks)
        navigate('/question9')
      }
    }

  return (
    <div className='font-rockwell'>
        <header className='flex justify-center items-center mt-5'>
        <Logo/>
      </header>
      <h1 className='text-white font-bold text-center py-2 text-2xl'>Sobre a estrutura do evento você gostou?</h1>
      <main className='flex justify-center items-center font-rockwell'>
        <section className=''>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="gosteimuito">
              <InputCheck
                type='checkbox'
                id='gosteimuito'
                value='GOSTEI MUITO'
                checked={nota === 'GOSTEI MUITO'}
                onChange={() => handleNotaSelected('GOSTEI MUITO')}
              />
              <span>GOSTEI MUITO</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="gostei">
              <InputCheck
                type='checkbox'
                id='gostei'
                value='GOSTEI'
                checked={nota === 'GOSTEI'}
                onChange={() => handleNotaSelected('GOSTEI')}
              />
              <span>GOSTEI</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="indiferente">
              <InputCheck
                type='checkbox'
                id='indiferente'
                value='INDIFERENTE'
                checked={nota === 'INDIFERENTE'}
                onChange={() => handleNotaSelected('INDIFERENTE')}
              />
              <span>INDIFERENTE</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="poderiamelhorar">
              <InputCheck
                type='checkbox'
                id='poderiamelhorar'
                value='PODERERIA MELHORAR'
                checked={nota === 'PODERERIA MELHORAR'}
                onChange={() => handleNotaSelected('PODERERIA MELHORAR')}
              />
              <span>PODERERIA MELHORAR</span>
            </label>
          </div>
          <div>
            <label className='flex items-center gap-5 my-10 text-white font-bold' htmlFor="naogostei">
              <InputCheck
                type='checkbox'
                id='naogostei'
                value='NÃO GOSTEI'
                checked={nota === 'NÃO GOSTEI'}
                onChange={() => handleNotaSelected('NÃO GOSTEI')}
              />
              <span>NÃO GOSTEI</span>
            </label>
          </div>
        </section>
      </main>
      <div className='flex justify-center items-center'>
        <Button onClick={handleclick}>PROXIMA PERGUNTA &gt;&gt;&gt; </Button>
      </div>
      <div className='flex justify-center items-center'>
        <Error/>
      </div>
    </div>
  )
}

export default Question8