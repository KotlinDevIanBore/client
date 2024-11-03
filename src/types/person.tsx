export interface Person {
    id: string;
    first_name: string;
    middle_name: string;
    surname: string;
    age: number;
    gender: string;
    lastseen_location: string;
    lastseen_date: string;
    contact_person: string;
    contact_phone: string;
    contact_email: string;
    image_url?: string;

  }

  export interface PersonWithoutId {
    first_name: string;
    middle_name: string;
    surname: string;
    age: number;
    gender: string;
    lastseen_location: string;
    lastseen_date: string;
    contact_person: string;
    contact_phone: string;
    contact_email: string;
    image_url?: string;
}
