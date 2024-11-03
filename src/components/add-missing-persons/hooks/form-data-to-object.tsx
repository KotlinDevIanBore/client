import { PersonWithoutId } from "../../../types/person";

const useFormDataToObject = () => {
    const formDataToObject = (formData: FormData): Partial<PersonWithoutId> => {
        const obj: Partial<PersonWithoutId> = {};

        formData.forEach((value, key) => {
            if (key === "age") {
               
                const ageValue = Number(value);
                if (!isNaN(ageValue)) {
                    obj.age = ageValue; 
                }
            } else if (typeof value === 'string') {
               
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                obj[key as keyof PersonWithoutId] = value as any; 
            } else if (value instanceof File) {
                console.warn(`File input detected for key: ${key}, but not assigned to object`);
            }
        });

        return obj; 
    };

    return { formDataToObject };
};

export default useFormDataToObject;
