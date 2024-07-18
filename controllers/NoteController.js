import { mongoose } from "mongoose"
import Note from "../models/Note.js"
export const getNotes = async (req, res) => {
    const notes = await Note.find({}).sort({ 'createdAt': -1 })
    res.status(200).json(notes)
}

export const getNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'No Such Note' })
    }
    const workout = await Note.findById(id)
    if (!workout) {
        res.status(400).json({ error: 'No Such Note' })
    }
    else
        res.status(200).json(workout)
}

export const createNote = async (req, res) => {
    const { title, load, reps } = req.body

    let emptyFields = []
    if (!title) {
        emptyFields.push('title')
    }
    if (!load) {
        emptyFields.push('load')
    }
    if (!reps) {
        emptyFields.push('reps')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please Fill in all fields', emptyFields })
    }
    try {
        const Note = await Note.create({ title, load, reps })
        res.status(200).json(Note)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}


export const deleteNote = async (req, res) => {
    // const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'No Such Note' })
    }
    const workout = await Note.findOneAndDelete({ _id: id })
    if (!workout) {
        res.status(400).json({ error: 'No Such Note' })
    }
    else
        res.status(200).json(workout)
}

export const updateNote = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: 'No Such Note' })
    }
    const workout = await Note.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!workout) {
        res.status(400).json({ error: 'No Such Note' })
    }
    else
        res.status(200).json(workout)
}


