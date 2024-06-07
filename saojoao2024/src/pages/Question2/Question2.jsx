import React, { useContext, useState } from 'react'
import Logo from '../../components/Logo/Logo'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Context from '../../Context/Context'
import Error from '../../components/Error/Error'
import { useNavigate } from 'react-router-dom'

const Question2 = () => {

  window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
window.history.pushState(null, "", window.location.href);
};
  

  const navigate = useNavigate()
  

  const [input, setInput] = useState('')
  const {error, setError, feedbacks, setFeedbacks} = useContext(Context)
  

  const handleClick = () => {
    if (input.length === 0) {
      setError('Preencha o campo!');
      setTimeout(() => {
        setError('');
      }, 3000);
      return;
    }

    feedbacks.push(input)
    setFeedbacks(feedbacks)
    console.log(feedbacks)

    navigate('/question3')
  };
  
  return (
    <div className='font-rockwell'>
              <header className='flex justify-center items-center mt-28'>
            <Logo/>
        </header>
        <main className='flex justify-center items-center flex-col '>
            <h1 className='text-white text-2xl font-bold py-10'>Qual a sua cidade?</h1>
            <Input onChange={(e) => setInput(e.target.value)} value={input} type='text' placeholder='Digite aqui...'/>
            <div className='mt-20'>
            <Button onClick={handleClick}>PROXIMA PERGUNTA &gt;&gt;&gt; </Button>
            <div className='flex justify-center items-center'>
              <Error/>
            </div>
            </div>
        </main>
    </div>
  )
}

export default Question2