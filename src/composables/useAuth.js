import router from '../router'

import { firebaseApp } from '@/composables/useFirebase'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { useAuth as firebase } from '@vueuse/firebase/useAuth'

const auth = getAuth(firebaseApp)

const { isAuthenticated, user } = firebase(auth)

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