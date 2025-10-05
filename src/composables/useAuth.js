import router from '../router'

import { FirebaseApp } from './useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebase } from '@vueuse/firebase/useAuth'

const auth = getAuth(FirebaseApp)

const { isAuthenticated, user } = firebaseAuth(auth)

export const useAuth = () => {
    const login = async (username, password) => {
        await signInWithEmailAndPassword(auth, username, password)
        return isAuthenticated.value
    }

    const logout = async () => {
        await signOut(auth)
        router.push({ name: 'Home' })

    }

    return { isAuthenticated, user, login, logout }
}