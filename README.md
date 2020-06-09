# Unit 11 Express Homework: Note Taker

## Description

This is a web application the allows a user to write a note and give it a title and save it. It also shows a list of all the saved notes, allows the user to view saved notes, and allows the user to delete saved notes. It stores all of the notes in a db.json file which it reads and updates.

## User Story

AS A user, I want to be able to write and save notes

I WANT to be able to delete notes I've written before

SO THAT I can organize my thoughts and keep track of tasks I need to complete

GIVEN a note taking web application
WHEN I navigate to the deployed site
THEN the main page is displayed
WHEN I click the button to "Get Started", or navigate to the deployed site with "/notes"
THEN the notes.html is displayed and all of the saved notes are displayed
WHEN I type a note and click save
THEN the note is written to the db.json and added to the list of saved notes
WHEN I click the trash button for a note, it removes that note from the list and removes it from the db.json file
WHEN I save a note, an internal ID number is associated with it
THEN I am able to use that ID number to delete the notes when it is selected to be deleted.

## Business Context

For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.

## Acceptance Criteria

DONE - Application should allow users to create and save notes.

DONE - Application should allow users to view previously saved notes.

DONE - Application should allow users to delete previously saved notes.