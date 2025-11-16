import { useEffect, useState } from 'react'

function App() {
  const [mensagem, setMensagem] = useState('Carregando...')
  const API_BASE =
    import.meta.env.VITE_API_URL || 'http://localhost:3000'

  useEffect(() => {
    const url = `${API_BASE}/api/hello`

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error('Resposta não OK da API')
        return res.json()
      })
      .then((data) => setMensagem(data.msg))
      .catch((err) => {
        console.error('Erro ao conectar com a API:', err)
        setMensagem('Luis é foda! (mas a API caiu 😭)')
      })
  }, [API_BASE])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2rem',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <p>
        Mensagem da API: <strong>{mensagem}</strong>
      </p>
    </div>
  )
}

export default App
