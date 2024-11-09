'use client'
import { auth } from '@/firebase/clientApp'
import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './components/chat-room'
import SignOut from './components/sign-out'
import SignIn from './components/sign-in'
import './realtime-chat.scss'

export default function RealTimeChat() {

    const [user] = useAuthState(auth)
  
    return (
        <div className='realtime-chat'>
            <header>
                <h1>⚛️🔥💬</h1>
                <SignOut />
            </header>
    
            <section>
                {user ? <ChatRoom /> : <SignIn />}
            </section>
    
        </div>
    )
}