import { createMissingPerson, getMissingPersons } from "../../api/api"
import {  PersonWithoutId } from "../../types/person"
import { TestEnvironment } from "../setup/testEnvironment"


describe('Person API Integration Tests', ()=>{


    beforeAll (async ()=>{
        const isConnected = await TestEnvironment.validateApiConnection()

        if (!isConnected) {
            console.error ('error connecting to the database')
        }
    })

    it ('should successfully create a  missing person', async ()=>{
        const newPerson: PersonWithoutId = {
            first_name: "Integration",
            middle_name: "Test",
            surname: "User",
            age: 30,
            gender: "Female",
            lastseen_location: "Test City",
            lastseen_date: "2024-03-01",
            contact_person: "Test Contact",
            contact_phone: "0987654321",
            contact_email: "integration.test@example.com"
        };

        const response = await createMissingPerson (newPerson);

        expect (response.status).toBe(201);
        expect (response.error).toBeUndefined()



    })

    it ('should fail with invalid data ', async ()=>{

         const invalidPerson: PersonWithoutId = {
            first_name: "",                 
            middle_name: "",               
            surname: "",                    
            age: -5,                        
            gender: "Not a Gender",         
            lastseen_location: "",          
            lastseen_date: "invalid date",  
            contact_person: "",             
            contact_phone: "not a number",  
            contact_email: "not an email"   
        };

        const response = await createMissingPerson(invalidPerson);


        expect (response.status).not.toBe (201)
        expect (response.error).toBeDefined();
    })

    it ('should successfully get all persons', async ()=>{


        const data = await getMissingPersons();
        expect (Array.isArray(data)).toBe(true)


        if (data.length>0 ){

            const firstPerson = data[0]

            expect (firstPerson).toHaveProperty('id')
            expect (firstPerson).toHaveProperty('first_name')
            expect (firstPerson).toHaveProperty('surname')
            expect (firstPerson).toHaveProperty ('age')
            expect(firstPerson).toHaveProperty('gender')



        }

    })
})