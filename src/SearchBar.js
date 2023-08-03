import { InputText } from 'primereact/inputtext';

function SearchBar() {

    return (
        <div className="grid mt-2">
            <div className="col-12">
                <div className="text-center">
                    <span className="p-input-icon-left">
                        <i className="pi pi-search" />
                        <InputText placeholder="Search" className="p-inputtext-lg" />
                    </span>
                </div>
            </div>
        </div>
    )
}

export default SearchBar;