import express from "express"


import { createNote, getNotes, getNote, deleteNote, updateNote }
    from '../controllers/NoteController.js'

const route = express.Router()

route.get("/", getNotes).post("/", createNote)

route.get("/:id", getNote).delete("/:id", deleteNote).patch("/:id", updateNote)


export default route;
