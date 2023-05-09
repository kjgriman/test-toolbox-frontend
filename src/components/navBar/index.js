"use client"
import { useRef } from "react";
import SearchBar from "../buttons/searchBar";
import { filesService } from '../../services/servicesFiles';
import { useSelector, useDispatch } from "react-redux";
import { saveFile } from "../../redux/fileSlices"
import { useFiles } from "../../hooks/useFiles";

export default function NavBar() {

    const {handlerQueryFile , isLoadingFiles} = useFiles()

    const debouncRef = useRef()

    const handlerQuery = (event) => {
        if (debouncRef.current) {
            clearTimeout(debouncRef.current)
        }
        debouncRef.current = setTimeout(() => {
            handlerQueryFile(event.target.value)
        }, 1000)
    }

    return (
        <nav className="mb-3 navbar navbar-red-light ">
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1 text-white">React Test App</span>
                {isLoadingFiles && (
                    <button className="btn btn-primary" type="button" disabled>
                    <span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"> </span>
                    Searching...
                  </button>
                )}
                <SearchBar onChangeHandler={handlerQuery} />
            </div>
        </nav>
    )
}
