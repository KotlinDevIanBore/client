import DisplayPersonsProvider from "./context";
import DisplayPersons from "./display-persons";

const DisplayPersonsWrapper = () => {
    return (
        <div>
            <DisplayPersonsProvider>
                <DisplayPersons />
            </DisplayPersonsProvider>
        </div>
    );
};

export default DisplayPersonsWrapper;
