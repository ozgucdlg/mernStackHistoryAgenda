import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../db/userModel.js'
import dotenv from 'dotenv'

dotenv.config()

const router = express.Router()

// Sign In
router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    
    try {
        const existingUser = await User.findOne({ email })
        
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exist." })
        }
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password)
        
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid credentials." })
        }
        
        const token = jwt.sign(
            { email: existingUser.email, id: existingUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        
        res.status(200).json({ result: existingUser, token })
    } catch (error) {
        console.error('Sign in error:', error)
        res.status(500).json({ message: "Something went wrong with sign in." })
    }
})

// Sign Up
router.post('/signup', async (req, res) => {
    const { email, password, confirmPassword, firstName, lastName } = req.body
    
    try {
        if (!email || !password || !firstName || !lastName) {
            return res.status(400).json({ message: "All fields are required." })
        }

        const existingUser = await User.findOne({ email })
        
        if (existingUser) {
            return res.status(400).json({ message: "User already exists." })
        }
        
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords don't match." })
        }
        
        const hashedPassword = await bcrypt.hash(password, 12)
        
        const result = await User.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,
            createdAt: new Date()
        })
        
        const token = jwt.sign(
            { email: result.email, id: result._id },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        )
        
        res.status(201).json({ result, token })
    } catch (error) {
        console.error('Sign up error:', error)
        res.status(500).json({ message: "Something went wrong with sign up." })
    }
})

export default router 