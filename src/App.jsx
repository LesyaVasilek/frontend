import React, { useState } from 'react'

export default function App() {
  const [text, setText] = useState('')
  const [message, setMessage] = useState('')

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

  return (
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
  )
}


