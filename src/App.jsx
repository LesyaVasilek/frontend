import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')
  const [data, setData] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text })
      })
      if (res.ok) {
        setMessage('Отправлено')
        setText('')
      } else {
        setMessage('Ошибка отправки')
      }
    } catch {
      setMessage('Ошибка сети')
    }
  }

  async function fetchData() {
    try {
      const res = await fetch('/api/data')
      const result = await res.json()
      setData(result.data)
    } catch {
      setData('Ошибка загрузки ')
    }
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Введите текст"
        />
        <button type="submit">Отправить</button>
        <div>{message}</div>
      </form>
      
      <div>
        <button onClick={fetchData}>Получить данные</button>
        <textarea 
          value={data} 
          readOnly 
          placeholder="Данные из файла появятся здесь " 
          rows="5"
          cols="50"
        />
      </div>
    </div>
  )
}


