import AIChatBubble from './AIChatBubble'
import MyChatBubble from './MyChatBubble'
import AIChatHeader from '@/assets/AIChatHeader.svg?react'
import X from '@/assets/X.svg?react'
import InputBox from './InputBox'
import { useEffect, useRef, useState } from 'react'

const ChatModal = ({ open, closeModal, step }) => {
  const userName = localStorage.getItem('name')

  const [messages, setMessages] = useState([])
  const webSocket = useRef(null)

  const didConnect = useRef(false)

  useEffect(() => {
    if (!open) return
    if (didConnect.current) return

    didConnect.current = true

    webSocket.current = new WebSocket(`wss://expertofordering.duckdns.org/ws-chat`)
    webSocket.current.onopen = () => {
      console.log('웹소켓 연결')
    }
    webSocket.current.onclose = (error) => {
      console.log(error)
    }
    webSocket.current.onerror = (error) => {
      console.log(error)
    }
    webSocket.current.onmessage = (event) => {
      let payload
      try {
        payload = JSON.parse(event.data)
      } catch {
        payload = { sender: 'ai', text: event.data }
      }

      setMessages((prev) => {
        const idx = [...prev].reverse().findIndex((m) => m.sender === 'ai' && m.loading)
        if (idx === -1) return [...prev, payload]

        const realIdx = prev.length - 1 - idx
        const next = [...prev]
        next[realIdx] = { ...next[realIdx], loading: false, text: payload.text ?? String(payload) }
        return next
      })
    }
    return () => {
      didConnect.current = false
      webSocket.current?.close()
      webSocket.current = null
    }
  }, [open])

  const sendMessage = (text) => {
    if (!text?.trim()) {
      return
    }
    if (!webSocket || webSocket.current.readyState !== WebSocket.OPEN) return
    setMessages((prev) => [...prev, { id: crypto.randomUUID(), sender: 'me', text }])

    const loadingId = crypto.randomUUID()
    setMessages((prev) => [...prev, { id: loadingId, sender: 'ai', loading: true, text: '' }])

    webSocket.current.send(JSON.stringify({ sender: 'me', text, clientId: loadingId }))
  }

  const handleClose = () => {
    try {
      if (webSocket.current && webSocket.current.readyState !== WebSocket.CLOSED) {
        webSocket.current.close(1000, 'modal closed')
      }
    } catch (e) {
      console.log(e)
    } finally {
      webSocket.current = null
      didConnect.current = false
      closeModal?.()
    }
  }

  const TypingDots = () => (
    <span className='inline-flex items-end gap-[0.64rem]'>
      <span className='w-[0.9rem] h-[0.9rem] rounded-full bg-[#58AFFF] animate-bounce [animation-delay:0ms]' />
      <span className='w-[0.9rem] h-[0.9rem] rounded-full bg-[#58AFFF] animate-bounce [animation-delay:150ms]' />
      <span className='w-[0.9rem] h-[0.9rem] rounded-full bg-[#58AFFF] animate-bounce [animation-delay:300ms]' />
    </span>
  )

  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  useEffect(() => {
    if (!open) return

    requestAnimationFrame(() => {
      scrollRef.current?.scrollIntoView({ behavior: 'auto' })
    })
  }, [open])

  return (
    <>
      {open && (
        <div className='fixed inset-0 z-9999 w-full max-w-208.5 mx-auto'>
          <div className='absolute inset-0 w-full max-w-208.5 bg-black/75 flex justify-center items-center'>
            <div className='flex flex-col bg-[#DDEFFF] w-190 rounded-[0.625rem] shadow-[-8px_8px_18px_rgba(0,0,0,0.08)] pb-[2.12rem] h-164.75'>
              {/* Header */}
              <div className='bg-white rounded-[0.625rem] flex relative justify-center items-center w-full h-23'>
                <AIChatHeader />
                <button onClick={handleClose} className='cursor-pointer absolute right-5'>
                  <X />
                </button>
              </div>
              <div className='flex-1 flex flex-col h-full justify-between min-h-0'>
                {/* Bubble */}
                <div className='flex-1 flex flex-col min-h-0'>
                  <div className='flex flex-col flex-1 min-h-0 overflow-y-auto px-[1.56rem] pt-[2.12rem] gap-y-7'>
                    <div className='flex flex-col justify-start'>
                      <AIChatBubble text={`${userName}님, 어떤 것이 궁금하신가요?`} />
                    </div>
                    {messages.map((m, idx) =>
                      m.sender === 'me' ? (
                        <div key={idx} className='flex justify-end'>
                          <MyChatBubble text={m.text} />
                        </div>
                      ) : (
                        <div key={idx} className='flex flex-col justify-start'>
                          <AIChatBubble>{m.loading ? <TypingDots /> : m.text}</AIChatBubble>
                        </div>
                      ),
                    )}
                    <div ref={scrollRef} />
                  </div>
                </div>

                {/* Input */}
                <div className='pt-6'>
                  <InputBox step={step} onSend={sendMessage} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ChatModal
