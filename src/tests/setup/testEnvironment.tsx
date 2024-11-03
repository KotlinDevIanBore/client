import { createMissingPerson } from '../../api/api';
import { PersonWithoutId } from '../../types/person';


export class TestEnvironment {

    static async validateApiConnection() : Promise <boolean>{


        const testPerson: PersonWithoutId = {
            first_name: "TestUser",
            middle_name: "API",
            surname: "Validation",
            age: 25,
            gender: "Other",
            lastseen_location: "Test Location",
            lastseen_date: new Date().toISOString().split('T')[0],
            contact_person: "Test Contact",
            contact_phone: "1234567890",
            contact_email: "test@example.com"
        };

try {
    const result = await createMissingPerson (testPerson);
    console.log ('API Connection Test:', result.status ===201?"successful":"failed")

    return result.status===201;
}

catch (error){
    console.error ('API connection test failed', error)
    return false
}
        

    }
}


